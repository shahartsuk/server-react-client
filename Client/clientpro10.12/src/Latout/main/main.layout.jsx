import React from "react";

import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from '@mui/icons-material/School';

import "./PageContainer.css";

export const PagesContainer = (props) => {
  return (
    <div className="container">
        <>
          <Link className="links" to="/home">
            <HomeIcon fontSize="large" className="icons" />
            <div className="section-name">Home</div>
          </Link>
          </>
          <>
          <Link className="links" to="/api/students">
            <SchoolIcon fontSize="large" className="icons"></SchoolIcon>
            <div className="section-name">Add Student</div>
          </Link>
          <Link to="/"></Link>
          </>
    </div>
  );
};
