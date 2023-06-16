import React from "react";
import Col from "react-bootstrap/Col";
import SkillsBar from "./SkillsBar";
import PropTypes from 'prop-types'; 

function SkillsSection({ skills, isScrolled }) {
  return (
    <>
      {skills.map((skill, index) => (
        <SkillsBar
          key={`${skill}-${index}`}
          skill={skill.name}
          value={skill.value}
          isScrolled={isScrolled}
        />
      ))}
    </>
  );
}

SkillsSection.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    })
  ).isRequired,
  isScrolled: PropTypes.bool.isRequired
}


function SkillsTab({ skills, isScrolled }) {
  return (
    <>
      <Col xs={12} md={6}>
        <SkillsSection
          skills={skills.slice(0, Math.floor(skills.length / 2))}
          isScrolled={isScrolled}
        />
      </Col>
      <Col xs={12} md={6}>
        <SkillsSection
          skills={skills.slice(Math.floor(skills.length / 2), skills.length)}
          isScrolled={isScrolled}
        />
      </Col>
    </>
  );
}

SkillsTab.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    })
  ).isRequired,
  isScrolled: PropTypes.bool.isRequired
}

export default SkillsTab;
