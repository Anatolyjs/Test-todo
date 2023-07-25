import { useSelector } from "react-redux";
import styles from "./TasksList.module.scss";
import { Task } from "./task/Task";



export const TasksList = () => {

  const completedTodos = [];
  const uncompletedTodos = [];

  const todos = useSelector((state) => state.main.todos);
  todos.forEach((todo) => {
    todo.isCompleted ? completedTodos.push(<Task key={todo.id} text={todo.text} isCompleted={todo.isCompleted} id={todo.id}/>) : uncompletedTodos.push(<Task key={todo.id} text={todo.text} isCompleted={todo.isCompleted} id={todo.id}/>);
  });

  const isCompletedTodos = !completedTodos.length ? <div className={styles.text}>Нет выполненных дел</div> : completedTodos;
  const isUncompletedTodos = !uncompletedTodos.length ? <div className={styles.text}>Добавьте новое дело</div> : uncompletedTodos;

  return (
    <section className={styles.list}>
      <div className={styles.completed}>{isUncompletedTodos}</div>
      <div className={styles.points}>
        <div className={styles.point} />
        <div className={styles.point} />
        <div className={styles.point} />
      </div>
      <div className={styles.uncompleted}>{isCompletedTodos}</div>
    </section>
  );
};
