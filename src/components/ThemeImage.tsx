// components/ThemeImage.tsx
"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type Props = { alt?: string; className?: string; width?: number; height?: number };

export default function ThemeImage({ alt = "", className, width = 20, height = 20 }: Props) {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // SSR'da tema bilinmiyor → güvenli varsayılan
  if (!mounted) {
    return <Image alt={alt} src="/github-mark.svg" width={width} height={height} className={className} />;
  }

  const current = theme === "system" ? systemTheme : theme;
  const src = current === "dark" ? "/github-mark-white.svg" : "/github-mark.svg";

  return <Image alt={alt} src={src} width={width} height={height} className={className} />;
}
