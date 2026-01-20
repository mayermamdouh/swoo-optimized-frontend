import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="bg-white w-full  p-5 rounded-lg">
      <div className="flex flex-col lg:flex-row gap-10 justify-center min-h-[50%]">
        <div className="relative lg:w-1/2 w-full h-72 lg:h-100 flex items-center justify-center">
          <Image
            alt="login image"
            src="/images/icons/login.png"
            fill
            className="object-contain p-10"
          />
        </div>

        <div className="flex-1 flex flex-col gap-2 justify-start">
          <h1 className="text-3xl font-bold text-primary">Welcome Back!</h1>
          <span className="text-gray-400 font-medium uppercase">
            login to continue
          </span>
          <form className="flex flex-col gap-4 mt-5 items-start">
            <div className="grid w-full max-w-md items-center gap-1 text-sm ">
              <label htmlFor="email" className="font-medium">
                Email Address{" "}
              </label>
              <Input
                type="email"
                id="email"
                placeholder="Example@gmail.com"
                className="py-5"
              />
            </div>
            <div className="grid w-full max-w-md items-center gap-1 text-sm ">
              <label htmlFor="password" className="font-medium">
                Password
              </label>
              <Input
                type="password"
                id="password"
                placeholder="...."
                className="py-5"
              />
              <span className="text-gray-400 underline font-semibold">
                forget password ?
              </span>
            </div>
            <Button
              aria-label="Login"
              className="uppercase h-12 w-36 mt-5 text-white"
            >
              Login
            </Button>
            <Link href="/register" className="uppercase text-sm">
              <span className="font-medium text-gray-400">new user ? </span>
              <span className="text-primary font-semibold">Sign Up</span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
