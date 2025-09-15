import { CheckCircle } from "lucide-react";

function Summaries() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-20 mx-auto max-w-5xl ">
      {/* Workout Summary Section */}
      <div>
        <img
          src="/PumpAI.png"
          alt="Workout Demo"
          className="rounded-xl shadow-lg"
        />
      </div>
      <div className="font-[Poppins]">
        <h1 className="text-4xl mb-4 font-semibold">Log workouts</h1>
        <p className="text-lg">
          Whether at the gym or at home, easily track your sessions and stay on
          top of your fitness goals.
        </p>
        <ul className="pt-10 text-lg space-y-3 [&>li]:flex [&>li]:items-start [&>li]:gap-4">
          <li>
            <CheckCircle size={24} />
            Easy, simple workout logging
          </li>
          <li>
            <CheckCircle size={24} />
            Track sets, reps, and personal records
          </li>
          <li>
            <CheckCircle size={24} />
            Save and reuse custom workout routines
          </li>
          <li>
            <CheckCircle size={24} />
            Works for gym and at-home exercises
          </li>
        </ul>
      </div>

      {/* Nutrition Summary Section */}
      <div className="font-[Poppins]">
        <h1 className="text-4xl mb-4 font-semibold">Track nutrition</h1>
        <p className="text-lg">
          Stay on top of your macros, calories, and hydration with simplified
          nutrition logging.
        </p>
        <ul className="pt-10 text-lg space-y-3 [&>li]:flex [&>li]:items-start [&>li]:gap-4">
          <li>
            <CheckCircle size={24} />
            Log meals in seconds
          </li>
          <li>
            <CheckCircle size={24} />
            Create meal plans for bulking and cutting
          </li>
          <li>
            <CheckCircle size={24} />
            Water intake reminders and hydration tracking
          </li>
          <li>
            <CheckCircle size={24} />
            Supplement & vitamin logging
          </li>
          <li>
            <CheckCircle size={24} />
            Custom goals to fit your diet plan
          </li>
        </ul>
      </div>
      <div>
        <img
          src="/PumpAI.png"
          alt="Nutrition Demo"
          className="rounded-xl shadow-lg"
        />
      </div>

      {/* Progress Summary Section */}
      <div>
        <img
          src="/PumpAI.png"
          alt="Progress Demo"
          className="rounded-xl shadow-lg"
        />
      </div>
      <div className="font-[Poppins]">
        <h1 className="text-4xl mb-4 font-semibold">Check progress</h1>
        <p className="text-lg">
          Stay motivated with clear analytics and insights into your fitness
          journey!
        </p>
        <ul className="pt-10 text-lg space-y-3 [&>li]:flex [&>li]:items-start [&>li]:gap-4">
          <li>
            <CheckCircle size={24} />
            Visualize your gains with charts
          </li>
          <li>
            <CheckCircle size={24} />
            Track your weight and milestones
          </li>
          <li>
            <CheckCircle size={24} />
            Weekly and monthly progress summaries
          </li>
          <li>
            <CheckCircle size={24} />
            Streaks and badges to keep you motivated
          </li>
        </ul>
      </div>

      {/* AI Trainer Summary Section */}
      <div className="font-[Poppins]">
        <h1 className="text-4xl mb-4 font-semibold">AI-powered training</h1>
        <p className="text-lg">
          Get personalized recommendations based on your goals from your own AI
          trainer.
        </p>
        <ul className="pt-10 text-lg space-y-3 [&>li]:flex [&>li]:items-start [&>li]:gap-4">
          <li>
            <CheckCircle size={24} />
            Exercise adjustments tailored to your goals
          </li>
          <li>
            <CheckCircle size={24} />
            Smart nutrition recommendations
          </li>
          <li>
            <CheckCircle size={24} />
            Adaptive progress tracking
          </li>
          <li>
            <CheckCircle size={24} />
            Routine optimization
          </li>
        </ul>
      </div>
      <div>
        <img
          src="/PumpAI.png"
          alt="Nutrition Demo"
          className="rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}

export default Summaries;
