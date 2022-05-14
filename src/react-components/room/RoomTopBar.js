import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import styles from "./RoomTopBar.scss";

const RoomTopBar = ({ sidebarActive }) => {
  return <div className={classNames(styles.topBar, { sidebar: sidebarActive })}>{"Top Bar"}</div>;
};
RoomTopBar.propTypes = {
  sidebarActive: PropTypes.bool
};
export default RoomTopBar;
