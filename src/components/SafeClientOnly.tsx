"use client";
import { useEffect, useState, ReactNode } from 'react';

interface SafeClientOnlyProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export default function SafeClientOnly({ children, fallback = null }: SafeClientOnlyProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}