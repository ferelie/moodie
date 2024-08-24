import React from "react";
import Button from "./Button";
import { Fugaz_One } from "next/font/google";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: "400" });
export default function Login() {
  return (
    <div className="flex flex-col flex-1 justify-center items-center gap-4">
      <h3 className={`text-4xl sm:text-5xl md:text-6xl ` + fugaz.className}>
        Login
      </h3>
      <p>{"You're one step away!"}</p>
      <div className="flex flex-col gap-4 w-full max-w-[300px] sm:max-w-[400px]">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="hover:border-indigo-700 focus:border-indigo-700 outline-none border rounded-full border-solid border-indigo-400 px-4 py-2 sm:py-3"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="hover:border-indigo-700 focus:border-indigo-700 outline-none border rounded-full border-solid border-indigo-400 px-4 py-2 sm:py-3"
        />
        <Button text="Login" />
        <p className="text-center">
          {"Don't have an account?"}{" "}
          <span className="textGradient">{"Sign Up"}</span>
        </p>
      </div>
    </div>
  );
}
