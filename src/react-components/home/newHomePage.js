/* eslint-disable @calm/react-intl/missing-formatted-message */
import React from "react";
import { Container } from "../layout/Container";
import BBLogo from "../../assets/images/hdfcbb/bouncebackbatch_logo.svg";
import HDFCLogo from "../../assets/images/hdfcbb/hdfcLife.png";
import speaker from "../../assets/images/hdfcbb/biswa-kalyan-rath-profile-1.jpg";
import tw from "../../assets/images/hdfcbb/twiiter.svg";
import li from "../../assets/images/hdfcbb/linkedin.svg";
import yt from "../../assets/images/hdfcbb/yt.svg";
/* styles */
import styles from "./newHomePage.scss";

const NewHomePage = () => {
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
          <div className={styles.hpHeroContent}>
            <p>
              A one-of-a kind <span>virtual convocation on the metaverse</span>
              to celebrate the BounceBack batch of 2022.
            </p>
            <p>
              Join in the fun on <span>May 15th, 4pm</span> onwards.
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
              This event is to honor all the students, teachers and family members of the BounceBack Batch. Join us in
              Join us in this exciting event which will be full of entertainment and inspiration!
            </p>
            <div className={styles.hpHeroRegister}>
              <a href="#">Regitster for the event</a>
            </div>
          </div>
        </div>
      </Container>
      <div className={styles.speakerWrapper}>
        <h2 className={styles.hpSectionTitle}>Guest Speakers</h2>
        <ul className={styles.speakerList}>
          <li>
            <div className={"speakerImg"}>
              <img src={speaker} alt="" />
            </div>
            <div className={"speakerIntro"}>
              <div>
                <h3>Biswas Bist</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis numquam repudiandae nobis
                  voluptates rem eveniet maxime consectetur possimus, atque repellat quia, porro praesentium vel
                  voluptatem quos nihil soluta dolorem eum.
                </p>
                <ul className="socialLink">
                  <li>
                    <a href="#">
                      <img src={tw} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={li} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={yt} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div className={"speakerImg"}>
              <img src={speaker} alt="" />
            </div>
            <div className={"speakerIntro"}>
              <div>
                <h3>Biswas Bist</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis numquam repudiandae nobis
                  voluptates rem eveniet maxime consectetur possimus, atque repellat quia, porro praesentium vel
                  voluptatem quos nihil soluta dolorem eum.
                </p>
                <ul className="socialLink">
                  <li>
                    <a href="#">
                      <img src={tw} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={li} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={yt} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div className={"speakerImg"}>
              <img src={speaker} alt="" />
            </div>
            <div className={"speakerIntro"}>
              <div>
                <h3>Biswas Bist</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis numquam repudiandae nobis
                  voluptates rem eveniet maxime consectetur possimus, atque repellat quia, porro praesentium vel
                  voluptatem quos nihil soluta dolorem eum.
                </p>
                <ul className="socialLink">
                  <li>
                    <a href="#">
                      <img src={tw} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={li} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={yt} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div className={"speakerImg"}>
              <img src={speaker} alt="" />
            </div>
            <div className={"speakerIntro"}>
              <div>
                <h3>Biswas Bist</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis numquam repudiandae nobis
                  voluptates rem eveniet maxime consectetur possimus, atque repellat quia, porro praesentium vel
                  voluptatem quos nihil soluta dolorem eum.
                </p>
                <ul className="socialLink">
                  <li>
                    <a href="#">
                      <img src={tw} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={li} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={yt} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.hpEventList}>
        <h2 className={styles.hpSectionTitle}>Event Hightlights</h2>
        <div className={styles.hpSliders}>slider</div>
      </div>
      <Container>
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
      </Container>
      <div className={styles.footerWrapper}>
        <h2>Terms and Conditions - Privacy Policy</h2>
        <p>
          HDFC Life Insurance Company Limited ("HDFC Life"). CIN: L65110MH2000PLC128245, IRDAI Registration No. 101.<br />
          Registered Office: 13th Floor, Lodha Excelus, Apollo Mills Compound, N.M. Joshi Marg, Mahalaxmi, Mumbai - 400
          011.<br />
          Email: service@hdfclife.com,Tel No: 1860-267-9999. Available (Mon-Sat 10 am to 7 pm) Local charges apply. DO
          NOT prefix any country code e.g. +91 or 00, Website: www.hdfclife.com<br />
          The name/letters "HDFC" in the name/logo of the company belongs to Housing Development Finance Corporation
          Limited ("HDFC Limited") and is used by HDFC Life under an agreement entered into with HDFC Limited.<br />
          ARN: MC/04/22/28457
        </p>
      </div>
    </div>
  );
};

export default NewHomePage;
