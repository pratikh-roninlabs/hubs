import React, { useState, useEffect } from "react";
import { Container } from "../layout/Container";
import BBLogo from "../../assets/images/hdfcbb/bouncebackbatch_logo.svg";
import HDFCLogo from "../../assets/images/hdfcbb/hdfc_life.svg";
import vibha from "../../assets/images/hdfcbb/vibha.jpg";
import sunil from "../../assets/images/hdfcbb/suni.jpg";
import swati from "../../assets/images/hdfcbb/swati.jpg";
import karunesh from "../../assets/images/hdfcbb/karunesh.jpg";
import event1 from "../../assets/images/hdfcbb/event1.jpg";
import event2 from "../../assets/images/hdfcbb/event2.jpg";
import event3 from "../../assets/images/hdfcbb/event3.jpg";
import event4 from "../../assets/images/hdfcbb/event4.jpg";
import event5 from "../../assets/images/hdfcbb/event5.jpg";

import styles from "./newHomePage.scss";
import { usePublicRooms } from "./usePublicRooms";
import RoomSelector from "./roomSelector";
import Slider from "react-slick";
import { createAndRedirectToNewHub } from "../../utils/phoenix-utils";
import { ReactComponent as Right } from "../icons/redRight.svg";
import { ReactComponent as Left } from "../icons/redLeft.svg";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ],
  nextArrow: (
    <div>
      <Right />
    </div>
  ),
  prevArrow: (
    <div>
      <Left />
    </div>
  )
};

