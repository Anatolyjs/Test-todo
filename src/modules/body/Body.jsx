import { useDispatch, useSelector } from "react-redux";
import cn from 'classnames';

import styles from "./Body.module.scss";
import { TasksList } from "./components/tasksList/TasksList";
import { EditPopup } from "./components/editPopup/EditPopup";
import { changePopupMode } from "../../redux/mainSlice";

export const Body = () => {
  
  const popupState = useSelector(state => state.main.popupMode.state);
  const dispatch = useDispatch();

  return (
    <main className="body">
      <div className="container">
        <TasksList />
      </div>
      <div className={cn(styles.editPopup, popupState && styles.active)}>
        <EditPopup />
      </div>
    </main>
  );
};
