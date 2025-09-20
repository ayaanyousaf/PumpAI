import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { cn } from "../lib/utils";

const loginSchema = z.object({
  email: z.string().email("Invalid email address."),
  password: z.string().min(1, "Password cannot be empty."),
});

type formValues = z.infer<typeof loginSchema>;

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<formValues>({
    resolver: zodResolver(loginSchema),
  });

  // Function to handle form submit
  const onSubmit = async (data: formValues) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
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
        <h1 className="font-bold text-3xl mb-10 text-center">Sign in</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-8 h-full max-w-4xl"
        >
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

          <a className="underline text-right" href="/forgot-password">
            Forgot Password?
          </a>

          {/* Submit button */}
          <button
            type="submit"
            className={cn(
              "w-full font-semibold font-[Poppins] brand-button cursor-pointer",
              isSubmitting ? "bg-brand/40 hover:shadow-none" : "bg-brand"
            )}
            disabled={isSubmitting}
          >
            SIGN IN
          </button>

          <p className="text-center">
            Don't have an account?{" "}
            <a className="underline" href="/register">
              Register Here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
