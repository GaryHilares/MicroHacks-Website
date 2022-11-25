import styles from '../styles/Socials.module.css';

function Social() {
    return (
        <div className={styles.social_item__wrapper}>
            <div className={styles.social_item__content}>
                <img src="./µHacks new logo.png" width={"50px"} height={"50px"} />
            </div>
        </div>
    );
}

function Socials(props) {
    return (
        <div className={styles.social_box}>
            <Social />
            <Social />
            <Social />
        </div>
    );
}

export { Socials };