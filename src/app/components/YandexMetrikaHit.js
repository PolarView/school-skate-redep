"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { YANDEX_METRIKA_ID } from "../lib/yandexMetrika";

const YandexMetrikaHit = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.ym !== "function") return;

    const query = searchParams?.toString();
    const url = query ? `${pathname}?${query}` : pathname;

    window.ym(YANDEX_METRIKA_ID, "hit", url, {
      referer: document.referrer
    });
  }, [pathname, searchParams]);

  return null;
};

export default YandexMetrikaHit;
