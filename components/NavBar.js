import styles from '../styles/NavBar.module.css';

function NavBar(props) {
    return (
        <nav data-aos="fade-down" className={styles.navigation_bar}>
            <div className={styles.navigation_bar__button_box}>
                {props.buttons.map((button, index) => <a key={index} className={styles.navigation_bar__button_box__button} href={button.link}>{button.text}</a>)}
            </div>
        </nav>
    );
}

export { NavBar };