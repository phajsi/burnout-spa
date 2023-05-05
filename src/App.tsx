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
      </div>
    </Parallax>
    <Parallax speed={10}>
      <div className="flex mt-8 justify-center items-center h-96">
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
    <Parallax speed={-4}>
      <div className="mx-auto text-cyan-100 my-4 w-3/4 place-items-center">
        <p>
          A psychologist named Herbert Freudenberg, who worked in these clinics,
          observed that the workers were becoming depressed, apathetic, and
          agitated, leading to the popularization of the term{" "}
          <cite>burnout syndrome</cite> within the community of workers involved
          in the movement. Freudenberg later wrote several academic papers on
          this phenomenon.
        </p>
        <p>
          Hi there! You might have come across this page because you personally
          experienced burnout, are uncertain if how you’re feeling constitutes
          burnout or want to help someone that is suffering from burnout. You
          might even want to learn how to best prevent it.
        </p>
        <br />
        <p>
          I’ll do my best to share what I have discovered in my research, and
          hopefully you’ll understand burnout a little bit better 😊
        </p>
      </div>
    </Parallax>
    <Parallax speed={-2}>
      <div className="my-20 mx-auto text-neutral-200 font-bold capitalize text-2xl w-fit">
        <h2>🤔 What is Burnout? </h2>
      </div>
    </Parallax>
    <Parallax speed={-4}>
      <div className=" mx-auto text-cyan-100 my-4 w-3/4 place-items-center">
        <p>
          Only recently has the World Health Organisation, WHO, added burnout to
          it’s characterisation system for illnesses, the ICD-11, in 2019. There
          burnout is defined as:
          <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-cyan-800">
            <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-neutral-200">
              a syndrome resulting from chronic workplace stress that has not
              been successfully managed
            </p>
          </blockquote>
        </p>
        <br />
        <p className="">
          One cannot talk about burnout without mentioning Christina Maslach, a
          pioneer researcher who has devoted her life to researching
          occupational burnout since the 70’s. The basis of her work laid the
          foundation for the WHO’s recognition of burnout as a workplace
          syndrome. Maslach defines burnout as:
          <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-cyan-800">
            <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-neutral-200">
              a psychological syndrome that involves a prolonged response to
              chronic interpersonal stressors on the job
            </p>
          </blockquote>{" "}
          Her work led to the identification of three burnout dimensions:{" "}
          <span className="bg-teal-800 p-2 rounded-md leading-10">
            Exhaustion
          </span>
          ,{" "}
          <span className="bg-red-800 p-2 rounded-md leading-10">Cynicism</span>{" "}
          and{" "}
          <span className="bg-amber-800 p-2 rounded-md leading-10">
            Inefficacy
          </span>
          .
        </p>
        <p>
          An important aspect can be taken from these definitions: that burnout
          only occurs in the context of employment within an organisation. This
          is important because it highlight the role of employers and workplaces
          are necessary factors for burnout. Burnout is a consequence of a
          malfunctioning system.
        </p>
        <br />
        <p>
          Going through stressful periods at work, like working extra to meet a
          deadline, is unavoidable at times. However, burnout arises when this
          stress becomes a constant. It follows that to avoid burnout and help
          burnt out people, not only the individuals must be helped, but the
          workplace as well.
        </p>
      </div>
    </Parallax>
    <Parallax speed={-2}>
      <div className="my-12 mx-auto text-neutral-200 font-bold capitalize text-2xl w-fit">
        <h3>Burnout Dimensions </h3>
      </div>
    </Parallax>
    <Parallax speed={-2}>
      <div className="flex justify-evenly items-center h-60">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="49.5" fill="#134E4A" stroke="#ECFEFF" />
          <path
            d="M79.8358 38.7072C57.0631 36.4098 42.6793 36.4433 19.1561 38.7341C17.1059 38.9338 15.3625 40.3781 14.9195 42.3897C13.6469 48.1681 13.7393 52.4393 14.9248 58.1727C15.3669 60.3109 17.2399 61.8402 19.4198 61.9647C42.5743 63.2862 56.9416 63.3967 79.7469 61.9823C81.9038 61.8485 83.7579 60.3369 84.1828 58.218C85.327 52.5124 85.2359 48.2583 84.121 42.5413C83.7146 40.4571 81.9486 38.9203 79.8358 38.7072Z"
            stroke="#ECFEFF"
          />
          <path
            d="M18.7636 57.1701C17.8044 51.4624 17.6959 48.0391 18.742 42.7939C18.8343 42.3312 19.2432 42 19.715 42H22.6403C23.1522 42 23.5821 42.3879 23.6319 42.8974C24.1332 48.0283 24.1152 51.4291 23.6224 57.0892C23.5776 57.6041 23.1453 58 22.6285 58H19.7462C19.2604 58 18.8441 57.6491 18.7636 57.1701Z"
            fill="#ECFEFF"
            stroke="#ECFEFF"
          />
          <path
            d="M76.7636 57.1701C75.8044 51.4624 75.6959 48.0391 76.742 42.7939C76.8343 42.3312 77.2432 42 77.715 42H80.6403C81.1522 42 81.5821 42.3879 81.6319 42.8974C82.1332 48.0283 82.1152 51.4291 81.6224 57.0892C81.5776 57.6041 81.1453 58 80.6285 58H77.7462C77.2604 58 76.8441 57.6491 76.7636 57.1701Z"
            stroke="#ECFEFF"
            stroke-width="0.5"
          />
          <path
            d="M47.7871 59.1372C46.7984 51.8396 46.6855 47.5337 47.7675 40.8336C47.8451 40.3525 48.2624 40 48.7497 40H51.6213C52.1412 40 52.5748 40.4001 52.6159 40.9183C53.1386 47.5097 53.1201 51.7948 52.6077 59.0713C52.5709 59.5939 52.1355 60 51.6116 60H48.7757C48.2771 60 47.8541 59.6313 47.7871 59.1372Z"
            stroke="#ECFEFF"
            stroke-width="0.5"
          />
          <path
            d="M57.782 58.644C56.7997 51.7454 56.6878 47.6602 57.7618 41.3252C57.8427 40.848 58.2582 40.5 58.7422 40.5H61.6254C62.1435 40.5 62.5764 40.8976 62.6193 41.414C63.1374 47.6393 63.119 51.7035 62.6109 58.575C62.5723 59.0959 62.1376 59.5 61.6152 59.5H58.7694C58.2735 59.5 57.8519 59.135 57.782 58.644Z"
            stroke="#ECFEFF"
            stroke-width="0.5"
          />
          <path
            d="M37.782 58.644C36.7997 51.7454 36.6878 47.6602 37.7618 41.3252C37.8427 40.848 38.2582 40.5 38.7422 40.5H41.6254C42.1435 40.5 42.5764 40.8976 42.6193 41.414C43.1374 47.6393 43.119 51.7035 42.6109 58.575C42.5723 59.0959 42.1376 59.5 41.6152 59.5H38.7694C38.2735 59.5 37.8519 59.135 37.782 58.644Z"
            stroke="#ECFEFF"
            stroke-width="0.5"
          />
          <path
            d="M27.7763 58.1517C26.8012 51.6511 26.6903 47.7866 27.7557 41.8159C27.8401 41.3431 28.2537 41 28.7341 41H31.6298C32.1461 41 32.5781 41.3948 32.6231 41.9091C33.1361 47.769 33.1179 51.6121 32.6143 58.0791C32.5739 58.5983 32.1399 59 31.6191 59H28.7624C28.2696 59 27.8495 58.6391 27.7763 58.1517Z"
            stroke="#ECFEFF"
            stroke-width="0.5"
          />
          <path
            d="M67.7763 58.1517C66.8012 51.6511 66.6903 47.7866 67.7557 41.8159C67.8401 41.3431 68.2537 41 68.7341 41H71.6298C72.1461 41 72.5781 41.3948 72.6231 41.9091C73.1361 47.769 73.1179 51.6121 72.6143 58.0791C72.5739 58.5983 72.1399 59 71.6191 59H68.7624C68.2696 59 67.8495 58.6391 67.7763 58.1517Z"
            stroke="#ECFEFF"
            stroke-width="0.5"
          />
          <path
            d="M12 48C12 49.5192 12 50.476 12 52"
            stroke="#ECFEFF"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M87 48C87 49.5192 87 50.476 87 52"
            stroke="#ECFEFF"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>

        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="49.5" fill="#7F1D1D" stroke="#ECFEFF" />
          <path
            d="M35.0226 28.8459C28.8785 29.1926 22.2943 33.9734 18.6576 35.2552C15.021 36.5371 11.8146 44.7427 15.9301 48.074C19.4559 50.928 20.4986 55.263 23.2035 56.6199C28.5328 59.2934 34.1761 55.7763 40.9322 58.3291C47.9746 60.9901 52.4346 54.8742 60.0247 54.9107C65.2216 54.9358 68.0547 57.2552 73.2076 56.6199C78.8015 55.9303 88.3294 53.1904 86.845 48.074C85.4813 43.3736 88.2088 38.6736 85.4813 35.2552C80.4883 28.9976 75.869 30.7414 68.6617 28.8459C62.5524 27.2391 60.4792 25 54.5696 25C45.1441 25.0001 41.1667 28.4991 35.0226 28.8459Z"
            stroke="#ECFEFF"
            stroke-linecap="round"
          />
          <path
            d="M64.1276 69.0612L71.5939 62.8387C72.4128 62.1562 73.5888 63.0579 73.142 64.0259L70.7159 69.2831C70.5427 69.6583 70.6182 70.1013 70.9058 70.398L72.4351 71.9761C72.8349 72.3886 72.8058 73.0523 72.3714 73.4282L64.6419 80.1174C63.7598 80.8808 62.5071 79.7728 63.1571 78.8041L66.6778 73.5567C66.983 73.1018 66.8655 72.4861 66.4142 72.1756L64.2011 70.6532C63.6553 70.2779 63.6188 69.4852 64.1276 69.0612Z"
            stroke="#ECFEFF"
            stroke-linecap="round"
          />
          <path d="M39.2155 66V67.5" stroke="#ECFEFF" stroke-linecap="round" />
          <path d="M45.2285 67V68.5" stroke="#ECFEFF" stroke-linecap="round" />
          <path d="M53.6465 66V67.5" stroke="#ECFEFF" stroke-linecap="round" />
          <path d="M59 64V65.5" stroke="#ECFEFF" stroke-linecap="round" />
          <path d="M35.6078 71V72.5" stroke="#ECFEFF" stroke-linecap="round" />
          <path d="M41.6207 73V74.5" stroke="#ECFEFF" stroke-linecap="round" />
          <path d="M48.8362 72V73.5" stroke="#ECFEFF" stroke-linecap="round" />
          <path d="M56.0517 72V73.5" stroke="#ECFEFF" stroke-linecap="round" />
          <path d="M32 66V67.5" stroke="#ECFEFF" stroke-linecap="round" />
          <path d="M52.444 78V79.5" stroke="#ECFEFF" stroke-linecap="round" />
          <path d="M46.431 77V78.5" stroke="#ECFEFF" stroke-linecap="round" />
          <path
            d="M22.5 39L20 45.5"
            stroke="#ECFEFF"
            stroke-width="0.5"
            stroke-linecap="round"
          />
          <path
            d="M31 34L24 52"
            stroke="#ECFEFF"
            stroke-width="0.5"
            stroke-linecap="round"
          />
          <path
            d="M39 32L30.5 53.5"
            stroke="#ECFEFF"
            stroke-width="0.5"
            stroke-linecap="round"
          />
          <path
            d="M48 30L38.5 53.5"
            stroke="#ECFEFF"
            stroke-width="0.5"
            stroke-linecap="round"
          />
          <path
            d="M56 30L45.5 54.5"
            stroke="#ECFEFF"
            stroke-width="0.5"
            stroke-linecap="round"
          />
          <path
            d="M63 31L54.5 52"
            stroke="#ECFEFF"
            stroke-width="0.5"
            stroke-linecap="round"
          />
          <path
            d="M69.5 33L62.5 50.5"
            stroke="#ECFEFF"
            stroke-width="0.5"
            stroke-linecap="round"
          />
          <path
            d="M76 34L69.5 51.5"
            stroke="#ECFEFF"
            stroke-width="0.5"
            stroke-linecap="round"
          />
          <path
            d="M81 37L76 51.5"
            stroke="#ECFEFF"
            stroke-width="0.5"
            stroke-linecap="round"
          />
          <path
            d="M83 46.5L81.5 50"
            stroke="#ECFEFF"
            stroke-width="0.5"
            stroke-linecap="round"
          />
        </svg>
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="49.5" fill="#78350F" stroke="#ECFEFF" />
          <path
            d="M23 38.5774C23 38.5774 26.2741 33.8839 29.5 33.0774C33.5 32.0774 34 23.0773 39.5 24.0774C44.3487 24.9591 45.4243 29.2471 50 31.0774C55 33.0774 51.8213 42.2202 55 48.5774C57.5 53.5774 55 59.5774 58.5 62.0774C60.8621 63.7646 60.0806 65.9735 62.5 67.5774C65.0733 69.2833 68 69.0774 70 71.5774C71.7337 73.7445 71 75.5774 74.5 75.5774C76.5 75.5774 77.5 75.5774 77.5 75.5774"
            stroke="#ECFEFF"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </Parallax>
    <Parallax speed={-4}>
      <div className="mx-auto text-cyan-100 my-4 w-3/4 place-items-center">
        <p>
          Many associate burnout with the feeling of being exhausted, not having
          the energy to accomplish basic tasks. But exhaustion is but one of the
          facets of burnout. Maslach’s research uncovered three basic dimensions
          from the burnout experience.{" "}
        </p>
        <h4 className="bg-teal-800 my-4 p-2 rounded-md leading-4 w-min">
          Exhaustion
        </h4>
        <p>
          Exhaustion represents the individual dimension of burnout. It is also
          the most analysed and reported dimension. It refers to feelings of
          being overextended and depleted of one’s emotional and physical
          resources. To cope with feelings of exhaustion and work overload,
          actions like distancing oneself emotionally and cognitively from the
          work begin taking place.
        </p>
        <h4 className="bg-red-800 my-4 p-2 rounded-md leading-4 w-min">
          Cynicism
        </h4>
        <p>
          The component of cynicism or depersonalisation represents the
          interpersonal dimension of burnout. It involves detaching oneself from
          various aspects of the job, often resulting in a negative or apathetic
          attitude. A strong relationship from exhaustion to cynicism is
          consistently found in burnout research.
        </p>
        <h4 className="bg-amber-800 my-4 p-2 rounded-md leading-4 w-min">
          Inefficacy
        </h4>
        <p>
          The inefficacy component of burnout represents the self-evaluation
          dimension. It refers to feelings of incompetence and a lack of
          achievement and productivity in one’s work. It can also exacerbate
          feelings of of Imposter Syndrome.
        </p>
      </div>
    </Parallax>
    <Parallax speed={-2}>
      <div className="my-12 mx-auto text-neutral-200 font-bold capitalize text-2xl w-fit">
        <h3>Consequences </h3>
      </div>
      <p>text</p>
    </Parallax>
  </>
);

export default App;
