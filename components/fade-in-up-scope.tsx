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

    // Initial reset
    nodes.forEach((node) => {
      node.classList.remove("fade-in-up-enter");
      node.style.removeProperty("--fade-delay");
      node.style.opacity = "0"; // Ensure they start hidden
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add("fade-in-up-enter");
            observer.unobserve(target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    nodes.forEach((node, index) => {
      node.style.setProperty("--fade-delay", `${Math.min(index * 50, 400)}ms`);
      observer.observe(node);
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return <div ref={scopeRef}>{children}</div>;
}
