import Link from "next/link";
export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center  h-screen">
      <div className="px-6 text-center">
        <h1 className="mb-6 bg-gradient-to-r from-primary to-light-primary bg-clip-text text-[9rem] font-extrabold tracking-tight text-transparent">
          404
        </h1>
        <p className="mb-4 text-2xl font-semibold ">Page Not Found</p>
        <p className="mb-8 text-lg ">
          We couldn&apos;t find the page you were looking for. It might have
          been moved or deleted.
        </p>
        <Link
          href="/"
          className="inline-block text-white transform rounded-lg bg-primary px-8 py-3 text-lg font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:bg-black">
          Go Back Home
        </Link>
      </div>

      <div className="absolute bottom-4 text-sm ">
        <p>© {new Date().getFullYear()} Imdova. All rights reserved.</p>
      </div>
    </div>
  );
}
