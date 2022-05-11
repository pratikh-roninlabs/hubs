import React from "react";
import CustomRoomBtn from "./CustomRoomBtn";
import { ReactComponent as Icon } from "../icons/newReact.svg";

const NewReactBtn = props => {
  return <CustomRoomBtn {...props} label={"React"} icon={<Icon />} />;
};

export default NewReactBtn;
