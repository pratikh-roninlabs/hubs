import React, { useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import configs from "../../utils/configs";
import { useIntl } from "react-intl";
import { LoadingScreen } from "./LoadingScreen";
import { useRoomLoadingState } from "./useRoomLoadingState";

export function LoadingScreenContainer({ onLoaded, scene }) {
  const intl = useIntl();

  const { loading, message } = useRoomLoadingState(scene);

  useEffect(
    () => {
      if (!loading) {
        onLoaded();
      }
    },
    [loading, onLoaded]
  );

  //TODO: Make these configurable
  const infoMessages = useMemo(
    () => [
      {
        heading: "Tip:",
        message: "On desktop use WASD to navigate & on mobile use pinch to navigate."
      },
      {
        heading: "Tip:",
        message: "Be kind to one another."
      },
      {
        heading: "Tip:",
        message: "The view from the top of the balcony is amazing!"
      },
      {
        heading: "Tip:",
        message: "Read the code of conduct to avoid being banned."
      },
      {
        heading: "Tip:",
        message: "Chat and audio channels are monitored."
      },
      {
        heading: "Tip:",
        message: "Take a seat in front of the screen by holding spacebar."
      }
    ],
    []
  );

  return <LoadingScreen logoSrc={configs.image("logo")} message={message} infoMessages={infoMessages} />;
}

LoadingScreenContainer.propTypes = {
  scene: PropTypes.object.isRequired,
  onLoaded: PropTypes.func.isRequired
};
