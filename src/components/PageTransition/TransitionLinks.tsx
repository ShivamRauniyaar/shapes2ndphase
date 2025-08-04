"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type TransitionLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function TransitionLink({
  href,
  children,
  className = "",
}: TransitionLinkProps) {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const body = document.querySelector("body");
    body?.classList.add("page-transition");
    await sleep(500);

    router.push(href);
    await sleep(500);

    body?.classList.remove("page-transition");
  };

 

  return (
    <>
      <Link
        href={href}
        onClick={handleClick}
        className={className}
       
      >
        {children}
      </Link>
      
    </>
  );
}
