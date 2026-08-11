"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col items-center justify-center bg-navy text-white p-6 text-center font-sans">
        <h2 className="font-display text-3xl font-bold text-teal-bright">
          Something went wrong!
        </h2>
        <p className="mt-2 text-white/70 max-w-md text-sm">
          {error.message || "An unexpected error occurred."}
        </p>
        <button
          onClick={() => reset()}
          className="btn-teal mt-6 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full cursor-pointer"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
