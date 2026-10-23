export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-lg text-gray-400">Page not found</p>
      <a
        href="/"
        className="mt-8 rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-200"
      >
        Go Home
      </a>
    </main>
  );
}
