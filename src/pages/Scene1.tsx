import Button from "../components/Button";

const Scene1 = () => {
  return (
    <main className="w-full flex flex-col items-center p-8">
      <h1 className="text-neutral-200 font-bold capitalize w-max text-2xl sm:text-4xl font-mono underline">
        Scene 1
      </h1>
      <div className="flex gap-2">
        <Button text="Back" href="intro" />
        <Button text="Next" href="scene-2" />
      </div>
    </main>
  );
};

export default Scene1;
