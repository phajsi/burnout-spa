import MenuStroke from "../assets/MenuStroke";

const styles = {
  center_right_nav_div:
    " md:flex md:my-auto md:max-h-max md:inset-y-0 md:right-0 ",
  nav_div: " hidden md:fixed relative z-10 md:py-4 md:px-10",
  nav_ul:
    "text-neutral-200 font-normal md:leading-10 text-sm md:text-base ml-auto",
  nav_li: "group flex items-center justify-end h-10 ",
  navA: "mx-2 px-4 group-hover:opacity-100 opacity-0 lg:opacity-60 transition-opacity top rounded-lg md:group-hover:bg-[#11455A]",
};

const Navigation = () => {
  return (
    <div className={`${styles.nav_div}` + `${styles.center_right_nav_div}`}>
      <ul className={`${styles.nav_ul}`}>
        <li className={`${styles.nav_li}`}>
          <a href="#intro" className={`${styles.navA}`}>
            Intro
          </a>
          <MenuStroke />
        </li>
        <li className={`${styles.nav_li}`}>
          <a href="#first_header" className={`${styles.navA}`}>
            What is Burnout?
          </a>
          <MenuStroke />
        </li>
        <li className={`${styles.nav_li}`}>
          <a href="#second_header" className={`${styles.navA}`}>
            Areas Of Worklife Scale
          </a>
          <MenuStroke />
        </li>
        <li className={`${styles.nav_li}`}>
          <a href="#third_header" className={`${styles.navA}`}>
            Personal Characteristics
          </a>
          <MenuStroke />
        </li>
        <li className={`${styles.nav_li}`}>
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
