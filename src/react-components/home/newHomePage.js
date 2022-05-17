/* eslint-disable @calm/react-intl/missing-formatted-message */
import React, { useState } from "react";
import { Container } from "../layout/Container";
import BBLogo from "../../assets/images/hdfcbb/bouncebackbatch_logo.svg";
import HDFCLogo from "../../assets/images/hdfcbb/hdfcLife.png";
import vibha from "../../assets/images/hdfcbb/vibha.jpg";
import sunil from "../../assets/images/hdfcbb/suni.jpg";
import swati from "../../assets/images/hdfcbb/swati.jpg";
/* styles */
import styles from "./newHomePage.scss";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const NewHomePage = () => {
  const [tab, setTab] = useState("register");
  const handleClick = elem => {
    setTab(elem);
    const domElem = document.querySelector(`#${elem}`);
    domElem.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div>
      <Container>
        <div>
          <div className={styles.hpHeader}>
            <div className={styles.hpHeaderLogo}>
              <img src={HDFCLogo} alt={"HDFCLifeLogo"} />
            </div>
            <div className={styles.hpTimer}>
              {"Begins in "}
              <strong>{"4d:1hr"}</strong>
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
                Join the fun on
                <span>22nd May, 4pm onwards</span>.
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
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                </div>
              </div>
              <p>
                This event is to honour all the students, teachers and family members of the BounceBack Batch. Register
                now to take part in this exciting event.
              </p>
              <div className={styles.hpHeroRegister}>
                <a href="#">Regitster for the event</a>
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
                    Co-Founder of CashKaro.com, Swati Bhargava is one of India’s leading women entrepreneurs and an
                    acclaimed social media influencer.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className={"speakerImg"}>
                <img src={vibha} alt="" />
              </div>
              <div className={"speakerIntro"}>
                <div>
                  <h3>Biswas Bist</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis numquam repudiandae nobis
                    voluptates rem eveniet maxime consectetur possimus, atque repellat quia, porro praesentium vel
                    voluptatem quos nihil soluta dolorem eum.
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
            <div>
              <h2> Single Item</h2>
              <Slider {...settings}>
                <div>
                  <h3>1</h3>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
                <div>
                  <h3>5</h3>
                </div>
                <div>
                  <h3>6</h3>
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
        <h2>
          <span>Terms and Conditions</span> - <span>Privacy Policy</span>
        </h2>
        <p>
          <b>HDFC Life Insurance Company Limited ("HDFC Life")</b>. CIN: L65110MH2000PLC128245, IRDAI Registration No.
          101.<br />
          <b>Registered Office</b>: 13th Floor, Lodha Excelus, Apollo Mills Compound, N.M. Joshi Marg, Mahalaxmi, Mumbai
          - 400 011.<br />
          Email: service@hdfclife.com,Tel No: 1860-267-9999. Available (Mon-Sat 10 am to 7 pm) Local charges apply. DO
          NOT prefix any country code e.g. +91 or 00, Website: www.hdfclife.com<br />
          The name/letters "HDFC" in the name/logo of the company belongs to Housing Development Finance Corporation
          Limited ("HDFC Limited") and is used by HDFC Life under an agreement entered into with HDFC Limited.<br />
          ARN: INT/MC/05/22/28801
        </p>
      </div>
    </div>
  );
};

export default NewHomePage;
