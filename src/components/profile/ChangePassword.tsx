import { Button } from "../ui/button";

export default function ChangePassword() {
  return (
    <div className="w-full">
      <h3 className="font-bold text-2xl mb-5">Change Password</h3>{" "}
      <form className="flex flex-col gap-4 w-full">
        <div className="grid w-full items-center gap-2 text-sm">
          <label htmlFor="currentPassword" className="font-semibold">
            Current Password
          </label>
          <input
            type="password"
            id="currentPassword"
            className="border rounded p-2 border-gray-300 focus:border-primary outline-none"
            required
          />
        </div>
        <div className="grid w-full items-center gap-2 text-sm">
          <label htmlFor="currentPassword" className="font-semibold">
            New password
          </label>
          <input
            type="password"
            id="currentPassword"
            className="border rounded p-2 border-gray-300 focus:border-primary outline-none"
            required
          />
        </div>
        <div className="grid w-full items-center gap-2 text-sm">
          <label htmlFor="currentPassword" className="font-semibold">
            Confirm password
          </label>
          <input
            type="password"
            id="currentPassword"
            className="border rounded p-2 border-gray-300 focus:border-primary outline-none"
            required
          />
        </div>
        <Button
          aria-label="Save Password"
          className="uppercase h-10 w-28 mt-5 text-white"
        >
          save
        </Button>
      </form>
    </div>
  );
}
