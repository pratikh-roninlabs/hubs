import React from "react";
import { ReactComponent as Icon } from "../icons/avatarSelector.svg";
import CustomRoomBtn from "./CustomRoomBtn";

const NewAvatarSelectBtn = props => {
  return <CustomRoomBtn {...props} label={"Avatar"} icon={<Icon />} />;
};

export default NewAvatarSelectBtn;
