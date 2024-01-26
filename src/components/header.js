import "./Header.css";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
export default function Header(props) {
  const { theme, settheme } = props;

  function ToggleTheme() {
    if (theme === "light") {
      settheme("dark");
    } else settheme("light");
  }
  return (
    <>
      <header>
        <div className="logo">
          <span> Task Management </span>{" "}
        </div>{" "}
        <div className="theme">
          <span>
            {" "}
            {theme === "light" ? <BsFillSunFill /> : <BsMoonStarsFill />}{" "}
          </span>{" "}
          <span className="icon" onClick={ToggleTheme}>
            {" "}
            Change{" "}
          </span>{" "}
        </div>{" "}
      </header>{" "}
    </>
  );
}
