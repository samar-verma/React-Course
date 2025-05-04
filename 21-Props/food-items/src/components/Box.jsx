import styles from "./Box.module.css";
function Box({children}) {
    return <div className={styles.container}>{children}</div>
}

export default Box;