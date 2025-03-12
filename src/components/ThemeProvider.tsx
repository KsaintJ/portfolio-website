"use client";

import { ReactNode, useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering once the component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  // During SSR, render the children without the theme provider to avoid hydration mismatch
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}