import "./Header.scss";

import { monthMap } from "constants/constants";
import useCalendarWeekGrid from "hooks/useCalendarWeekGrid";

import logo from "../../assets/logo.svg";
import user_picture from "../../assets/user_picture.svg";

import Button from "../Button/Button";
import ChevronLeftIcon from "../Icons/ChevronLeftIcon/ChevronLeftIcon";
import ChevronRightIcon from "../Icons/ChevronRightIcon/ChevronRightIcon";

const Header = () => {
  const { weekDetails, setWeekOffset } = useCalendarWeekGrid();

  return (
    <div className={"header"}>
      <div className={"switcher_months_wrapper"}>
        <figure>
          <img alt="logo" src={logo} />
        </figure>
        <Button onClick={() => setWeekOffset(0)}>Today</Button>
        <div className={"switcher_months"}>
          <Button
            variant={"secondary"}
            onClick={() => setWeekOffset(-1)}
            startIcon={<ChevronLeftIcon />}
          />
          <Button
            variant={"secondary"}
            onClick={() => setWeekOffset(1)}
            startIcon={<ChevronRightIcon />}
          />
          <span>
            {monthMap[weekDetails[0]?.month]} {weekDetails[0]?.year}
          </span>
        </div>
      </div>
      <div className={"logout_wrapper"}>
        <div className={"user"}>
          <span>Username</span>
          <figure>
            <img alt={"user_picture"} src={user_picture} />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Header;
