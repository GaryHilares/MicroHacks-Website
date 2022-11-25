import styles from '../styles/Socials.module.css';

function Social(props) {
    return (
        <a href={props.url}>
            <div data-aos="flip-up" className={styles.social_item__wrapper}>
                <div className={styles.social_item__content}>
                    <img src={props.imgSrc} width={"50px"} height={"50px"} />
                </div>
            </div>
        </a>
    );
}

function Socials(props) {
    return (
        <div className={styles.social_box}>
            {props.socialInfo.map((social) => <Social url={social.url} imgSrc={social.imgSrc} />)}
        </div>
    );
}

export { Socials };