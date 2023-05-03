import React from "react";
import { Parallax } from "react-scroll-parallax";
import flower from "./assets/flower.svg";

const styles = {
  centerCSS:
    " absolute top-2/3 right-0 translate-x-1/2 translate-y-1/2 text-center ",
};

const App = () => (
  <>
    <header className="flex w-screen h-screen relative justify-center ">
      <Parallax speed={2}>
        <div className={"bg-cyan-900 h-32 w-80" + `${styles.centerCSS}`} />
      </Parallax>
      <Parallax speed={40}>
        <div
          className={
            "z-1 translate-y-60 translate-x-44" + `${styles.centerCSS}`
          }
        >
          <svg
            width="25"
            height="22"
            viewBox="0 0 160 142"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.52207 17.4762C-21.657 64.0354 38.0154 80.9348 38.0154 80.9348C38.0154 80.9348 31.1565 147.497 79.5117 141.634C127.867 135.771 114.149 85.4182 114.149 85.4182C114.149 85.4182 179.309 74.7269 154.274 24.0291C132.929 -19.1949 82.9411 17.4762 82.9411 17.4762C82.9411 17.4762 34.0098 -21.8453 8.52207 17.4762Z"
              fill="#ffedd5"
            />
          </svg>
        </div>
      </Parallax>
      <Parallax speed={-10}>
        <h1
          className={
            "text-neutral-200 font-bold capitalize w-max text-4xl font-mono underline z-10" +
            `${styles.centerCSS}`
          }
        >
          Burnout in Tech
        </h1>
      </Parallax>
    </header>

    <Parallax speed={-2}>
      <div className="my-4 mx-auto text-neutral-200 font-bold capitalize text-2xl w-fit h-40">
        <h2>What is Burnout?</h2>
      </div>
    </Parallax>

    <Parallax speed={-4}>
      <div className=" mx-auto text-cyan-100 my-4 w-3/4 place-items-center h-screen">
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
    <Parallax speed={4}>
      <div className="my-4 mx-auto text-neutral-200 font-bold capitalize text-2xl w-fit h-40">
        <h2>Areas of worklife balance</h2>
      </div>
    </Parallax>
  </>
);

export default App;
