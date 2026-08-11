import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-navy text-white p-6 text-center">
      <h1 className="font-display text-6xl font-bold text-teal-bright">404</h1>
      <h2 className="mt-4 font-display text-2xl font-semibold">Page Not Found</h2>
      <p className="mt-2 text-white/70 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="btn-teal mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full"
      >
        Return to Home
      </Link>
    </div>
  );
}
