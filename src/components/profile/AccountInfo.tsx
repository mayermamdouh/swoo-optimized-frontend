import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function AccountInfo() {
  return (
    <div>
      <h3 className="font-bold  text-2xl">Account Info</h3>
      <form className="flex flex-col items-start gap-4 mt-5 w-full">
        <div className="flex items-center gap-3 w-full">
          <div className="grid w-full items-center gap-1 text-sm">
            <label htmlFor="firstname" className="font-semibold">
              First Name
            </label>
            <Input required id="firstname" className="py-5" />
          </div>

          <div className="grid w-full items-center gap-1 text-sm">
            <label htmlFor="lastname" className="font-semibold">
              Last Name
            </label>
            <Input required id="lastname" className="py-5" />
          </div>
        </div>

        <div className="grid w-full items-center gap-1 text-sm">
          <label htmlFor="email" className="font-semibold">
            Email Address
          </label>
          <Input required type="email" id="email" className="py-5" />
        </div>

        <div className="grid w-full items-center gap-1 text-sm">
          <label htmlFor="phone" className="font-semibold">
            Phone Number <span className="text-gray-400">(optional)</span>
          </label>
          <Input type="tel" id="phone" className="py-5" />
        </div>

        <Button
          aria-label="Save Account Info"
          size="cart"
          className="uppercase h-10 w-28 mt-5 text-white text-xs font-medium"
        >
          save
        </Button>
      </form>
    </div>
  );
}
