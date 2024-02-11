import React from "react";
import Button from "../components/Button";

const SceneIntro = () => {
  return (
    <main className="w-full flex flex-col items-center p-8">
      <h1 className="text-neutral-200 font-bold capitalize w-max text-2xl sm:text-4xl font-mono underline">
        Introduction
      </h1>
      <div className="flex gap-2">
        <Button text="Back" href="../burnout-in-tech" />
        <Button text="Next" href="scene-1" />
      </div>
    </main>
  );
};

export default SceneIntro;
