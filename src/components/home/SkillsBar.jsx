import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import PropTypes from 'prop-types';

function SkillsBar({ skill, value, isScrolled }) {
  return (
    <div style={{ width: "95%" }}>
      <p className="lead mb-1 mt-2">{skill}</p>
      <ProgressBar
        className={!isScrolled ? "progress" : " progress-bar-animation"}
        now={value}
      />
    </div>
  );
}

SkillsBar.propTypes = {
  skill: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  isScrolled: PropTypes.bool.isRequired
}

export default SkillsBar;
