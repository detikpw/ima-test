import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { FileText, LifeBouy, Message, Users, Video, Cart } from "./icons";

const sideNav = ({ isSeen }) => (
  <aside className="lg:block w-max h-0 ml-auto top-9 lg:top-1/4 z-20 sticky">
    <div
      className={cx(
        "lg:right-0 rounded-l-lg shadow-md bg-white transition-all absolute lg:block",
        { "right-0": isSeen, "-right-16": !isSeen }
      )}
    >
      <div className="p-4 border-b-2">
        <Message />
      </div>
      <div className="p-4 border-b-2">
        <LifeBouy />
      </div>
      <div className="p-4 border-b-2">
        <FileText />
      </div>
      <div className="p-4 border-b-2">
        <Video />
      </div>
      <div className="p-4 border-b-2">
        <Users />
      </div>
      <div className="p-4">
        <Cart />
      </div>
    </div>
  </aside>
);

sideNav.propTypes = {
  isSeen: PropTypes.bool,
};

export default sideNav;
