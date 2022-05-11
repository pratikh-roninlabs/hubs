import React from "react";
import CustomRoomBtn from "./CustomRoomBtn";
import { ReactComponent as Icon } from "../icons/newChat.svg";

const NewChatBtn = props => {
  return <CustomRoomBtn {...props} label={"Chat"} icon={<Icon />} />;
};

export default NewChatBtn;
