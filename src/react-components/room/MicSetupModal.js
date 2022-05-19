import React, { useEffect }from "react";
import PropTypes from "prop-types";
import { Modal } from "../modal/Modal";
import { Button } from "../input/Button";
import { ReactComponent as MicrophoneIcon } from "../icons/Microphone.svg";
import { ReactComponent as MicrophoneMutedIcon } from "../icons/MicrophoneMuted.svg";
import { ReactComponent as VolumeOffIcon } from "../icons/VolumeOff.svg";
import { ReactComponent as InfoIcon } from "../icons/Info.svg";
import styles from "./MicSetupModal.scss";
import { BackButton } from "../input/BackButton";
import { SelectInputField } from "../input/SelectInputField";
import { ToggleInput } from "../input/ToggleInput";
import { Column } from "../layout/Column";
import { FormattedMessage } from "react-intl";
import { LevelBar } from "../misc/LevelBar";
import { Popover } from "../popover/Popover";
import { PermissionStatus } from "../../utils/media-devices-utils";
import { Spinner } from "../misc/Spinner";

export function MicSetupModal({
  className,
  selectedMicrophone,
  microphoneOptions,
  onChangeMicrophone,
  selectedSpeaker,
  speakerOptions,
  onChangeSpeaker,
  isMicrophoneEnabled,
  micLevel,
  speakerLevel,
  onPlaySound,
  isMicrophoneMuted,
  onChangeMicrophoneMuted,
  onEnterRoom,
  onBack,
  permissionStatus,
  ...rest
}) {
  const iconStyle = isMicrophoneEnabled ? styles.iconEnabled : styles.iconDisabled;

  // useEffect(() => {
  //   console.log("Behavior before the component is added to the DOM");
  //   let hrs = new Date().getHours() + 5 + 30/60
  //   // if(hrs > 16 && hrs < 17)
  //   if(true)
  //   {

  //     if(!isMicrophoneMuted)
  //       onChangeMicrophoneMuted();

  //     onEnterRoom();
  //   }
  // }, []); // Mark [] here.

  return (
    <Modal
      title={<FormattedMessage id="mic-setup-modal.title" defaultMessage="Microphone Setup" />}
      beforeTitle={<BackButton onClick={onBack} />}
      className={className}
      {...rest}
    >
      <Column center padding grow className={styles.content}>
        <p style={{ color: "#000" }}>
          <FormattedMessage
            id="mic-setup-modal.check-mic"
            defaultMessage="Check your microphone and audio before entering."
          />
        </p>
        <div className={styles.audioCheckContainer}>
          <div className={styles.audioIoContainer}>
            <div className={styles.iconContainer}>
              <div>
                {permissionStatus === PermissionStatus.PROMPT && (
                  <div className={styles.spinnerContainer}>
                    <Spinner />
                  </div>
                )}
                {permissionStatus === PermissionStatus.GRANTED && isMicrophoneEnabled && !isMicrophoneMuted ? (
                  <MicrophoneIcon className={iconStyle} />
                ) : (
                  <MicrophoneMutedIcon className={iconStyle} />
                )}
              </div>
              {permissionStatus === PermissionStatus.GRANTED && (
                <LevelBar
                  className={styles.levelBar}
                  level={!isMicrophoneEnabled || isMicrophoneMuted ? 0 : micLevel}
                />
              )}
            </div>
            <div className={styles.actionContainer}>
              {permissionStatus === PermissionStatus.GRANTED && isMicrophoneEnabled ? (
                <>
                  <ToggleInput
                    label={<FormattedMessage id="mic-setup-modal.mute-mic-toggle-v2" defaultMessage="Mute" />}
                    checked={isMicrophoneMuted}
                    onChange={onChangeMicrophoneMuted}
                  />
                  <Popover
                    title="Info"
                    content={
                      <Column className={styles.popoverContent}>
                        <FormattedMessage
                          id="mic-setup-modal.mute-mic-info"
                          defaultMessage="You can mute anytime after you enter the room"
                        />
                      </Column>
                    }
                    placement="top"
                    showHeader={false}
                    disableFullscreen
                    popoverClass={styles.popover}
                    arrowClass={styles.popoverArrow}
                  >
                    {({ openPopover, closePopover, triggerRef }) => (
                      <div ref={triggerRef}>
                        <InfoIcon className={styles.infoIcon} onMouseEnter={openPopover} onMouseLeave={closePopover} />
                      </div>
                    )}
                  </Popover>
                </>
              ) : (
                (permissionStatus === PermissionStatus.PROMPT && (
                  <p style={{ color: "#000" }}>
                    <FormattedMessage
                      id="mic-setup-modal.mic-permission-prompt"
                      defaultMessage="Requesting access to your microphone..."
                    />
                  </p>
                )) ||
                (permissionStatus === PermissionStatus.DENIED && (
                  <p style={{ color: "#000" }}>
                    <span className={styles.errorTitle}>
                      <FormattedMessage
                        id="mic-setup-modal.error-title"
                        defaultMessage="Microphone access was blocked."
                        className={styles.errorTitle}
                      />
                    </span>{" "}
                    <FormattedMessage
                      id="mic-setup-modal.error-description"
                      defaultMessage="To talk in Hubs you will need to allow microphone access."
                    />
                  </p>
                ))
              )}
            </div>
            {permissionStatus === PermissionStatus.GRANTED &&
              isMicrophoneEnabled &&
              microphoneOptions?.length > 0 && (
                <div className={styles.selectionContainer}>
                  <p style={{ alignSelf: "start", color: "#000" }}>
                    <FormattedMessage id="mic-setup-modal.microphone-text" defaultMessage="Microphone" />
                  </p>
                  <SelectInputField
                    className={styles.selectionInput}
                    buttonClassName={styles.selectionInput}
                    value={selectedMicrophone}
                    options={microphoneOptions}
                    onChange={onChangeMicrophone}
                  />
                </div>
              )}
          </div>
          <div className={styles.audioIoContainer}>
            <div className={styles.iconContainer}>
              <VolumeOffIcon className={styles.iconEnabled} style={{ marginRight: "5px" }} />
              <LevelBar className={styles.levelBar} level={speakerLevel} />
            </div>
            <div className={styles.actionContainer}>
              <button className={styles.testAudioBtn} preset="basic" onClick={onPlaySound} sm>
                <FormattedMessage id="mic-setup-modal.test-audio-button" defaultMessage="Test Audio" />
              </button>
            </div>
            {permissionStatus === PermissionStatus.GRANTED &&
              speakerOptions?.length > 0 && (
                <div className={styles.selectionContainer}>
                  <p style={{ alignSelf: "start", color: "#000" }}>
                    <FormattedMessage id="mic-setup-modal.speakers-text" defaultMessage="Speakers" />
                  </p>
                  <SelectInputField
                    value={selectedSpeaker}
                    options={speakerOptions}
                    onChange={onChangeSpeaker}
                    className={styles.selectionInput}
                    buttonClassName={styles.selectionInput}
                  />
                </div>
              )}
          </div>
        </div>
        <button className={styles.enterBtn} preset="primary" onClick={onEnterRoom}>
          <FormattedMessage id="mic-setup-modal.enter-room-button" defaultMessage="Enter Room" />
        </button>
      </Column>
    </Modal>
  );
}

MicSetupModal.propTypes = {
  className: PropTypes.string,
  onPlaySound: PropTypes.func,
  micLevel: PropTypes.number,
  speakerLevel: PropTypes.number,
  isMicrophoneEnabled: PropTypes.bool,
  isMicrophoneMuted: PropTypes.bool,
  onChangeMicrophoneMuted: PropTypes.func,
  selectedMicrophone: PropTypes.string,
  microphoneOptions: PropTypes.array,
  onChangeMicrophone: PropTypes.func,
  selectedSpeaker: PropTypes.string,
  speakerOptions: PropTypes.array,
  onChangeSpeaker: PropTypes.func,
  onEnterRoom: PropTypes.func,
  onBack: PropTypes.func,
  permissionStatus: PropTypes.string
};

MicSetupModal.defaultProps = {
  micLevel: 0,
  speakerLevel: 0,
  permissionStatus: PermissionStatus.PROMPT
};
