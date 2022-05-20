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
                <p>We are likely to have some discussions about if and when criticism is respectful and when it’s not. We must be able to speak directly when we disagree and when we think we need to improve. We cannot withhold hard truths. Doing so respectfully is hard, doing so when others don’t seem to be listening is harder, and hearing such comments when one is the recipient can be even harder still. We need to be honest and direct, as well as respectful.</p>
            </div>
            <div>
            <b>Be Inclusive</b>
              <p>Seek diverse perspectives. Diversity of views and of people on teams powers innovation, even if it is not always comfortable. Encourage all voices. Help new perspectives be heard and listen actively. If you ﬁnd yourself dominating a discussion, it is especially
              
              important to step back and encourage other voices to join in. Be aware of how much time is taken up by dominant members of the group. Provide alternative ways to contribute or participate when possible.
              Be inclusive of everyone in an interaction, respecting and facilitating people’s participation whether they are:
              <li>	Remote (on video or phone)</li>
              <li>	Not native language speakers</li>
              <li>	Coming from a different culture</li>
              <li>	Using pronouns other than “he” or “she”</li>
              <li>	Living in a different time zone</li>
              <li>	Facing other challenges to participate</li>

              Think about how you might facilitate alternative ways to contribute or participate. If you ﬁnd yourself dominating a discussion, step back. Make way for other voices and listen actively to them.
              </p>
            </div>
            <div>
              <b>Understand Different Perspectives</b>
              <p>Our goal should not be to “win” every disagreement or argument. A more productive goal is to be open to ideas that make our own ideas better. Strive to be an example for inclusive thinking. “Winning” is when different perspectives make our work richer and stronger.</p>
            </div>
            <div>
              <b>Appreciate and Accommodate Our Similarities and Differences</b>
              <p>Every user of the metaverse comes from many cultures and backgrounds. Cultural differences can encompass everything from ofﬁcial religious observances to personal habits to clothing. Be respectful of people with different cultural practices, attitudes and
 
 beliefs. Work to eliminate your own biases, prejudices and discriminatory practices. Think of others’ needs from their point of view. Use preferred titles (including pronouns) and the appropriate tone of voice. Respect people’s right to privacy and conﬁdentiality. Be open to learning from and educating others as well as educating yourself; it is unrealistic to expect everyone to know the cultural practices of every ethnic and cultural group, but everyone needs to recognize one’s native culture is only part of positive interactions.
 </p>
            </div>
            <div>
              <b>Lead by Example</b>
              <p>By matching your actions with your words, you become a person others want to follow. Your actions inﬂuence others to behave and respond in ways that are valuable and appropriate for our organizational outcomes. Design your community and your work for inclusion. Hold yourself and others accountable for inclusive behaviors.
              </p>
            </div>
            <div>
            <b>Behavior That Will Not Be Tolerated</b>
            <p>The following behaviors are considered to be unacceptable under these guidelines.
Violence and Threats of Violence
Violence and threats of violence are not acceptable - online or ofﬂine. This includes incitement of violence toward any individual, including encouraging a person to commit self-harm. This also includes posting or threatening to post other people’s personally identifying information (“doxxing”) online.
</p>
            </div>
            <div>
              <b>Personal Attacks</b>
              <p>Conﬂicts will inevitably arise, but frustration should never turn into a personal attack. It is not okay to insult, demean or belittle others. Attacking someone for their opinions, beliefs and ideas is not
 
acceptable. It is important to speak directly when we disagree and when we think we need to improve, but such discussions must be conducted respectfully and professionally, remaining focused on the issue at hand.
Derogatory Language
Hurtful or harmful language related to:

<li>	Background</li>
<li>	Family status</li>
<li>	Gender</li>
<li>	Gender identity or expression</li>
<li>	Marital status</li>
<li>	Sex</li>
<li>	Sexual orientation</li>
<li>	Native language</li>
<li>	Age</li>
<li>	Ability</li>
<li>	Race and/or ethnicity</li>
<li>	Caste</li>
<li>	National origin</li>
<li>	Socioeconomic status</li>
<li>	Religion</li>
<li>	Geographic location</li>
<li>	Other attributes</li>

is not acceptable. This includes deliberately referring to someone by a gender that they do not identify with, and/or questioning the legitimacy of an individual’s gender identity. If you’re unsure if a word is derogatory, don’t use it. This also includes repeated subtle and/or indirect discrimination; when asked to stop, stop the behavior in question.
</p>
            </div>

            <div>
              <b>Unwelcome Sexual Attention or Physical Contact</b>
              <p>Unwelcome sexual attention or unwelcome physical contact is not acceptable. This includes sexualized comments, jokes or imagery in interactions, communications or presentation materials, as well as inappropriate touching, groping, or sexual advances.
Additionally, touching a person without permission, including sensitive areas such as their hair, pregnant stomach, mobility device (wheelchair, scooter, etc) or tattoos is unacceptable. This includes physically blocking or intimidating another person.
Physical contact or simulated physical contact (such as emojis like “kiss”) without afﬁrmative consent is not acceptable. The sharing or distribution of sexualized images or text is unacceptable.
</p>
            </div>

            <div>
              <b>Disruptive Behavior</b>
              <p>
              Sustained disruption of events, forums, or meetings, including talks and presentations, will not be tolerated. This includes:
<li>	‘Talking over’ or ‘heckling’ speakers.</li>
<li>	Drinking alcohol to excess or using recreational drugs to excess, or pushing others to do so.</li>
<li>	Making derogatory comments about those who abstain from alcohol or other substances, pushing people to drink, talking about their abstinence or preferences to others, or pressuring them to drink - physically or through jeering.</li>
<li>	Otherwise inﬂuencing crowd actions that cause hostility in the session.</li>

              </p>
            </div>

            <div>
              <b>Inﬂuencing Unacceptable Behavior</b>
              <p>We will treat inﬂuencing or leading such activities the same way we treat the activities themselves, and thus the same consequences apply.</p>
            </div>

            <div>
              <b>Consequences of Unacceptable Behavior</b>
              <p>
              Bad behavior from anyone, including those with decision-making authority, will not be tolerated. Intentional efforts to exclude people (except as part of a consequence of the guidelines or other ofﬁcial action) from activities are not acceptable and will be dealt with appropriately.

Reports of harassment/discrimination will be promptly and thoroughly investigated by the people responsible for the safety of the space, event or activity. Appropriate measures will be taken to address the situation.
Anyone being asked to stop unacceptable behavior is expected to comply immediately. Violation of these guidelines can result in anyone being asked to leave an event or online space, either temporarily or for the duration of the event, or being banned from participation in spaces, or future events and activities in perpetuity.

In addition, any participants who abuse the reporting process will be considered to be in violation of these guidelines and subject to the same consequences. False reporting, especially to retaliate or exclude, will not be accepted or tolerated.

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
