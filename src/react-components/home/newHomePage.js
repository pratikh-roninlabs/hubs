/* eslint-disable @calm/react-intl/missing-formatted-message */
import React, { useEffect, useState } from "react";
import { Container } from "../layout/Container";
import BBLogo from "../../assets/images/hdfcbb/bouncebackbatch_logo.svg";
import HDFCLogo from "../../assets/images/hdfcbb/hdfcLife.png";
import vibha from "../../assets/images/hdfcbb/vibha.jpg";
import sunil from "../../assets/images/hdfcbb/suni.jpg";
import swati from "../../assets/images/hdfcbb/swati.jpg";
import karunesh from "../../assets/images/hdfcbb/karunesh.jpg";
import event1 from "../../assets/images/hdfcbb/event1.jpg";
import event2 from "../../assets/images/hdfcbb/event2.jpg";
import event3 from "../../assets/images/hdfcbb/event3.jpg";
import event4 from "../../assets/images/hdfcbb/event4.jpg";
import event5 from "../../assets/images/hdfcbb/event5.jpg";
import { ReactComponent as Right } from "../icons/redRight.svg";
import { ReactComponent as Left } from "../icons/redLeft.svg";
/* styles */
import styles from "./newHomePage.scss";
import Slider from "react-slick";
import { createAndRedirectToNewHub } from "../../utils/phoenix-utils";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
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

const NewHomePage = () => {
  const [tab, setTab] = useState("register");
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const handleClick = elem => {
    setTab(elem);
    const domElem = document.querySelector(`#${elem}`);
    domElem.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  useEffect(() => {
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
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  }, []);
  const calculateTimeLeft = () => {
    const year = new Date().getFullYear();
    const difference = +new Date(`05/22/${year}`) - +new Date();

    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  };
  return (
    <div>
      <Container>
        <div>
          <div className={styles.hpHeader} style={{ paddingTop: "10px" }}>
            <div className={styles.hpHeaderLogo}>
              <img src={HDFCLogo} alt={"HDFCLifeLogo"} />
            </div>
            <div className={styles.hpTimer}>
              {"Begins in "}
              <strong>
                {timeLeft["days"]}d:{timeLeft["hours"]}hr
              </strong>
            </div>
          </div>
          <div className={styles.bbbLogoWrapper}>
            <img src={BBLogo} alt={"BounceBack_logo"} />
          </div>
          <div className={styles.tabsWrapper}>
            <ul className={styles.tabs}>
              <li className={tab === "register" && "active"} onClick={() => handleClick("register")}>
                Register
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
                A unique <span>virtual convocation on the Metaverse</span> to celebrate the BounceBack Batch of 2022.
                Join the fun on{" "}
                <span>
                  22<sup>nd</sup> May, 4pm
                </span>{" "}
                onwards.
              </p>
            </div>
            <div className={styles.hpHeroVideo}>
              <div className={styles.hpHeroVdoWrapper}>
                <div>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/oi1ntQwBJ9Y"
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
              <div className={styles.hpHeroRegister}>
                <a href="https://bouncebackbatch.com/">CLICK TO REGISTER</a>
              </div>
            </div>
          </section>
        </div>
      </Container>
      <section id="speakers">
        <div className={styles.speakerWrapper}>
          <h2 className={styles.hpSectionTitle}>Speakers</h2>
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
                    Powerful Women in Business" award by Fortune International and Business Today for 4 consecutive
                    years.
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
                    entrepreneurs and was featured in Forbes 40 under 40.
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
      {/* <Container>
        <div className={styles.hpRulestoParticipate}>
          <h2 className={styles.hpSectionTitle}>How to participate</h2>
          <ol>
            <li> Register at bouncebackbatch.com.</li>
            <li> Visit the website on the day of the event.</li>
            <li> You can access the website with a computer, mobile phone or VR device.</li>
            <li>
              Once inside, listen to inspirational speakers and hilarious comedians, walk around, take …selfies,
              interact with friends and explore a beautiful virtual world.
            </li>
          </ol>
        </div>
      </Container> */}
      <div className={styles.footerWrapper}>
        {/* <h2>
          <span>Terms and Conditions</span> - <span>Privacy Policy</span>
        </h2> */}
        <p>
          <b>HDFC Life Insurance Company Limited ("HDFC Life")</b>. CIN: L65110MH2000PLC128245, IRDAI Registration No.
          101.<br />
          <b>Registered Office</b>: 13th Floor, Lodha Excelus, Apollo Mills Compound, N.M. Joshi Marg, Mahalaxmi, Mumbai
          - 400 011.<br />
          Email: <a href="mailto:service@hdfclife.com">service@hdfclife.com</a>,Tel No: 1860-267-9999. Available
          (Mon-Sat 10 am to 7 pm) Local charges apply. DO NOT prefix any country code e.g. +91 or 00, Website:{" "}
          <a href="www.hdfclife.com" target="_blank">
            www.hdfclife.com
          </a>
          <br />
          The name/letters "HDFC" in the name/logo of the company belongs to Housing Development Finance Corporation
          Limited ("HDFC Limited") and is used by HDFC Life under an agreement entered into with HDFC Limited.<br />
          ARN: INT/MC/05/22/28801
        </p>
      </div>
    </div>
  );
};

export default NewHomePage;
