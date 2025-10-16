"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Center } from "@react-three/drei";
import * as THREE from "three";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

function ObjModel({
  objUrl = "/models/my-build.obj",
  mtlUrl = "/models/my-build.mtl",
  resourcePath = "/models/",
  scale = 5, // daha küçük başlat
}: {
  objUrl?: string;
  mtlUrl?: string;
  resourcePath?: string;
  scale?: number;
}) {
  const [object, setObject] = useState<THREE.Object3D | null>(null);
  const rotRef = useRef<THREE.Group>(null);
  const { camera } = useThree() as { camera: THREE.PerspectiveCamera };

  useEffect(() => {
    let mounted = true;

    (async () => {
      const mtlLoader = new MTLLoader();
      mtlLoader.setResourcePath(resourcePath);
      const materials = await mtlLoader.loadAsync(mtlUrl);
      materials.preload();

      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      const obj = await objLoader.loadAsync(objUrl);

      obj.traverse((c) => {
        if ((c as THREE.Mesh).isMesh) {
          const mesh = c as THREE.Mesh;
          mesh.castShadow = true;
          mesh.receiveShadow = true;

          // ✨ kritik: kesilme olmasın
          mesh.frustumCulled = false;

          // görünmez/ters yüzler olmasın
          const mats = Array.isArray(mesh.material)
            ? mesh.material
            : [mesh.material];
          mats.forEach((m) => ((m as THREE.Material).side = THREE.DoubleSide));

          if (!mesh.geometry.attributes.normal)
            mesh.geometry.computeVertexNormals();
          if (!mesh.geometry.boundingSphere)
            mesh.geometry.computeBoundingSphere();
        }
      });

      // --- kamerayı tüm modeli kadraja alacak şekilde ayarla ---
      // (Center, modeli orijine yakınlar; bu yüzden lookAt(0,0,0) genelde yeterli)
      const box = new THREE.Box3().setFromObject(obj);
      const sphere = box.getBoundingSphere(new THREE.Sphere());
      if (sphere) {
        const fov = (camera.fov * Math.PI) / 180;
        const distance = (sphere.radius * 1.6) / Math.sin(fov / 2); // 1.6 = biraz boşluk payı
        camera.position.set(
          sphere.center.x,
          sphere.center.y + sphere.radius * 0.35,
          sphere.center.z + distance
        );
        camera.near = Math.max(0.1, sphere.radius / 200);
        camera.far = distance * 10;
        camera.lookAt(sphere.center);
        camera.updateProjectionMatrix();
      }
      // ----------------------------------------------------------

      if (mounted) setObject(obj);
    })();

    return () => {
      mounted = false;
    };
  }, [objUrl, mtlUrl, resourcePath, camera]);

  // yalnızca yatay (Y) dönüş
  useFrame(() => {
    if (rotRef.current) rotRef.current.rotation.y += 0.004;
  });

  if (!object) return null;

  return (
    <Center>
      <group ref={rotRef}>
        <primitive object={object} scale={[3, 3, 3]} />
      </group>
    </Center>
  );
}

export default function ObjViewer() {
  return (
    <div className=" h-[250px] position-relative flex items-center m-0 p-0 justify-center overflow-hidden">
      <Canvas
        shadows
        gl={{ alpha: true }} // arka plan şeffaf
        camera={{ position: [25, 20, 35], fov: 40, near: 0.01, far: 5000 }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[15, 25, 15]} intensity={1.25} castShadow />
        <Suspense fallback={null}>
          <ObjModel />
        </Suspense>
        <OrbitControls enableZoom={true} minDistance={100} maxDistance={550} />
      </Canvas>
    </div>
  );
}
