import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./ScheduleManager.scss";

import { createTask } from "reducers/calendarTasksSlice";
import { AppDispatch } from "store/store";

import { DataTask } from "../../types/types";
import Button from "../Button/Button";
import CalendarCollection from "../CalendarCollection/CalendarCollection";
import DataPicker from "../DataPicker/DataPicker";
import EventModal from "../EventModal/EventModal";
import PlusIcon from "../Icons/PlusIcon/PlusIcon";
import Modal from "../Modal/Modal";

const ScheduleManager = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleCreate = (data: DataTask) => {
    dispatch(createTask(data));
  };

  return (
    <div className={"schedule_manager"}>
      <Button
        variant={"primary"}
        onClick={() => setIsOpen(!isOpen)}
        startIcon={<PlusIcon />}
      >
        {"Create"}
      </Button>
      <DataPicker />
      <CalendarCollection />
      {isOpen && (
        <Modal
          onClick={closeModal}
          title={"Create event"}
          children={
            <EventModal onClick={handleCreate} closeModal={closeModal} />
          }
        />
      )}
    </div>
  );
};

export default ScheduleManager;
