import styles from '../styles/InfoContainer.module.css';

function InfoContainer(props) {
    return (
        <div data-aos={"fade-up"}>
            <div className={styles.info_container}>
                <h1 className={styles.info_container__title}>{props.title}</h1>
                {props.children}
            </div>
        </div>
    );
}

export { InfoContainer };