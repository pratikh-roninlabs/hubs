import classNames from "classnames";
import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./RoomTopBar.scss";
import HDFCLogo from "../../assets/images/hdfcbb/bouncebackbatch_logo.svg";
// import { ReactComponent as QNBtn } from "../icons/qnMark.svg";
// import { ReactComponent as Report } from "../icons/reportBtn.svg";
// import { ReactComponent as Leave } from "../icons/leaveBtn.svg";
import { ReactComponent as QNDK } from "../icons/supportDK.svg";
import { ReactComponent as QNMB } from "../icons/supportMB.svg";
import { ReactComponent as RPRTDK } from "../icons/reportDK.svg";
import { ReactComponent as RPRTMB } from "../icons/reportMB.svg";
import { ReactComponent as LeaveDK } from "../icons/leaveDK.svg";
import { ReactComponent as LeaveMB } from "../icons/leaveMB.svg";
import CodeOfConduct from "./CodeofConduct";

const RoomTopBar = ({ sidebarActive, leaveRoom }) => {
  const [show, setShow] = useState(false);
  return (
    <div className={classNames(styles.topBar, { sidebar: sidebarActive })}>
      <img src={HDFCLogo} alt="" />
      <div className={styles.btns}>
        <button onClick={() => setShow(true)}>
          <QNDK className="desktop" />
          <QNMB className="mobile" />
        </button>
        <button onClick={() => window.open("https://4oawdoy7t47.typeform.com/to/C7d1IPWA", "_blank")}>
          <RPRTDK className="desktop" />
          <RPRTMB className="mobile" />
        </button>
        <button onClick={() => leaveRoom()}>
          <LeaveDK className="desktop" />
          <LeaveMB className="mobile" />
        </button>
      </div>
      {show && <CodeOfConduct close={() => setShow(false)} />}
    </div>
  );
};
RoomTopBar.propTypes = {
  sidebarActive: PropTypes.bool,
  leaveRoom: PropTypes.any
};
export default RoomTopBar;
