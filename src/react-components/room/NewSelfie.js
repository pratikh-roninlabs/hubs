import React from "react";
import CustomRoomBtn from "./CustomRoomBtn";
import { ReactComponent as Icon } from "../icons/newCamera.svg";

const NewSelfie = props => {
  return <CustomRoomBtn {...props} label={"Selfie"} icon={<Icon />} />;
};

export default NewSelfie;
