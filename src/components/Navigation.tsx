import MenuStroke from "../assets/MenuStroke";

const styles = {
  centerRightNavDiv:
    " md:flex md:my-auto md:max-h-max md:inset-y-0 md:right-0 ",
  navDiv: " hidden md:fixed relative z-10 md:py-4 md:px-10",
  navUl:
    "text-neutral-200 font-normal md:leading-10 text-sm md:text-base ml-auto",
  navLi: "group flex items-center justify-end h-10 ",
  navA: "mx-2 px-4 group-hover:opacity-100 opacity-0 lg:opacity-60 transition-opacity top rounded-lg md:group-hover:bg-[#11455A]",
};

const Navigation = () => {
  return (
    <div className={`${styles.navDiv}` + `${styles.centerRightNavDiv}`}>
      <ul className={`${styles.navUl}`}>
        <li className={`${styles.navLi}`}>
          <a href="#intro" className={`${styles.navA}`}>
            Intro
          </a>
          <MenuStroke />
        </li>
        <li className={`${styles.navLi}`}>
          <a href="#first_header" className={`${styles.navA}`}>
            What is Burnout?
          </a>
          <MenuStroke />
        </li>
        <li className={`${styles.navLi}`}>
          <a href="#second_header" className={`${styles.navA}`}>
            Areas Of Worklife Scale
          </a>
          <MenuStroke />
        </li>
        <li className={`${styles.navLi}`}>
          <a href="#third_header" className={`${styles.navA}`}>
            Personal Characteristics
          </a>
          <MenuStroke />
        </li>
        <li className={`${styles.navLi}`}>
          <a href="#fourth_header" className={`${styles.navA}`}>
            Job Demands In Tech
          </a>
          <MenuStroke />
        </li>
      </ul>
    </div>
  );
};
export default Navigation;
