import React from "react";
import PropTypes from "prop-types";
import { Button, AcceptButton } from "../input/Button";
import styles from "./AvatarSettingsContent.scss";
import { TextInputField } from "../input/TextInputField";
import { Column } from "../layout/Column";
import { FormattedMessage } from "react-intl";

export function AvatarSettingsContent({
  displayName,
  displayNameInputRef,
  disableDisplayNameInput,
  onChangeDisplayName,
  avatarPreview,
  displayNamePattern,
  onChangeAvatar,
  isProfane,
  ...rest
}) {
  return (
    <Column as="form" className={styles.content} {...rest}>
      <TextInputField
        disabled={disableDisplayNameInput}
        label={<FormattedMessage id="avatar-settings-content.display-name-label" defaultMessage="Display Name" />}
        value={displayName}
        pattern={displayNamePattern}
        spellCheck="false"
        required
        onChange={onChangeDisplayName}
        description={"Choose a nickname that your friends can identify you with."}
        ref={displayNameInputRef}
        className={`textfield ${styles.textfield}`}
      />
      {isProfane && (
        <span style={{ color: "#ed1c24", fontSize: "13px", marginTop: "-10px" }}>
          Sorry, but it looks like your screen name is rude or offensive. Please try again
        </span>
      )}
      <div className={styles.avatarPreviewContainer}>
        {avatarPreview || <div />}
        <button type="button" preset="basic" className={styles.changeBtn} onClick={onChangeAvatar}>
          <FormattedMessage id="avatar-settings-content.change-avatar-button" defaultMessage="Change Avatar" />
        </button>
      </div>
      <button className={styles.acceptBtn} type="submit">
        {"CONFIRM"}
      </button>
    </Column>
  );
}

AvatarSettingsContent.propTypes = {
  className: PropTypes.string,
  displayName: PropTypes.string,
  displayNameInputRef: PropTypes.func,
  disableDisplayNameInput: PropTypes.bool,
  displayNamePattern: PropTypes.string,
  onChangeDisplayName: PropTypes.func,
  avatarPreview: PropTypes.node,
  onChangeAvatar: PropTypes.func,
  isProfane: PropTypes.bool
};
