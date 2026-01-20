import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col rounded-lg items-center justify-center bg-gray-50">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/">
        <Button className="text-white" size="cart">
          {" "}
          Go Back to Home
        </Button>
      </Link>
    </main>
  );
}
