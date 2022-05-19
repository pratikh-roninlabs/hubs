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
                      <p>Will I be notified when the event starts?</p>
                      <i className="upArrow">
                        <img src={upArrow} alt="" />
                      </i>
                      <i className="dArrow">
                        <img src={dArrow} alt="" />
                      </i>
                    </span>
                  </div>
                  <div className="ddContent">
                    Not by default, but there will be countdown timers and notification posts on all social media
                    handles of HDFC. You can be notified by subscribing to the updates.
                  </div>
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="cc" id="" />
                  <div className="labelTitle">
                    2{" "}
                    <span>
                      <p>How can I join the event when it starts?</p>
                      <i className="upArrow">
                        <img src={upArrow} alt="" />
                      </i>
                      <i className="dArrow">
                        <img src={dArrow} alt="" />
                      </i>
                    </span>
                  </div>
                  <div className="ddContent">
                    You can join the metaverse through a link shared with you by your school or you can visit
                    <a href="https://www.bouncebackbatch2022.com">www.bouncebackbatch2022.com</a> and choose a public
                    room.
                  </div>
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="cc" id="" />
                  <div className="labelTitle">
                    3{" "}
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
                    4{" "}
                    <span>
                      <p>How do I change my avatar?</p>
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
                    5{" "}
                    <span>
                      <p>. How can I take selfies?</p>
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
                    spawn in an in-world camera for you to use.
                  </div>
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="cc" id="" />
                  <div className="labelTitle">
                    6{" "}
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
                    7{" "}
                    <span>
                      <p>How can I interact with others in the metaverse?</p>
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
                    reactions.
                  </div>
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="cc" id="" />
                  <div className="labelTitle">
                    8{" "}
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
                    9{" "}
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
                    are to another user, the better you can hear each other. Audio chat will be available only after
                    5:00 PM.
                  </div>
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="cc" id="" />
                  <div className="labelTitle">
                    10{" "}
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
                    11{" "}
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
                  <div className="ddContent">The Mute/Unmute button is present at the bottom of the screen.</div>
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
                  excuse for poor manners. Be open to different possibilities and to being wrong. Be respectful in all
                  interactions and communications, especially when debating the merits of different options. Be aware of
                  your impact and how intense interactions may be affecting people. Be direct, constructive and
                  positive. Take responsibility for your impact and your mistakes – if someone says they have been
                  harmed through your words or actions, listen carefully, apologize sincerely, and correct the behavior
                  going forward.
                </p>
              </div>
              <div>
                <b>Be Direct but Professional</b>
                <p>
                  We are likely to have some discussions about if and when criticism is respectful and when it’s not. We
                  must be able to speak directly when we disagree and when we think we need to improve. We cannot
                  withhold hard truths. Doing so respectfully is hard, doing so when others don’t seem to be listening
                  is harder, and hearing such comments when one is the recipient can be even harder still. We need to be
                  honest and direct, as well as respectful.
                </p>
              </div>
              <div>
                <b>Be Inclusive</b>
                <p>
                  Seek diverse perspectives. Diversity of views and of people on teams powers innovation, even if it is
                  not always comfortable. Encourage all voices. Help new perspectives be heard and listen actively. If
                  you find yourself dominating a discussion, it is especially important to step back and encourage other
                  voices to join in. Be aware of how much time is taken up by dominant members of the group. Provide
                  alternative ways to contribute or participate when possible.
                </p>
              </div>
              <div>
                <b>Expected Behavior</b>
                <p>The following behaviors are expected of all users of the metaverse:</p>
              </div>
              <div>
                <b>Expected Behavior</b>
                <p>The following behaviors are expected of all users of the metaverse:</p>
              </div>
              <div>
                <b>Expected Behavior</b>
                <p>The following behaviors are expected of all users of the metaverse:</p>
              </div>
              <div>
                <b>Expected Behavior</b>
                <p>The following behaviors are expected of all users of the metaverse:</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeOfConduct;
