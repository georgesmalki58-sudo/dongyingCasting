'use client';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return (
    <div className="container-x flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-mono text-4xl font-bold text-brand">⚠</p>
      <h1 className="mt-4 text-2xl font-bold text-steel-900">Something went wrong</h1>
      <p className="prose-muted mt-2">An unexpected error occurred. Please try again.</p>
      <button onClick={reset} className="btn-primary mt-8">Try again</button>
    </div>
  );
}
