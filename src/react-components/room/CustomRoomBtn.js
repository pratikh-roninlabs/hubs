import React from "react";
import styles from "./CustomRoomBtn.scss";
const CustomRoomBtn = ({ onClickFn, icon, label }) => {
  return (
    <div>
      <button className={styles.avatarBtn} onClick={onClickFn}>
        {icon}
        <label>{label}</label>
      </button>
    </div>
  );
};

export default CustomRoomBtn;
