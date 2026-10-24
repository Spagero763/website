"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";
import { usePageTransition } from "./PageTransition";
import { scrollToTarget } from "@/lib/scroll";

type Props = ComponentProps<typeof Link> & { href: string; label?: string };

export default function TransitionLink({ href, label, onClick, children, ...rest }: Props) {
  const { navigate } = usePageTransition();
  const pathname = usePathname();

  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

    const [path, hash] = href.split("#");
    const samePage = path === "" || path === pathname;

    if (samePage && hash !== undefined) {
      e.preventDefault();
      scrollToTarget(hash ? `#${hash}` : 0);
      history.replaceState(null, "", hash ? `#${hash}` : pathname);
      return;
    }
    if (samePage) {
      e.preventDefault();
      scrollToTarget(0);
      return;
    }

    e.preventDefault();
    navigate(href, label);
  };

  return (
    <Link href={href} onClick={handle} {...rest}>
      {children}
    </Link>
  );
}