const NewHomePagePost = () => {
  const [tab, setTab] = useState("register");
  const [terms, setTerms] = useState(false);
  const [showRooms, setShowRooms] = useState(false);
  const { results: publicRooms } = usePublicRooms();
  console.log(publicRooms);

  const handleClick = elem => {
    setTab(elem);
    const domElem = document.querySelector(`#${elem}`);
    domElem.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    window.addEventListener("scroll", event => {
      console.log("trfserfser");
    });

    const qs = new URLSearchParams(location.search);

    // Support legacy sign in urls.
    if (qs.has("sign_in")) {
      const redirectUrl = new URL("/signin", window.location);
      redirectUrl.search = location.search;
      window.location = redirectUrl;
    } else if (qs.has("auth_topic")) {
      const redirectUrl = new URL("/verify", window.location);
      redirectUrl.search = location.search;
      window.location = redirectUrl;
    }

    if (qs.has("new")) {
      createAndRedirectToNewHub(null, null, true);
    }
  }, []);

  return (
    <div>
      <div className={styles.hpHeaderWrapper}>
        <Container>
          <div className={styles.hpHeader}>
            <div className={styles.hpHeaderLogo}>
              <img src={HDFCLogo} alt={"HDFCLifeLogo"} />
            </div>
            <div className={styles.enterBtnWrapper}>
              <button onClick={() => setShowRooms(true)}>{"Enter the Metaverse"}</button>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div style={{ marginTop: "130px" }}>
          <div className={styles.bbbLogoWrapper}>
            <img src={BBLogo} alt={"BounceBack_logo"} />
          </div>
          <div className={styles.tabsWrapper}>
            <ul className={styles.tabs}>
              <li className={tab === "register" && "active"} onClick={() => handleClick("register")}>
                Participate
              </li>
              <li className={tab === "speakers" && "active"} onClick={() => handleClick("speakers")}>
                Speakers
              </li>
              <li className={tab === "highlights" && "active"} onClick={() => handleClick("highlights")}>
                Highlights
              </li>
            </ul>
          </div>
          <section id="register">
            <div className={styles.hpHeroContent}>
              <p>
                The BounceBack Batch Metaverse is now <span>live!</span>
              </p>
              <div className={`stickyBtn ${styles.mobileOnly} ${styles.enterBtnWrapper}`}>
                <button onClick={() => setShowRooms(true)}>{"Enter the Metaverse"}</button>
              </div>
            </div>
            <div className={styles.hpHeroVideo}>
              <div className={styles.hpHeroVdoWrapper}>
                <div>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/be4ZxY2TuSE"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <p>
                This event is to honour all the students, teachers and family members of the BounceBack Batch. Register
                now to take part in this exciting event.
              </p>
              <div className={styles.hpRulestoParticipate}>
                <h2 className={styles.hpSectionTitle}>How to enter the Metaverse?</h2>
                <ol>
                  <li>Click on the link "Enter The Metaverse" at the top right corner.</li>
                  <li>Select your room.</li>
                  <li>Enter the room from your device or use a VR device.</li>
                  <li>Enter your name and select your avatar.</li>
                  <li>Enjoy!</li>
                </ol>
              </div>
            </div>
          </section>
        </div>
      </Container>
      <section id="speakers">
        <div className={styles.speakerWrapper}>
          <h2 className={styles.hpSectionTitle}>Guest Speakers</h2>
          <ul className={styles.speakerList}>
            <li>
              <div className={"speakerImg"}>
                <img src={vibha} alt="" />
              </div>
              <div className={"speakerIntro"}>
                <div>
                  <h3>Vibha Padalkar</h3>
                  <p>
                    CEO and MD of HDFC Life, Vibha Padalkar is an inspirational leader and recipient of the "Most
                    Powerful Women in Business" award by reputed publications.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className={"speakerImg"}>
                <img src={sunil} alt="" />
              </div>
              <div className={"speakerIntro"}>
                <div>
                  <h3>Sunil Chhetri</h3>
                  <p>
                    Captain of the Indian National football team, Sunil Chhetri is a proud recipient of the Arjuna
                    Award, the Padma Shri, the Khel Ratna and many more!
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className={"speakerImg"}>
                <img src={swati} alt="" />
              </div>
              <div className={"speakerIntro"}>
                <div>
                  <h3>Swati Bhargava</h3>
                  <p>
                    Co-Founder of CashKaro.com and EarnKaro.com, Swati Bhargava is one of India’s leading women
                    entrepreneurs and was featured in Fortune 40 under 40.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className={"speakerImg"}>
                <img src={karunesh} alt="" />
              </div>
              <div className={"speakerIntro"}>
                <div>
                  <h3>Karunesh Talwar</h3>
                  <p>
                    With over 700K subscribers on YouTube and over 170K followers on Instagram, Karunesh Talwar is one
                    of India's most adored comedians.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section id="highlights">
        <div className={styles.hpEventList}>
          <h2 className={styles.hpSectionTitle}>Event Hightlights</h2>
          <div className={styles.hpSliders}>
            <div className={styles.sliderWrapper}>
              <Slider {...settings}>
                <div className={styles.selem}>
                  <img src={event1} alt="" />
                  <span> A wide range of avatars to choose from.</span>
                </div>
                <div className={styles.selem}>
                  <img src={event2} alt="" />
                  <span>A beautiful environment to explore.</span>
                </div>
                <div className={styles.selem}>
                  <img src={event3} alt="" />
                  <span>Entertaining and inspirational talks from special guests.</span>
                </div>
                <div className={styles.selem}>
                  <img src={event4} alt="" />
                  <span>An a-maze-ing experience to explore.</span>
                </div>
                <div className={styles.selem}>
                  <img src={event5} alt="" />
                  <span>A basketball court to practice shooting hoops.</span>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <Container />
      <div className={styles.footerWrapper}>
        <div
          className="goTop"
          onClick={() => {
            document.querySelector("body").scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
        <h2>
          <span onClick={() => setTerms(true)}>Terms and Conditions</span>
        </h2>
        <p>
          <b>HDFC Life Insurance Company Limited ("HDFC Life")</b>. CIN: L65110MH2000PLC128245, IRDAI Registration No.
          101.<br />
          <b>Registered Office</b>: 13th Floor, Lodha Excelus, Apollo Mills Compound, N.M. Joshi Marg, Mahalaxmi, Mumbai
          - 400 011.<br />
          Email: <a href="mailto:service@hdfclife.com">service@hdfclife.com</a>,Tel No: 1860-267-9999. Available
          (Mon-Sat 10 am to 7 pm) Local charges apply. DO NOT prefix any country code e.g. +91 or 00, Website:{" "}
          <a href="https://www.hdfclife.com" target="_blank">
            www.hdfclife.com
          </a>
          <br />
          The name/letters "HDFC" in the name/logo of the company belongs to Housing Development Finance Corporation
          Limited ("HDFC Limited") and is used by HDFC Life under an agreement entered into with HDFC Limited.<br />
          ARN: INT/MC/05/22/28801
        </p>
      </div>
      {terms && <TermsSection close={() => setTerms(false)} />}
      {showRooms && <RoomSelector rooms={publicRooms} close={() => setShowRooms(false)} />}
    </div>
  );
};

export default NewHomePagePost;
