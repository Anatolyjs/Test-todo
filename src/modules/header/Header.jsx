import styles from "./Header.module.scss";
import { Input } from "./input/Input";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className={styles.title}>Todo App</h1>
        <div className={styles.input}>
            <Input />
        </div>
      </div>
    </header>
  );
};
