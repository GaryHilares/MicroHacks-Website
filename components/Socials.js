import styles from '../styles/Home.module.css'

function Social() {
    return (
        <div style={{ width: "100px", height: "100px", backgroundColor: "#665eeb", border: "1px solid black", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src="./µHacks new logo.png" width={"50px"} height={"50px"} />
        </div>
    );
}

function Socials() {
    return (
        <div style={{ textAlign: "center" }}>
            <Social />
            <Social />
            <Social />
        </div>
    );
}

export { Socials }