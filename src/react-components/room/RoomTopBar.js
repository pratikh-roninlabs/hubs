import classNames from "classnames";
import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./RoomTopBar.scss";
import HDFCLogo from "../../assets/images/hdfcbb/bouncebackbatch_logo.svg";
import { ReactComponent as QNBtn } from "../icons/qnMark.svg";
import { ReactComponent as Report } from "../icons/reportBtn.svg";
import { ReactComponent as Leave } from "../icons/leaveBtn.svg";
import CodeOfConduct from "./CodeofConduct";

const RoomTopBar = ({ sidebarActive, leaveRoom }) => {
  const [show, setShow] = useState(false);
  return (
    <div className={classNames(styles.topBar, { sidebar: sidebarActive })}>
      <img src={HDFCLogo} alt="" />
      <div className={styles.btns}>
        <button onClick={() => setShow(true)}>
          <QNBtn />
        </button>
        <button onClick={() => window.open("https://4oawdoy7t47.typeform.com/to/C7d1IPWA", "_blank")}>
          <Report />
        </button>
        <button onClick={() => leaveRoom()}>
          <Leave />
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
