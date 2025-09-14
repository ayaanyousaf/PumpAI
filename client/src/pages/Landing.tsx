import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Landing() {
  return (
    <div className="container pb-4 min-h-dvh radial-bg">
      {/* Render the Navbar seperately for the landing page */}
      <Navbar />

      <div className="flex min-h-dvh justify-center items-center">
        <div className="flex flex-col pt-20 max-w-4xl text-center font-[Poppins] max-w-4xl items-center justify-center">
          <h1 className="text-[4.5rem] text-glow-white font-semibold mb-6">
            Train{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-brand">
              smart,
            </span>{" "}
            lift{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
              more.
            </span>
          </h1>
          <p className="w-2xl text-text-primary/80 shadow-sm">
            Log workouts, track nutrition, and unlock personalized insights with
            PumpAI — your AI-powered trainer built to help you train smarter.
          </p>

          {/* Landing page buttons */}
          <div className="flex gap-8 pt-10 w-full justify-center items-center">
            <a href="#" className="transparent-button">
              Get started
            </a>
            <a href="#" className="transparent-button">
              Learn more
            </a>
          </div>
        </div>
      </div>

      {/* Render the footer seperately for the landing page */}
      <Footer />
    </div>
  );
}
