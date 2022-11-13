import styles from '../styles/Presentation.module.css'

function Presentation(props) {
    return (
        <div>
            <div className={styles.presentation__main_text_wrapper}>
                <div className={styles.presentation__main_text_wrapper__title_wrapper}>
                    <h1 className={styles.presentation__main_text_wrapper__title}>{props.title}</h1>
                    <h2 className={styles.presentation__main_text_wrapper__subtitle}>{props.subtitle}</h2>
                </div>
                <div className={styles.presentation__main_text_wrapper__button_wrapper}>
                    <span className={styles.presentation__main_text_wrapper__detail_wrapper}>{props.details}</span>
                    <button className={styles.presentation__main_text_wrapper__button}>{props.buttonText}</button>
                </div>
            </div>
            <div className={styles.presentation__main_image_wrapper}>
                <div className={styles.presentation__main_image_wrapper__image_wrapper}>
                    <img src={props.imgSrc} width={"500px"} height={"500px"} />
                </div>
            </div>
        </div >
    );
}

export { Presentation }