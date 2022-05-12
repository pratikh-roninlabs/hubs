import React from "react";
import styles from "./CustomRoomBtn.scss";
const CustomRoomBtn = ({ onClick, icon, label }) => {
  return (
    <div>
      <button className={styles.avatarBtn} onClick={onClick}>
        {icon}
        <label>{label}</label>
      </button>
    </div>
  );
};

export default CustomRoomBtn;
