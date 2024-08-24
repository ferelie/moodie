import React from "react";
import { Fugaz_One } from "next/font/google";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: "400" });

export default function Dashboard() {
  const statuses = {
    id: 1,
    numDays: 14,
    timeRemaining: "13:14:15",
    date: new Date().toDateString(),
  };

  const moods = {
    Good: "😊",
    Sad: "😢",
    Existing: "😐",
    Elated: "😁",
    Angry: "😡",
    Surprised: "😮",
  };

  return (
    <div className="flex flex-col flex-1 gap-8 sm:gap-12 md:gap-16 mx-4">
      <div className="grid grid-cols-1 sm:grid-cols-4 bg-indigo-50 text-indigo-500 rounded-lg p-4 gap-4">
        {Object.keys(statuses).map((key) => (
          <div key={key} className="flex flex-col gap-1 sm:gap-2 items-center">
            <p className="font-medium uppercase text-xs sm:text-sm truncate">
              {key.replaceAll("_", " ")}
            </p>
            <p className={`text-base sm:text-lg truncate` + fugaz.className}>
              {statuses[key]}
            </p>
          </div>
        ))}
      </div>
      <h4
        className={`text-4xl sm:text-5xl md:text-6xl text-center ${fugaz.className}`}
      >
        {" "}
        Tell Us your <span className="textGradient">Mood</span> today{" "}
      </h4>
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-4">
        {Object.keys(moods).map((mood, moodIndex) => (
          <button
            key={moodIndex}
            className="p-4 rounded-lg purpleShadow bg-indigo-50 hover:bg-indigo-200 duration-200"
          >
            <p className={`text-indigo-500 ${fugaz.className}`}>{mood}</p>
            <p className={`text-4xl sm:text-5xl md:text-6xl`}>{moods[mood]}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
