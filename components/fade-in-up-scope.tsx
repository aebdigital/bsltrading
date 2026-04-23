"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";

const animationSelector = [
  "main > section",
  "main > article",
  "main > div",
  "main section > div",
  "main section > article",
  "main article",
  "main aside",
  "main h1",
  "main h2",
  "main h3",
  "main p",
  "main ul",
  "main ol",
  "main form",
  "main video",
].join(", ");

export function FadeInUpScope({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const scopeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scope = scopeRef.current;

    if (!scope) {
      return;
    }

    const nodes = Array.from(scope.querySelectorAll<HTMLElement>(animationSelector));

    nodes.forEach((node) => {
      node.classList.remove("fade-in-up-enter");
      node.style.removeProperty("--fade-delay");
    });

    const rafId = window.requestAnimationFrame(() => {
      void scope.offsetHeight;

      nodes.forEach((node, index) => {
        node.style.setProperty("--fade-delay", `${Math.min(index * 25, 300)}ms`);
        node.classList.add("fade-in-up-enter");
      });
    });

    return () => {
      window.cancelAnimationFrame(rafId);
    };
  }, [pathname]);

  return <div ref={scopeRef}>{children}</div>;
}
