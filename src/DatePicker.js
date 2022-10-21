import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./calender.css";
import { TextField, Typography } from "@mui/material";

function DatePicker() {
  return (
    <div>
      <h3>Date picker</h3>
      <input
        type="date"
        style={{
          
          width: "360px",
          background: "#d0f1ff",
          borderRadius: "15px",
          height: "50px",
          border:'none',
          padding:'0 15px'
        }}
      />
    </div>
  );
}

export default DatePicker;
