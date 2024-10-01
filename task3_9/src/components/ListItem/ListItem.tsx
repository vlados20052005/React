import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./ListItem.scss";

import { removeTasksWithSpecificCalendar } from "reducers/calendarTasksSlice";
import { deleteCalendar } from "reducers/calendarsSlice";
import { AppDispatch } from "store/store";

import Checkbox from "../Checkbox/Checkbox";
import ConfirmDelete from "../ConfirmDelete/ConfirmDelete";
import EditIcon from "../Icons/EditIcon/EditIcon";
import TrashIcon from "../Icons/TrashIcon/TrashIcon";
import Modal from "../Modal/Modal";

interface TaskItemProps {
  title: string;
  isShow: boolean;
  id: number;
  color: string;
  showEdit: () => void;
  changeStatus: () => void;
}

const ListItem: React.FC<TaskItemProps> = ({
  title,
  isShow,
  id,
  color,
  showEdit,
  changeStatus,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  const handleDeleteCalendar = () => {
    dispatch(deleteCalendar({ id }));
    dispatch(removeTasksWithSpecificCalendar({ id }));
    setShowConfirm(false);
  };

  return (
    <div className={`task hover`}>
      <div className="checkbox_wrapper">
        <Checkbox isValueEmpty={isShow} onClick={changeStatus} color={color} />
      </div>

      <span className={"task_text"}>{title}</span>

      <div className="control">
        {id !== 0 ? <TrashIcon onClick={() => setShowConfirm(true)} /> : ""}
        <EditIcon onClick={showEdit} />
      </div>
      {showConfirm && (
        <Modal onClick={() => setShowConfirm(false)}>
          <ConfirmDelete
            deleteEvent={handleDeleteCalendar}
            cancelClick={() => setShowConfirm(false)}
            title={title}
            hideToast={() => {}}
          />
        </Modal>
      )}
    </div>
  );
};

export default ListItem;
