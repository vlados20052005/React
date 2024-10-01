import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import CalendarWrapper from "components/CalendarWrapper/CalendarWrapper";
import Header from "components/Header/Header";
import { setDataFromLocalStorage } from "reducers/calendarTasksSlice";
import { setCalendarsFromLocalStorage } from "reducers/calendarsSlice";

const Calendar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const isLogin = localStorage.getItem("isAuthenticated");
    if (!isLogin) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    dispatch(setDataFromLocalStorage());
    dispatch(setCalendarsFromLocalStorage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <CalendarWrapper />
    </>
  );
};

export default Calendar;
