import styles from '../styles/Home.module.css'

function NavBar(props) {
    return (
        <nav className={styles.navigation_bar}>
            <div className={styles.navigation_bar__button_box}>
                {props.buttons.map((button) => <a className={styles.navigation_bar__button_box__button} href={button.link}>{button.text}</a>)}
            </div>
        </nav>
    );
}

export { NavBar }