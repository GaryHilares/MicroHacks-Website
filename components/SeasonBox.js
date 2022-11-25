function SeasonBox(props) {
    const testProps = [
        { name: "µHacks ZERO", date: "January 2022", url: "https://microhacks.devpost.com/" },
        { name: "µHacks 2023", date: "May 2023", url: "discord.com/" }
    ]
    return (
        <div>
            {testProps.map(season => {
                return (
                    <div style={{ border: "2px solid black", padding: "10px", marginBottom: "10px", overflow: "hidden" }}>
                        <div style={{ width: "80%", display: "inline-block" }}>
                            <h1 style={{ fontWeight: "bold" }}>{season.name}</h1>
                            <span>{season.date}</span>
                        </div>
                        <a href={season.url}>
                            <div style={{ margin: "0", float: "right", borderRadius: "50%", width: "50px", height: "50px", backgroundColor: "black" }}>
                            </div>
                        </a>
                    </div>
                );
            })}
        </div >
    );
}

export { SeasonBox };