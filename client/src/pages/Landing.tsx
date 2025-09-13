export default function Landing() {
  return (
    <div className="flex flex-col justify-center items-center">
      <a href="#" className="mb-10">
        <img
          src="/PumpAI.svg"
          className="h-100 w-100 justify-self-center"
          alt="PumpAI Logo"
        />
      </a>
      <div className="text-center block max-w-4xl items-center justify-self-center justify-center">
        <h1 className="text-3xl font-semibold mb-4">PumpAI</h1>
        <p className="">
          PumpAI is an AI-powered fitness tracker designed for weightlifters and
          fitness enthusiasts. Users can log workouts, track sets, reps, and
          personal records, and monitor habits like sleep and water intake.
          Unlike standard trackers, PumpAI analyzes training data to surface
          actionable insights — from PR detection and adherence streaks to
          correlations between lifestyle habits and gym performance. An
          integrated machine learning module predicts workout consistency and
          recommends adjustments, helping athletes train smarter, not just
          harder.
        </p>
      </div>
    </div>
  );
}
