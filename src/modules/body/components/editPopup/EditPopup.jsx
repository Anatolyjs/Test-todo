import { useState } from "react";
import styles from "./EditPopup.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { changePopupMode, editTodo } from "../../../../redux/mainSlice";

export const EditPopup = () => {
  const [inputValue, setInputValue] = useState("");
  const popupValue = useSelector((state) => state.main.popupMode.value);
  const dispatch = useDispatch();

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch(editTodo(inputValue));
    };
    setInputValue('');
  };

  const closePopup = () => {
    dispatch(changePopupMode(''));
    setInputValue('');
  };

  return (
    <div onClick={closePopup} className={styles.editPopup}>
      <form onClick={(e) => {e.stopPropagation();}} onSubmit={onFormSubmit} className={styles.body}>
        <div onClick={closePopup} className={styles.closeBtn}>
          <div className={styles.arrow} />
          <div className={styles.arrow} />
        </div>
        <div className={styles.text}>Введите новую задачу</div>
        <input className={styles.input} onChange={onInputChange} value={inputValue} placeholder={popupValue}/>
        <button className={styles.buttonApply}>Изменить</button>
      </form>
    </div>
  );
};
