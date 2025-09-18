import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { cn } from "../lib/utils";

const registerSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 4 characters.")
    .max(20, "Username must be less than 20 characters."),
  email: z.string().email("Invalid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

type formValues = z.infer<typeof registerSchema>;

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<formValues>({
    resolver: zodResolver(registerSchema),
  });

  // Function to handle form submit
  const onSubmit = async (data: formValues) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col bg-bg-primary justify-center items-center min-h-dvh container mx-auto">
      <div className="bg-bg-secondary shadow-sm text-text-primary p-10 rounded-4xl">
        <h1 className="font-bold text-3xl mb-10 text-center">
          Create an Account
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-8 h-full max-w-4xl"
        >
          <input
            {...register("username")}
            className="rounded-xl border border-text-primary p-2 w-70"
            placeholder="Username"
          />
          {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )}

          <input
            {...register("email")}
            className="rounded-xl border border-text-primary p-2 w-70"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          <input
            {...register("password")}
            className="rounded-xl border border-text-primary p-2 w-70"
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          {/* Submit button */}
          <button
            type="submit"
            className={cn(
              "w-full font-semibold font-[Poppins] brand-button cursor-pointer",
              isSubmitting ? "bg-brand/40 hover:shadow-none" : "bg-brand"
            )}
            disabled={isSubmitting}
          >
            REGISTER
          </button>
          <p className="text-center">
            Already have an account?{" "}
            <a className="underline" href="/login">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
