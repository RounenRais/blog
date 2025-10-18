import Layout from "../../components/article";
import Image from "next/image";
import Link from "next/link";
export default function Works() {
  return (
    <div className="flex flex-col w-100  mt-3">
        <Layout title="Works">
       <h3 className="works-text font-bold  ">Works</h3>
         <div className="works flex flex-wrap gap-5 justify-center pt-5  ">
            <div className="work w-47 h-auto"> <a rel="stylesheet" href="https://github.com/RounenRais/pokeforum" >  <div className="face rounded-2xl w-47 h-30 "><Image  src="/poke-forum.png" alt="Work 1" width={200} height={100} className="h-30 rounded-xl" /></div><div className="contentWork mt-2 text-center"> <h3 className="font-bold">PokeForum</h3> <p>Forum web site about pokemons.</p></div></a></div>
            <div className="work w-47 h-auto"> <a rel="stylesheet" href="https://github.com/RounenRais/imlabot_V2" >  <div className="face rounded-2xl w-47 h-30 "><Image  src="/imla-bot.png" alt="Work 1" width={200} height={100} className="h-30 rounded-xl" /></div><div className="contentWork mt-2 text-center"> <h3 className="font-bold">Imla Bot</h3> <p>A chatbot for the help turkish grammar rules.</p></div></a></div>
            <div className="work w-47 h-auto"> <a rel="stylesheet" href="https://github.com/RounenRais/OkurunKosesiVue" >  <div className="face rounded-2xl w-47 h-30 "><Image  src="/litQuest.png" alt="Work 1" width={200} height={100} className="h-30 rounded-xl" /></div><div className="contentWork mt-2 text-center"> <h3 className="font-bold">LitQuest</h3> <p>Mini games about literature.</p></div></a></div>
            </div>
    </Layout>
    </div>
  );
}