import styles from '../styles/Socials.module.css';

function Social() {
    return (
        <div className={styles.social_item}>
            <img src="./µHacks new logo.png" width={"50px"} height={"50px"} />
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