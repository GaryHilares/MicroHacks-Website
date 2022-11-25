import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { NavBar } from '../components/NavBar.js';
import { Presentation } from '../components/Presentation.js';
import { InfoContainer } from '../components/InfoContainer.js';
import { Socials } from '../components/Socials.js';
import { SponsorBox } from '../components/Sponsors.js';
import { SeasonBox } from '../components/SeasonBox';

export default function Home() {
  return (
    <div>
      <Head>
        <title>µHacks | Homepage</title>
        {/* Font links */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
        {/* /Font links */}
      </Head>
      <main>
        <div className={styles.main}>
          <NavBar buttons={[
            { text: 'About Us', link: '/#about-us' },
            { text: 'Facts', link: '/#facts' },
            { text: 'Sponsors', link: '/somelink3' },
            { text: 'Seasons', link: '/somelink4' },
            { text: 'Socials', link: '/somelink5' },
          ]} />
          <Presentation
            title={"µHacks"}
            subtitle={"µProjects with BIG IMPACT"}
            details={"Virtual Hackathon"}
            buttonText={"2nd Season coming soon!"}
            imgSrc={"µHacks new logo.png"} />
          <div id="#about-us" style={{ clear: "both" }}></div>
          <InfoContainer title={"Welcome to µHacks!"} right={true}>
            <p style={{ lineHeight: "1.25rem", margin: "10px 5%" }}>Students of all the world and all education levels are welcome to participate in this virtual hackathon.</p>
            <p style={{ lineHeight: "1.25rem", margin: "10px 5%" }}>With a team of up to 3 other friends, you will have 36 hours to create a project which helps people managing small enterprises, startups and entrepeneurs improve. Additionally, you will be able to participate in many wokshops and activities to rest while developing your world-changing idea!</p>
            <p style={{ lineHeight: "1.25rem", margin: "10px 5%" }}>We can’t wait to see your mind-blowing ideas rise! See you at µHacks!</p>
          </InfoContainer>
          <div id="#facts" style={{ clear: "both" }}></div>
          <InfoContainer title={"Some facts about µHacks"} right={false}>
            <div style={{ textAlign: "center", fontSize: "3rem", margin: "100px 0" }}>
              <span style={{ fontWeight: "bold" }}>130+</span> participants
            </div>
            <div style={{ textAlign: "center", fontSize: "3rem", margin: "100px 0" }}>
              <span style={{ fontWeight: "bold" }}>15+</span> projects
            </div>
            <div style={{ textAlign: "center", fontSize: "3rem", margin: "100px 0 50px" }}>
              <span style={{ fontWeight: "bold" }}>$6000+</span> in in-kind sponsorships
            </div>
          </InfoContainer>
          <InfoContainer title={"Sponsors"}>
            <SponsorBox /* In-kind */
              level={300}
              sponsors={[
                { url: "https://artofproblemsolving.com/", imgSrc: "/sponsor-logos/AoPS.png" },
                { url: "https://www.digitalocean.com/", imgSrc: "/sponsor-logos/DO.png" },
                { url: "https://www.echo3d.co/", imgSrc: "/sponsor-logos/echo3D.png" },
                { url: "https://www.interviewcake.com/", imgSrc: "/sponsor-logos/Interview Cake.png" },
                { url: "https://linktr.ee/leadinglearners", imgSrc: "/sponsor-logos/Leading Learners.png" },
                { url: "https://www.taskade.com/", imgSrc: "/sponsor-logos/Taskade.png" },
                { url: "https://onepassword.com/", imgSrc: "/sponsor-logos/1Password.png" }
              ]}
            />
          </InfoContainer>
          <InfoContainer title={"Seasons collection"} right={false}>
            <SeasonBox />
          </InfoContainer>
          <Socials socialInfo={[
            /* Twitter */ { url: "https://mobile.twitter.com/microhackshacks", imgSrc: "social-logos/Twitter.png" },
            /* GitHub */ { url: "https://github.com/uHackers", imgSrc: "social-logos/GitHub.png" },
            /* Instagram */ { url: "https://www.instagram.com/uhacks_official/", imgSrc: "social-logos/Instagram.png" },
          ]} />
        </div>
      </main>
    </div>
  );
}
