import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const registerSchema = z.object({
  name: z
    .string()
    .min(1, "Name must be at least 1 character.")
    .max(50, "Name must be less than 50 characters."),
  email: z.string().email("Invalid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

type formValues = z.infer<typeof registerSchema>;

function Register() {
  return (
    <div className="flex flex-col bg-bg-primary justify-center items-center min-h-dvh container mx-auto">
      <div className="bg-bg-secondary shadow-sm text-text-primary p-10 rounded-4xl">
        <h1 className="font-bold text-3xl mb-10 text-center">
          Create an Account
        </h1>
        <form className="flex flex-col gap-8 h-full max-w-4xl">
          <input
            className="rounded-xl border border-text-primary p-2 w-70"
            placeholder="Username"
          />
          <input
            className="rounded-xl border border-text-primary p-2 w-70"
            placeholder="Email"
          />
          <input
            className="rounded-xl border border-text-primary p-2 w-70"
            type="password"
            placeholder="Password"
          />

          {/* Submit button */}
          <button
            type="submit"
            className="w-full font-semibold brand-button cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
