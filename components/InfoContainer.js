import styles from '../styles/InfoContainer.module.css';

function InfoContainer(props) {
    return (
        <div className={styles.info_container} style={{
            float: props.right ? "right" : "none",
            margin: props.right ? "0 5% 25px 0" : "0 5% 25px 5%",
            width: props.right ? "65%" : "90%"
        }}>
            <h1 className={styles.info_container__title}>{props.title}</h1>
            {props.children}
        </div>
    );
}

export { InfoContainer };