import React, { useState } from "react";
import styles from "./CodeofConduct.scss";
import upArrow from "../../assets/images/hdfcbb/upArrow.png";
import dArrow from "../../assets/images/hdfcbb/downArrow.png";
import { ReactComponent as CloseIcon } from "../icons/Close.svg";

const CodeOfConduct = ({ close }) => {
  const [showS, setShowS] = useState(true);
  return (
    <div className={styles.ccWrapper}>
      <div className={styles.content}>
        <button className={styles.closeBnt} onClick={close}>
          <CloseIcon />
        </button>
        <div className="header">
          <div className={`${showS && "active"}`} onClick={() => setShowS(true)}>
            Support
          </div>
          <div className={`${!showS && "active"}`} onClick={() => setShowS(false)}>
            Code of conduct
          </div>
        </div>
        <div className={styles.data}>
          {showS ? (
            <div className={styles.supportWrapper}>
              <div>
                <label>
                  <input type="radio" name="cc" id="" />
                  <div className="labelTitle">
                    1{" "}
                    <span>
                      <p>Do I need a VR device for the event?</p>
                      <i className="upArrow">
                        <img src={upArrow} alt="" />
                      </i>
                      <i className="dArrow">
                        <img src={dArrow} alt="" />
                      </i>
                    </span>
                  </div>
                  <div className="ddContent">
                    The event is VR compatible but you can also join from your PC, mobile and tablet. If you want to
                    join with a VR device, select “Join with VR Device” on the lobby page.
                  </div>
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="cc" id="" />
                  <div className="labelTitle">
                    2{" "}
                    <span>
                      <p>How can I interact with other participants in the metaverse?</p>
                      <i className="upArrow">
                        <img src={upArrow} alt="" />
                      </i>
                      <i className="dArrow">
                        <img src={dArrow} alt="" />
                      </i>
                    </span>
                  </div>
                  <div className="ddContent">
                    You can interact with others through multiple options - text chat, audio chat and emoticon
                    reactions. Text chat is broadcasted to all participants in the room.
                  </div>
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="cc" id="" />
                  <div className="labelTitle">
                    3{" "}
                    <span>
                      <p>How can I audio chat?</p>
                      <i className="upArrow">
                        <img src={upArrow} alt="" />
                      </i>
                      <i className="dArrow">
                        <img src={dArrow} alt="" />
                      </i>
                    </span>
                  </div>
                  <div className="ddContent">
                    If you have a mic, you can chat with friends. Audio chat works on proximity basis - the closer you
                    are to another user, the better you can hear each other.
                  </div>
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="cc" id="" />
                  <div className="labelTitle">
                    4{" "}
                    <span>
                      <p>How do I report abuse?</p>
                      <i className="upArrow">
                        <img src={upArrow} alt="" />
                      </i>
                      <i className="dArrow">
                        <img src={dArrow} alt="" />
                      </i>
                    </span>
                  </div>
                  <div className="ddContent">
                    In case of any abuse, there is a report button at the top right corner of the screen. By clicking on
                    it, you will be redirected to an external URL where you can fill out a form detailing out your
                    concern and our moderators will take appropriate actions.
                  </div>
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="cc" id="" />
                  <div className="labelTitle">
                    5{" "}
                    <span>
                      <p>How do I go back to the metaverse?</p>
                      <i className="upArrow">
                        <img src={upArrow} alt="" />
                      </i>
                      <i className="dArrow">
                        <img src={dArrow} alt="" />
                      </i>
                    </span>
                  </div>
                  <div className="ddContent">
                    You can always enter the metaverse by visiting www.bounceback2022.com till 24th May end of the day.
                  </div>
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="cc" id="" />
                  <div className="labelTitle">
                    6{" "}
                    <span>
                      <p>Where is the video of the event running within the metaverse?</p>
                      <i className="upArrow">
                        <img src={upArrow} alt="" />
                      </i>
                      <i className="dArrow">
                        <img src={dArrow} alt="" />
                      </i>
                    </span>
                  </div>
                  <div className="ddContent">
                    A gigantic screen is present in the middle of the world, this will be the display point for the
                    event.
                  </div>
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="cc" id="" />
                  <div className="labelTitle">
                    7{" "}
                    <span>
                      <p>How do I download my convocation certificate?</p>
                      <i className="upArrow">
                        <img src={upArrow} alt="" />
                      </i>
                      <i className="dArrow">
                        <img src={dArrow} alt="" />
                      </i>
                    </span>
                  </div>
                  <div className="ddContent">
                    Certificate will be available for download on https://bouncebackbatch.com after the event.
                  </div>
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="cc" id="" />
                  <div className="labelTitle">
                    8{" "}
                    <span>
                      <p>How do I change my avatar? </p>
                      <i className="upArrow">
                        <img src={upArrow} alt="" />
                      </i>
                      <i className="dArrow">
                        <img src={dArrow} alt="" />
                      </i>
                    </span>
                  </div>
                  <div className="ddContent">
                    You can change your avatar by clicking on the “Avatar” button at the bottom.
                  </div>
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="cc" id="" />
                  <div className="labelTitle">
                    9{" "}
                    <span>
                      <p>How can I take selfies?</p>
                      <i className="upArrow">
                        <img src={upArrow} alt="" />
                      </i>
                      <i className="dArrow">
                        <img src={dArrow} alt="" />
                      </i>
                    </span>
                  </div>
                  <div className="ddContent">
                    Avatar selfies can be taken by using the "Selfie" button at the bottom of the screen. Doing so will
                    spawn an in-world camera for you to use.
                  </div>
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="cc" id="" />
                  <div className="labelTitle">
                    10{" "}
                    <span>
                      <p>How can I play basketball?</p>
                      <i className="upArrow">
                        <img src={upArrow} alt="" />
                      </i>
                      <i className="dArrow">
                        <img src={dArrow} alt="" />
                      </i>
                    </span>
                  </div>
                  <div className="ddContent">
                    Basketballs are available on the court. You can interact with them by clicking and dragging them.
                  </div>
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="cc" id="" />
                  <div className="labelTitle">
                    11{" "}
                    <span>
                      <p>How can I text chat?</p>
                      <i className="upArrow">
                        <img src={upArrow} alt="" />
                      </i>
                      <i className="dArrow">
                        <img src={dArrow} alt="" />
                      </i>
                    </span>
                  </div>
                  <div className="ddContent">
                    You can access chat messages by clicking on the “Chat” button at the bottom.
                  </div>
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="cc" id="" />
                  <div className="labelTitle">
                    11{" "}
                    <span>
                      <p>How can I text chat?</p>
                      <i className="upArrow">
                        <img src={upArrow} alt="" />
                      </i>
                      <i className="dArrow">
                        <img src={dArrow} alt="" />
                      </i>
                    </span>
                  </div>
                  <div className="ddContent">
                    You can access chat messages by clicking on the “Chat” button at the bottom.
                  </div>
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="cc" id="" />
                  <div className="labelTitle">
                    12{" "}
                    <span>
                      <p>How can I react through emoticons?</p>
                      <i className="upArrow">
                        <img src={upArrow} alt="" />
                      </i>
                      <i className="dArrow">
                        <img src={dArrow} alt="" />
                      </i>
                    </span>
                  </div>
                  <div className="ddContent">
                    You can use emoticons by clicking on the “React” button at the bottom of the screen.
                  </div>
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="cc" id="" />
                  <div className="labelTitle">
                    13{" "}
                    <span>
                      <p>How can I mute/unmute myself?</p>
                      <i className="upArrow">
                        <img src={upArrow} alt="" />
                      </i>
                      <i className="dArrow">
                        <img src={dArrow} alt="" />
                      </i>
                    </span>
                  </div>
                  <div className="ddContent">The mute/unmute button is present at the bottom of the screen.</div>
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="cc" id="" />
                  <div className="labelTitle">
                    14{" "}
                    <span>
                      <p>I am stuck in the maze, how do I get out?</p>
                      <i className="upArrow">
                        <img src={upArrow} alt="" />
                      </i>
                      <i className="dArrow">
                        <img src={dArrow} alt="" />
                      </i>
                    </span>
                  </div>
                  <div className="ddContent">
                    If you feel like you are completely stuck and cannot get out, you can leave and rejoin the room.
                    Doing so will bring you back to the spawn point.
                  </div>
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="cc" id="" />
                  <div className="labelTitle">
                    15{" "}
                    <span>
                      <p>Where can I see the event after it’s done?</p>
                      <i className="upArrow">
                        <img src={upArrow} alt="" />
                      </i>
                      <i className="dArrow">
                        <img src={dArrow} alt="" />
                      </i>
                    </span>
                  </div>
                  <div className="ddContent">
                    The entire event on Metaverse will be available till 24th May end of the day.
                  </div>
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="cc" id="" />
                  <div className="labelTitle">
                    16{" "}
                    <span>
                      <p>Why is the performance of the metaverse low on my device?</p>
                      <i className="upArrow">
                        <img src={upArrow} alt="" />
                      </i>
                      <i className="dArrow">
                        <img src={dArrow} alt="" />
                      </i>
                    </span>
                  </div>
                  <div className="ddContent">
                    The performance of the metaverse on your device may be affected by various factors like too many
                    applications running in the background. Try closing other unused apps and rejoining the room.
                  </div>
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="cc" id="" />
                  <div className="labelTitle">
                    17{" "}
                    <span>
                      <p>My mic is not working!</p>
                      <i className="upArrow">
                        <img src={upArrow} alt="" />
                      </i>
                      <i className="dArrow">
                        <img src={dArrow} alt="" />
                      </i>
                    </span>
                  </div>
                  <div className="ddContent">
                    Make sure you have enabled the mic while joining the metaverse, you can check by accessing the mic
                    button at the bottom of the screen. <br /> If it seems like it is a software issue, try rejoining
                    the room. If not, try changing devices or make sure any connected audio device is working fine.
                  </div>
                </label>
              </div>
            </div>
          ) : (
            <div className={styles.coc}>
              <div>
                <b>Expected Behavior</b>
                <p>The following behaviors are expected of all users of the metaverse:</p>
              </div>
              <div>
                <b>Be Respectful</b>
                <p>
                  Value each other’s ideas, styles and viewpoints. We may not always agree, but disagreement is no
                  excuse for poor manners. Be respectful in all interactions and communications.
                </p>
              </div>
              <div>
                <b>Appreciate and Accommodate Our Similarities and Differences</b>
                <p>
                  Every user of the metaverse comes from many cultures and backgrounds. Ensure you are polite in all
                  your interactions. Respect people’s right to privacy and confidentiality.
                </p>
              </div>
              <div>
                <b>Lead by Example</b>
                <p>
                  By matching your actions with your words, you become a person others want to follow. Your actions
                  influence others to behave and respond in ways that are valuable and appropriate.
                </p>
              </div>
              <div>
                <b>Behavior That Will Not Be Tolerated</b>
                <p>The following behaviors are considered to be unacceptable under these guidelines.</p>
                <p>
                  Violence and Threats of Violence<br />
                  Violence and threats of violence are not acceptable - online or offline. This includes incitement of
                  violence toward any individual, including encouraging a person to commit self-harm. This also includes
                  posting or threatening to post other people’s personally identifying information (“doxxing”) online.
                </p>
                <p>
                  Personal Attacks<br />Frustration should never turn into a personal attack. It is not okay to insult,
                  demean or belittle others. Attacking someone for their opinions, beliefs and ideas is not acceptable.
                  It is important to speak directly when we disagree and when we think we need to improve, but such
                  discussions must be conducted respectfully and professionally, remaining focused on the issue at hand.
                </p>
                <p>
                  Derogatory Language<br />
                  Hurtful or harmful language is not acceptable.
                </p>
                <p>
                  Disruptive Behavior<br />
                  Sustained disruption of events or talks will not be tolerated. Influencing Unacceptable Behavior We
                  will treat influencing or leading such activities the same way we treat the activities themselves, and
                  thus the same consequences apply.
                </p>
              </div>
              <div>
                <b>Consequences of Unacceptable Behavior</b>
                <p>
                  Anyone being asked to stop unacceptable behavior is expected to comply immediately. Violation of these
                  guidelines can result in anyone being made to leave the event.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeOfConduct;
