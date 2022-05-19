/* eslint-disable @calm/react-intl/missing-formatted-message */
/* eslint-disable react/display-name */
import React from "react";
import styles from "./termsSection.scss";
import { ReactComponent as CloseIcon } from "../icons/Close.svg";

const TermsSection = ({ close }) => {
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.roomsWrapper}>
        <button className={styles.closeBnt} onClick={close}>
          <CloseIcon />
        </button>
        <div className={styles.modalHeading}>Terms & Conditions</div>
        <div className={styles.termsData}>
          <ul>
            <li>
              The BounceBack Batch of 2022 Convocation event (“Event”) is open only to Indian citizens, residing in
              India. If you are not a citizen or are trying to access the Event from any system out of India you shall
              not be allowed to participate in the Event .
            </li>
            <li>
              Participation in the Event is voluntary and participants should ensure the accuracy of the information
              provided by them at the time of entering the Event
            </li>
            <li>All participants below the age of 18 should take parental consent before participating in the event</li>
            <li>
              Participation in this Event is free of cost and HDFC Life Insurance Company Limited (“HDFC Life”)
              does/shall not charge any fee for the same.
            </li>
            <li>
              HDFC Life shall not provide or distribute monetary benefit of any kind in connection with this Event.
            </li>
            <li>
              Participants shall not post any profanity or abusive comments on their respective Website’s Activity page/
              Event page /Social Media or website. Participants failing to adhere to the aforesaid shall be immediately
              banned from the event and HDFC Life reserves its rights, in addition to removing such post, to take a
              legal action against such Participant.
            </li>
            <li>
              The views and opinions expressed in this Event are those of the speakers and do not reflect the views or
              positions of HDFC Life.
            </li>
            <li>
              Under no circumstance shall HDFC Life and/or their directors, employees, officers, affiliates, agencies,
              partners or subsidiaries, be liable to the any Participant or third party for any losses arising from the
              participation in the Event.
            </li>
            <li>
              HDFC Life has the right to amend (add, delete or modify) the Terms and Condition governing the Event at
              their discretion without prior notice.
            </li>
            <li>
              HDFC Life reserves the right to withdraw or discontinue and/or terminate the Event at any stage without
              prior notice and any liability whatsoever.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsSection;
