import "./ConfirmDelete.scss";

import Button from "../Button/Button";

interface ConfirmDeleteProps {
  title: string;
  cancelClick: () => void;
  deleteEvent: () => void;
  hideToast: (status: boolean) => void;
}

const ConfirmDelete = ({
  title,
  cancelClick,
  deleteEvent,
  hideToast,
}: ConfirmDeleteProps) => {
  const handleDelete = () => {
    deleteEvent();
    hideToast(true);
    setTimeout(() => {
      hideToast(false);
    }, 5000);
  };

  return (
    <div className={"delete"}>
      <span>
        {`Are you sure you want to delete ${title}? You'll no longer
        have access to it.`}
      </span>
      <div className={"controls"}>
        <Button
          onClick={handleDelete}
          variant={"primary"}
          children={"Delete"}
        ></Button>
        <Button
          onClick={cancelClick}
          variant={"secondary"}
          children={"Cancel"}
        ></Button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
