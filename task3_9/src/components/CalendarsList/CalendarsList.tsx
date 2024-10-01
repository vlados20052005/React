import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { changeShowStatus, editCalendar } from "reducers/calendarsSlice";
import { CalendarItem } from "types/types";

import ListItem from "../ListItem/ListItem";
import ManageCalendar from "../ManageCalendar/ManageCalendar";
import Modal from "../Modal/Modal";

export interface CalendarsListProps {
  calendars: CalendarItem[];
}

export interface UpdatedCalendar {
  title: string;
  color: string;
  id?: number;
}

const CalendarsList = ({ calendars }: CalendarsListProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const dispatch = useDispatch();

  const updateCalendar = ({ title, color, id }: UpdatedCalendar) => {
    dispatch(editCalendar({ title, color, id }));
    setShowModal(false);
  };

  const changeStatus = (id: number, isShow: boolean) => {
    dispatch(changeShowStatus({ id, isShow }));
  };

  return (
    <>
      {calendars.map((item: CalendarItem) => (
        <div key={item.id}>
          <ListItem
            id={item.id}
            title={item.title}
            isShow={item.isShow}
            color={item.color}
            showEdit={() => setShowModal(true)}
            changeStatus={() => changeStatus(item.id, !item.isShow)}
          />
          {showModal && (
            <Modal
              key={item.id}
              onClick={() => setShowModal(false)}
              title={"Edit calendar"}
            >
              <ManageCalendar
                name={item.title}
                id={item.id}
                calendarColor={item.color}
                onClick={updateCalendar}
              />
            </Modal>
          )}
        </div>
      ))}
    </>
  );
};

export default CalendarsList;
