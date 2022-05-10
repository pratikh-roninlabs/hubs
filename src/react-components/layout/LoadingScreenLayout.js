import React from "react";
import PropTypes from "prop-types";
import styles from "./LoadingScreenLayout.scss";
import { Column } from "../layout/Column";
// import { ReactComponent as HmcLogo } from "../icons/HmcLogo.svg";
// import configs from "../../utils/configs";
import BBLogo from "../../assets/images/hdfcbb/bouncebackbatch_logo.svg";

export function LoadingScreenLayout({ center, bottom /*, logoSrc*/ }) {
  // const isHmc = configs.feature("show_cloud");
  return (
    <div className={styles.wrapper}>
      <div className="frame">
        <i className="frameTR" />
        <i className="frameBL" />
        <div className={styles.loadingScreenLayout}>
          <Column center padding gap="lg" className={styles.center}>
            <img src={BBLogo} alt="" />
            {center}
          </Column>
          {bottom && (
            <Column center className={styles.bottom}>
              {bottom}
            </Column>
          )}
        </div>
      </div>
    </div>
  );
}

LoadingScreenLayout.propTypes = {
  // logoSrc: PropTypes.string,
  center: PropTypes.node,
  bottom: PropTypes.node
};
