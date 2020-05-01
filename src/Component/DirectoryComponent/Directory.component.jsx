import React, { Component } from "react";
import MenuItem from "./../MenuItems/MenuItem.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "./../../Redux/Directory/directory.selectors";
import "./Directory.style.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ ...otherSectionProps }) => (
        <MenuItem {...otherSectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
