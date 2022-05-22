/* eslint-disable @calm/react-intl/missing-formatted-message */
/* eslint-disable react/display-name */
import React from "react";
import styles from "./roomSelector.scss";
import { ReactComponent as CloseIcon } from "../icons/Close.svg";
// import joinConvocation from "../../assets/images/hdfcbb/joinConvocation.png";

const RoomSelector = ({ rooms, close }) => {
  const sortedRooms =
    [...rooms]?.sort((a, b) => a.lobby_count + a.member_count - (b.lobby_count + b.member_count)) || [];
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.roomsWrapper}>
        <button className={styles.closeBnt} onClick={close}>
          <CloseIcon />
        </button>
        {/* <img className={styles.logoCon} src={joinConvocation} /> */}
        <h2>Join Convocation Rooms</h2>
        <p>We’ve created different convocation rooms to help you find your friends easily. Choose any one to enter.</p>
        <div className={styles.roomsList}>
          {sortedRooms?.slice(0, 5).map((room, i) => (
            <div className={styles.roomsData} key={room.id}>
              <span>Gate {i + 1}</span>
              <div className="imgWrapper">
                <div className="img">
                  <img src={room.images.preview.url} alt="" />
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{room.lobby_count + room.member_count}</span>
                </div>
              </div>

              <a
                href={room.url}
                className={`enterBtn ${room.lobby_count + room.member_count >= room.room_size ? "disable" : ""}`}
              >
                Enter
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomSelector;
