import React, { useState, useEffect, useRef } from "react";
import LineChart from "../components/LineChart";
import { UserData } from "../Data";
import "./Intro.css";

function Intro() {
  const userData = {
    labels: UserData.map((data) => data.date),
    datasets: [
      {
        labels: UserData.map((data) => data.kcal),
        data: UserData.map((data) => data.weight),
        borderColor: "red",
        pointHoverRadius: 7,
        pointHoverBackgroundColor: "black",
        segment: {
          borderColor: (ctx) =>
            ctx.p0.parsed.y < ctx.p1.parsed.y ? "red" : "green",
        },
      },
    ],
  };

  return (
    <main className="main-intro">
      <div className="ebigo">
        {/* <div className="image-container">
          <img src={cannabisImage} alt="Cannabis Plant" />
        </div> */}
        <div className="text-container">
          <h1 className="zaglavie">Personal Purpose</h1>
          <p className="opisanie">
            For my Embrace Tec minor semester, I chose to follow a healthier
            lifestyle with the goal in mind to get in better shape and track my
            overall progress every day as my Personal Purpose project.
          </p>
          <p className="opisanie">
            My regime was simple, eating less than 2500 kcalories a day
            (maintenance = 3300 kcal), and hitting the gym as much as possible
            (weight training 4x per week and cardio for the rest).
          </p>
          <p className="opisanie">
            Here are the key insights I've gained: First, I did not manage to
            follow my diet all the time, as you can see in the graph below there
            is a clear pattern to losing weight, everyone experiences weight
            loss that way. Truth is every day after the red lines feels
            teriible. Your body make you feel incredibly hungry, you feel
            sluggish, lethargic, you can feel how slow your minds working. That
            is normal, and that is not because you're weak or unmotivated, but
            because that is how human biology works. Your body feels the loss,
            so it compensates, by making you crave more food to maintain itself.
            It even plays a "trick" on you by lowering your metabolism and even
            storing more fat in your body reserves. And I think, you should
            listen to your body, I did, after every single red line, you just
            have to not over do it.
          </p>
          <p className="opisanie">
            My second key insight is that you shouldn't lose hope. These changes
            in your lifestyle that you're making are not in vain. Even after
            weighing more after 5 days of dieting and working out, it feels like
            it was for nothing, but its not. You have to understand that getting
            on a scale and measuring does not show your progress. You're trying
            to lose body fat, but your body may replace it with water. You
            should look at weight as a candle chart. Whatever you weight, you
            may be 2 kgs above or below that, it is never empty progress, so
            don't give up thinking it's impossible.
          </p>
          <p className="opisanie">
            My last takeaway is that time goes by fast. I lost ~5kgs in a month,
            that means I or anyone can lose 30kgs in just 6 months. What are 6
            months? What I realized is hardships pass, you remain. Your body is
            made to adapt to anything.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Intro;
