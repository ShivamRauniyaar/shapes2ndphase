"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import React, { ReactNode, useEffect, useRef } from "react";
import { gsap } from 'gsap'
const PageTransition = dynamic(() => import("./page-transition"), {
  ssr: false,
});

interface PageTransitionWrapperProps {
  children: ReactNode;
}

export default function PageTransitionWrapper({
  children,
}: PageTransitionWrapperProps) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Exit animation
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          // Enter animation
          gsap.fromTo(
            containerRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5 }
          );
        },
      });
    }
  }, [pathname]);
  return (
    <React.Suspense fallback={<div>{children}</div>}>
      <PageTransition>{children}</PageTransition>
    </React.Suspense>
  );
}
