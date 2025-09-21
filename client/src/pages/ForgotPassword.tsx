import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { cn } from "../lib/utils";

const forgotSchema = z.object({
  email: z.string().email("Invalid email address."),
});

type formValues = z.infer<typeof forgotSchema>;
function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<formValues>({
    resolver: zodResolver(forgotSchema),
  });

  // Function to handle form submit
  const onSubmit = async (data: formValues) => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/auth/forgot-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

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
            {...register("email")}
            className="rounded-xl border border-text-primary p-2 w-70"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <p className="mb-2 text-center text-sm w-3xs">
            If an account exists with this email, you will receive a code in
            your inbox.
          </p>

          {/* Submit button */}
          <button
            type="submit"
            className={cn(
              "w-full font-semibold font-[Poppins] brand-button cursor-pointer",
              isSubmitting ? "bg-brand/40 hover:shadow-none" : "bg-brand"
            )}
            disabled={isSubmitting}
          >
            Send code
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
