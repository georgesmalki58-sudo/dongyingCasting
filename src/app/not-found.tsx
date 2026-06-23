import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-x flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-mono text-5xl font-bold text-brand">404</p>
      <h1 className="mt-4 text-2xl font-bold text-steel-900">Page not found</h1>
      <Link href="/en" className="btn-primary mt-8">Back to home</Link>
    </div>
  );
}
