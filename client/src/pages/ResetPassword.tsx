import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { cn } from "../lib/utils";

const resetSchema = z
  .object({
    password: z.string().min(6, "Password must be at least 6 characters."),
    confirmPassword: z.string().min(6, "Field cannot be empty."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof resetSchema>;

function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(resetSchema),
  });

  // Function to handle form submit
  const onSubmit = async (data: FormValues) => {
    try {
      const token = new URLSearchParams(window.location.search).get("token"); // fetch token from reset URL

      const res = await fetch("http://localhost:5000/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, newPassword: data.password }),
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
        <h1 className="font-bold text-3xl mb-10 text-center">Reset password</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-8 h-full max-w-4xl"
        >
          <input
            {...register("password")}
            className="rounded-xl border border-text-primary p-2 w-70"
            placeholder="New password"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          <input
            {...register("confirmPassword")}
            className="rounded-xl border border-text-primary p-2 w-70"
            placeholder="Confirm new password"
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
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
            RESET
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
