import React from "react";
import { Parallax } from "react-scroll-parallax";

const styles = {
  centerCSS:
    "absolute top-2/3 right-0 translate-x-1/2 translate-y-1/2 text-center ",
};

const App = () => (
  <>
    <header className="flex w-screen h-screen relative justify-center">
      <Parallax speed={2}>
        <div className={"bg-cyan-900 h-32 w-96 " + `${styles.centerCSS}`} />
      </Parallax>
      <Parallax speed={-10}>
        <h1
          className={
            "text-neutral-200 font-bold capitalize w-max text-4xl font-mono underline z-1 " +
            `${styles.centerCSS}`
          }
        >
          Burnout in Tech
        </h1>
      </Parallax>
    </header>

    <Parallax speed={-2}>
      <div className="my-4 mx-auto text-neutral-200 font-bold capitalize text-2xl w-fit">
        <h2>What is Burnout?</h2>
      </div>
    </Parallax>
    <Parallax speed={-4}>
      <div className=" mx-auto text-cyan-100 my-4 w-3/4  place-items-center">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis
          nulla placerat odio commodo sollicitudin. Aenean laoreet neque
          pulvinar turpis euismod porttitor. Praesent mattis risus at mauris
          luctus elementum. Morbi nec vehicula elit. Nulla eget egestas turpis.
          Proin euismod arcu sit amet felis finibus tincidunt. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Nullam accumsan aliquam nisi. Vestibulum ac elit ac justo
          malesuada malesuada sit amet ut arcu. Suspendisse sit amet ligula mi.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis
          nulla placerat odio commodo sollicitudin. Aenean laoreet neque
          pulvinar turpis euismod porttitor. Praesent mattis risus at mauris
          luctus elementum. Morbi nec vehicula elit. Nulla eget egestas turpis.
          Proin euismod arcu sit amet felis finibus tincidunt. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Nullam accumsan aliquam nisi. Vestibulum ac elit ac justo
          malesuada malesuada sit amet ut arcu. Suspendisse sit amet ligula mi.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis
          nulla placerat odio commodo sollicitudin. Aenean laoreet neque
          pulvinar turpis euismod porttitor. Praesent mattis risus at mauris
          luctus elementum. Morbi nec vehicula elit. Nulla eget egestas turpis.
          Proin euismod arcu sit amet felis finibus tincidunt. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Nullam accumsan aliquam nisi. Vestibulum ac elit ac justo
          malesuada malesuada sit amet ut arcu. Suspendisse sit amet ligula mi.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis
          nulla placerat odio commodo sollicitudin. Aenean laoreet neque
          pulvinar turpis euismod porttitor. Praesent mattis risus at mauris
          luctus elementum. Morbi nec vehicula elit. Nulla eget egestas turpis.
          Proin euismod arcu sit amet felis finibus tincidunt. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Nullam accumsan aliquam nisi. Vestibulum ac elit ac justo
          malesuada malesuada sit amet ut arcu. Suspendisse sit amet ligula mi.
        </p>
      </div>
    </Parallax>
  </>
);

export default App;
