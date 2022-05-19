import React from "react";
import PropTypes from "prop-types";
import { LoadingScreenLayout } from "../layout/LoadingScreenLayout";
import { Spinner } from "../misc/Spinner";
import { useRandomMessageTransition } from "./useRandomMessageTransition";
export function LoadingScreen({ logoSrc, message, infoMessages }) {
  const infoMessage = useRandomMessageTransition(infoMessages);
  return (
    <LoadingScreenLayout
      logoSrc={logoSrc}
      center={
        <>
          <Spinner />
          <p style={{ color: "#707070" }}>Loading</p>
        </>
      }
      bottom={
        <>
          <h3 style={{ color: "#707070" }}>{"TIP:"}</h3>
          <p style={{ color: "#707070" }}>{"Press the WASD keys to move around"}</p>
        </>
      }
    />
  );
}

LoadingScreen.propTypes = {
  logoSrc: PropTypes.string,
  message: PropTypes.node,
  infoMessages: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.node.isRequired,
      message: PropTypes.node.isRequired
    })
  )
};

LoadingScreen.defaultProps = {
  infoMessages: []
};
