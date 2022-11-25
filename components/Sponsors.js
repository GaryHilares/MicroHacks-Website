import styles from "../styles/Sponsors.module.css";
import Image from "next/image";

function SponsorBox(props) {
    return (
        <div className={styles.sponsors_box}>
            {props.sponsors.map((sponsor) => {
                return (
                    <a href={sponsor.url}>
                        <div className={styles.sponsors_box__sponsor_img} style={{ width: props.level, height: props.level }}>
                            <Image src={sponsor.imgSrc} layout={"fill"} objectFit={"contain"} />
                        </div>
                    </a>
                );
            })}
        </div>
    );
}

export { SponsorBox };