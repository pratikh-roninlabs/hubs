import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Modal } from "../modal/Modal";
// import { Button } from "../input/Button";
import { ReactComponent as ShowIcon } from "../icons/Show.svg";
// import { ReactComponent as SettingsIcon } from "../icons/Settings.svg";
// import { ReactComponent as HmcLogo } from "../icons/HmcLogo.svg";
import styles from "./RoomEntryModal.scss";
// import styleUtils from "../styles/style-utils.scss";
import { useCssBreakpoints } from "react-use-css-breakpoints";
import { Column } from "../layout/Column";
// import { FormattedMessage } from "react-intl";
// import configs from "../../utils/configs";
import BBLogo from "../../assets/images/hdfcbb/metaverse.png";
import { ReactComponent as EnterIcon } from "../icons/enterMeta.svg";
import { ReactComponent as VRIcon } from "../icons/vrdevice.svg";
import CodeOfConduct from "./CodeofConduct";

export function RoomEntryModal({
  // appName,
  // logoSrc,
  className,
  // roomName,
  showJoinRoom,
  onJoinRoom,
  showEnterOnDevice,
  onEnterOnDevice,
  showSpectate,
  onSpectate,
  // showOptions,
  // onOptions,
  ...rest
}) {
  const breakpoint = useCssBreakpoints();
  const [showCC, setShowCC] = useState(false);
  useEffect(() => {
    if (typeof window !== undefined) {
      window.enterRoom = onJoinRoom;
    }
  }, []);
  const gfg_Run = () => {
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    return iOS;
  };
  // const isHmc = configs.feature("show_cloud");
  // {isHmc ? <HmcLogo className="hmc-logo" /> : <img src={logoSrc} alt={appName} />}
  return (
    <Modal className={classNames(styles.roomEntryModal, className)} disableFullscreen {...rest}>
      <Column center className={styles.content}>
        <div className={styles.logoContainer}>
          <img src={BBLogo} />
        </div>
        <div className={styles.roomName}>
          {!gfg_Run() && (
            <p>
              {
                "Welcome to the Virtual Convocation of the BounceBack Batch of 2022! Choose an option from below to enter."
              }
            </p>
          )}
        </div>
        <Column center className={styles.buttons}>
          {!gfg_Run() ? (
            <>
              {showSpectate ? (
                <button className={styles.enterVRBtn} onClick={onSpectate}>
                  <ShowIcon />
                  <span>{"Join with VR Device"}</span>
                </button>
              ) : (
                <>
                  {showJoinRoom && (
                    <button className={styles.enterRoomBtn} onClick={onJoinRoom}>
                      <EnterIcon />
                      <span>{"Enter the Metaverse"}</span>
                    </button>
                  )}
                  {showEnterOnDevice && (
                    <button className={styles.enterVRBtn} onClick={onEnterOnDevice}>
                      <VRIcon />
                      <span>{"Join with VR Device"}</span>
                    </button>
                  )}
                  <a className={styles.howToUse} href="javascript:void(0)" onClick={() => setShowCC(true)}>
                    How to use?
                  </a>
                </>
              )}
            </>
          ) : (
            <div className={styles.roomName}>
              <p>{"Your device is not compatible with this experience. We recommend joining from another device."}</p>
            </div>
          )}
          {/* {showOptions &&
            breakpoint !== "sm" && (
              <>
                <hr className={styleUtils.showLg} />
                <Button preset="transparent" className={styleUtils.showLg} onClick={onOptions}>
                  <SettingsIcon />
                  <span>
                    <FormattedMessage id="room-entry-modal.options-button" defaultMessage="Options" />
                  </span>
                </Button>
              </>
            )} */}
        </Column>
      </Column>
      {showCC && <CodeOfConduct close={() => setShowCC(false)} />}
    </Modal>
  );
}

RoomEntryModal.propTypes = {
  appName: PropTypes.string,
  logoSrc: PropTypes.string,
  className: PropTypes.string,
  roomName: PropTypes.string.isRequired,
  showJoinRoom: PropTypes.bool,
  onJoinRoom: PropTypes.func,
  showEnterOnDevice: PropTypes.bool,
  onEnterOnDevice: PropTypes.func,
  showSpectate: PropTypes.bool,
  onSpectate: PropTypes.func,
  showOptions: PropTypes.bool,
  onOptions: PropTypes.func
};

RoomEntryModal.defaultProps = {
  showJoinRoom: true,
  showEnterOnDevice: true,
  showSpectate: true,
  showOptions: true
};
