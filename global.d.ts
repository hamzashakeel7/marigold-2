declare global {
  interface Window {
    Clerk?: import("@clerk/clerk-js").Clerk;
  }
}

export {};
