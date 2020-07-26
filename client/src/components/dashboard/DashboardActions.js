import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const DashboardActions = () => {
  return (
    <Fragment>
      <div class="dash-buttons">
        <Link to="/edit-profile" class="btn">
          <div class="fas fa-user-circle text-primary"></div>
          Edit Profile
        </Link>
        <Link to="/add-experience" class="btn">
          <div class="fab fa-black-tie text-primary"></div>
          Add experience
        </Link>
        <Link to="/add-education" class="btn">
          <div class="fas fa-graduation-cap text-primary"></div>
          Add education
        </Link>
      </div>
    </Fragment>
  );
};

export default DashboardActions;
