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
    {/* 
    <Parallax speed={-2}>
      <div className="my-4 mx-auto text-neutral-200 font-bold capitalize text-2xl w-fit h-40">
        <h2>What is Burnout?</h2>
      </div>
    </Parallax> */}

    <Parallax speed={-4}>
      <div className=" mx-auto text-cyan-100 my-4 w-3/4 place-items-center">
        <p>
          In the 1960s and 1970s, a movement originated in the US to provide
          free medical treatment to individuals with no health insurance, the
          Free Clinic Movement.
        </p>
        <br />
        <p>
          These clinics were run by volunteers, a mix of nurses, doctors, and
          students, who worked after their regular workday ended. Due to the
          prevalence of drug-related issues during that time, the clinics often
          treated drug related illnesses, and at the time, the term "burnout"
          was used to describe the physical effects of chronic drug use.
        </p>
        <br />
        <p>
          A psychologist named Herbert Freudenberg, who worked in these clinics,
          observed that the workers were becoming depressed, apathetic, and
          agitated, leading to the popularization of the term "burnout syndrome"
          within the community of workers involved in the movement. Freudenberg
          later wrote several academic papers on this phenomenon.
        </p>
      </div>
    </Parallax>
    <Parallax speed={10}>
      <div className="flex my-8 justify-center items-center h-96">
        <svg
          width="140"
          height="140"
          viewBox="0 0 299 302"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M135 86.4999L127.5 87.9998L146 97L155 98M135 86.4999L149 83.9998L155 84.9998M135 86.4999C135 86.4999 156.094 67.2089 173 59.5C188.932 52.2351 200.373 50.3538 217.5 54C235.254 57.7797 245.872 59.6898 261.5 71.5C278.742 84.53 297.5 111.664 297.5 111.664L270 152C270 152 227.13 127.425 197 119C177.523 113.554 146 110 146 110C146 110 143.715 107.499 143.5 105.5C142.975 100.614 155 98 155 98M155 98L228 111.664L275.5 119L278 105.5L199.5 92.9999M155 84.9998C155 84.9998 167.882 80.4186 176.5 79.4999C185.44 78.5468 194 77.4999 199.5 80.4999C205.923 84.0033 199.11 94.3081 199.5 92.9999M155 84.9998L199.5 92.9999"
            stroke="#ECFEFF"
          />
          <path
            d="M180.5 57.1946L151.5 1.5C151.5 1.5 69.8989 33.2172 18 54.5C11.3572 57.2241 1 61.5 1 61.5L114 300.5L271 231L217.108 127.5M64 115.5C73.7984 109.397 82.5 102 99.5 98.0599C116.5 94.1198 126.553 88.0672 127.5 89M47.5 84C47.5 84 59 82.6622 69.5 75.0811C80 67.5 103.24 65.3891 113.62 57.1946C124 49 140 46.5 140 46.5"
            stroke="#ECFEFF"
          />
        </svg>

        <svg
          width="176"
          height="228"
          viewBox="0 0 176 228"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M67.5 150.5C67.5 150.5 64.9678 162.488 69.5 162C71.5999 161.774 71.3177 159.94 73.3293 159.296C77.391 157.997 77.5651 163.728 83.8293 162.296C89.5 161 87.5315 157.05 91.5 156.5C94.5581 156.076 96.6072 158.579 99.5 157.5C102.45 156.4 103.408 153.647 103.5 150.5C103.597 147.182 99.5 143 99.5 143"
            stroke="#ECFEFF"
          />
          <path
            d="M65.5 154.5C65.5 154.5 57.5 170 55 175.5C51.981 182.142 67.5 196.5 67.5 196.5"
            stroke="#ECFEFF"
          />
          <path
            d="M104.5 144C104.5 144 121.474 151.376 126.5 161C130.952 169.525 129 185.5 129 185.5"
            stroke="#ECFEFF"
          />
          <path
            d="M65 183.5C65 183.5 83.2336 184.029 94.5 181.5C105.539 179.022 121.5 171 121.5 171"
            stroke="#ECFEFF"
          />
          <path
            d="M61 112.5C62.5015 112.939 23.3955 113.075 20.5 127.5C18.3572 138.175 23.2544 156.312 35 160.5C51.6372 166.433 61.5675 157.72 65.5 149.5C69.5658 141.001 70.3451 131.157 69 122.5M61 112.5C61 112.5 65.29 117.228 69 122.5M61 112.5L86.5 105.5M69 122.5C73.6863 120.352 75.5 119 81 119M86.5 105.5C89.7473 103.831 115 97 122.5 99C130 101 133 105.5 133 105.5M86.5 105.5C82.5909 107.493 80.083 115.5 81 119M133 105.5C132.648 105.944 141.279 124.465 136.5 133.5C130.492 144.858 114.649 146.846 105 143C93.4568 138.399 84.1494 131.021 81 119M133 105.5L150.5 93"
            stroke="#ECFEFF"
          />
          <path
            d="M130 18L114 38.5M130 18C133.88 22.7948 108.964 -3.02878 82.4999 0.999989C43.3827 6.95495 16.2139 33.3142 6.49989 49.5C-2.34044 64.23 1.29242 81.0594 2.9999 97.5C4.55514 112.475 19.4999 134.5 19.4999 134.5C24.4999 117 16.1219 97.3381 24.4999 68.5C54.3159 48.1076 75.3365 43.9457 114 38.5M130 18C130 18 162 36.5 167 54.5C172 72.5 173.503 73.9977 171.5 86C169.949 95.2968 164.5 123 156 104.5M114 38.5C133.619 78.3564 147.5 86 156 104.5M156 104.5C156 104.5 162 111.909 162 117.5C162 122.5 161.646 140.728 165.5 154C167.033 159.281 165.5 164.5 165.5 164.5C159.262 194.158 153 206.5 142.5 217M35.5 161C35.5 161 37.8778 174.571 41.5 182.5C49.3036 199.582 59.3062 206.686 75 217C80.7691 220.792 83.8039 223.82 90.5 225.5C103.225 228.692 112.682 225.102 123 217C133.443 208.8 139 187 139 187"
            stroke="#ECFEFF"
          />
          <path
            d="M171 82.5C179 86 173.698 99.3276 172.5 110C171.769 116.508 169.5 126.5 169.5 126.5C169.181 133.992 167.924 138.039 164 145"
            stroke="#ECFEFF"
          />
        </svg>
      </div>
    </Parallax>
    <Parallax speed={5}>
      <div className="mx-auto text-cyan-100 my-4 w-3/4 place-items-center">
        <p>
          Hi there! You might have come across this page because you personally
          experienced burnout, are uncertain if how you’re feeling constitutes
          burnout or want to help someone that is suffering from burnout. You
          might even want to learn how to best prevent it.
        </p>
        <br />
        <p>
          I’ll do my best to share what I have discovered in my research, and
          hopefully you’ll understand burnout a little bit better :)
        </p>
      </div>
    </Parallax>
    <Parallax speed={-2}>
      <div className="my-4 mx-auto text-neutral-200 font-bold capitalize text-2xl w-fit h-40">
        <h2>What is Burnout?</h2>
      </div>
    </Parallax>
    <Parallax speed={-4}>
      <div className=" mx-auto text-cyan-100 my-4 w-3/4 place-items-center">
        <p>
          Only recently has the World Health Organisation, WHO, added burnout to
          it’s characterisation system for illnesses, the ICD-11, in 2019. There
          burnout is defined as a syndrome resulting from "chronic workplace
          stress that has not been successfully managed".
        </p>
        <br />
        <p>
          One cannot talk about burnout without mentioning Christina Maslach, a
          pioneer researcher who has devoted her life to researching
          occupational burnout since the 70’s. The basis of her work laid the
          foundation for the WHO’s recognition of burnout as a workplace
          syndrome. Maslach defines burnout as “a psychological syndrome that
          involves a prolonged response to chronic interpersonal stressors on
          the job”, her work led to the identification of three burnout
          dimensions: Exhaustion, Cynicism or Depersonalisation and Inefficacy.
        </p>
      </div>
    </Parallax>
    <Parallax speed={10}>
      <div className="flex my-8 justify-center items-center h-96"></div>
    </Parallax>
  </>
);

export default App;
