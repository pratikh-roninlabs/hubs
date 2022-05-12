import React from "react";
import PropTypes from "prop-types";
import { ImageGridPopover } from "../popover/ImageGridPopover";
import { Popover } from "../popover/Popover";
// import { ToolbarButton } from "../input/ToolbarButton";
// import { ReactComponent as ReactionIcon } from "../icons/Reaction.svg";
import { defineMessage, useIntl } from "react-intl";
import NewReactBtn from "./NewReactBtn";

const reactionPopoverTitle = defineMessage({
  id: "reaction-popover.title",
  defaultMessage: "React"
});

export function ReactionPopoverButton({ items }) {
  const intl = useIntl();
  const title = intl.formatMessage(reactionPopoverTitle);

  return (
    <Popover
      title={title}
      content={props => <ImageGridPopover items={items} {...props} />}
      placement="top"
      offsetDistance={28}
    >
      {/* <NewReactBtn onClick={togglePopover} /> */}
      {({ togglePopover /* , popoverVisible, triggerRef */ }) => <NewReactBtn onClick={togglePopover} />}
    </Popover>
  );
}

ReactionPopoverButton.propTypes = {
  items: PropTypes.array.isRequired
};
