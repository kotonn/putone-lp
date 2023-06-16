import React from 'react';

import {
  Col,
} from "react-bootstrap";
import PropTypes from 'prop-types';

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <img className=" bg-white mb-3" src={data.companylogo} alt="" />
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>

      </div>
    </Col>
  );
}

ExperienceCard.propTypes = {
  data: PropTypes.object.isRequired
}

export default ExperienceCard;