import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./CalendarCollection.scss";

import { addCalendar } from "reducers/calendarsSlice";
import { AppDispatch, RootState } from "store/store";

import CalendarListItem from "../CalendarsList/CalendarsList";
import PlusIcon from "../Icons/PlusIcon/PlusIcon";
import ManageCalendar from "../ManageCalendar/ManageCalendar";
import Modal from "../Modal/Modal";

interface NewCalendar {
  title: string;
  color: string;
}

const CalendarCollection = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const calendars = useSelector(
    (state: RootState) => state.calendars.calendars,
  );

  const dispatch = useDispatch<AppDispatch>();

  const addNewCalendar = ({ title, color }: NewCalendar) => {
    title.length >= 1 &&
      color !== "" &&
      dispatch(addCalendar({ title, color }));
    setShowModal(false);
  };

  return (
    <div className={"wrapper_calendars_list"}>
      <div className={"title"}>
        <span>My calendars</span>
        <PlusIcon color={"black"} onClick={() => setShowModal(true)} />
      </div>
      <div className={"wrapper_list"}>
        <div className={"calendars_list"}>
          <CalendarListItem calendars={calendars} />
        </div>
      </div>

      {showModal && (
        <Modal onClick={() => setShowModal(false)} title={"Create calendar"}>
          <ManageCalendar
            name={""}
            calendarColor={""}
            onClick={addNewCalendar}
          />
        </Modal>
      )}
    </div>
  );
};

export default CalendarCollection;
