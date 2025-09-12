import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 bg-primary justify-center items-center w-dvw h-dvh">
      <h1 className="text-5xl text-center">Page not found.</h1>
      <h1 className="text-6xl">😕</h1>
      <Link to="/" className="text-2xl text-secondary underline">
        Go Home
      </Link>
    </div>
  );
}
