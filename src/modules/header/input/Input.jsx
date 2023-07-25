import { useState } from 'react';
import styles from './Input.module.scss';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../../redux/mainSlice';

export const Input = () => {

    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const onInputChanged = (e) => {
        setInputValue(e.target.value);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            dispatch(addTodo(inputValue.trim()));
        };
        setInputValue('');
    }

    return <form onSubmit={onFormSubmit} className={styles.input}>
        <input onChange={onInputChanged} value={inputValue} className={styles.inputField} placeholder='Какие планы?'/>
        <button className={styles.addBtn}>Добавить</button>
    </form>
}