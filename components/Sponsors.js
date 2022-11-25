import styles from "../styles/Sponsors.module.css";

function SponsorBox(props) {
    return (
        <div className={styles.sponsors_box}>
            {props.sponsors.map((sponsor) => {
                return (
                    <div className={styles.sponsors_box__sponsor_img}>
                        <img src={sponsor.imgSrc} width={props.level} height={props.level} />
                    </div>
                );
            })}
        </div>
    );
}

export { SponsorBox };