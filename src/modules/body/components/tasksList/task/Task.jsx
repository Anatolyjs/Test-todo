import { useDispatch } from "react-redux";
import cn from 'classnames';

import styles from "./Task.module.scss";
import { changePopupMode, deleteTodo, toggleCompletedToto } from "../../../../../redux/mainSlice";

export const Task = ({ isCompleted, text, id }) => {
  const dispatch = useDispatch();

  const onDeleteBtnClick = () => {
    dispatch(deleteTodo(id));
  };

  const onToggleComplete = () => {
    dispatch(toggleCompletedToto(id));
  };

  const onEditBtnClick = () => {
    dispatch(changePopupMode(text));
  };

  const isTaskCompleted = !isCompleted && (
    <div onClick={onEditBtnClick} className={styles.editBtn}>
      <i className="fa fa-pencil" aria-hidden="true"></i>
    </div>
  );

  return (
    <article className={styles.task}>
      <div className={styles.textPart}>
        <div onClick={onToggleComplete} className={cn(styles.checkBtn, isCompleted && styles.completed)} />
        <div className={styles.text}>{text}</div>
      </div>
      <div className={styles.buttonsPart}>
        {isTaskCompleted}
        <div onClick={onDeleteBtnClick} className={styles.deleteBtn}>
          <i className="fa fa-trash" aria-hidden="true"></i>
        </div>
      </div>
    </article>
  );
};
