"use client";

export const YANDEX_METRIKA_ID = 107738907;

export function reachMetrikaGoal(goal, params = {}) {
  if (typeof window === "undefined" || typeof window.ym !== "function") return;

  window.ym(YANDEX_METRIKA_ID, "reachGoal", goal, params);
}
