import React, { useEffect, useState } from "react";
import "./App.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Input, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import CircleIcon from "@mui/icons-material/Circle";

function SelectEmployee() {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);
  const [searchKey, setSearchKey] = useState("");
  const [checked, setChecked] = useState(false);
  let title = [
    { id: 1, name: "name1", selected: false },
    { id: 2, name: "name2", selected: false },
  ];

  let setSelected = (Id) => {
    title.map((obj) => {
      if (obj.id === Id && obj.selected === false) {
        obj.selected = true;
      } else if (obj.id === Id && obj.selected === true) {
        obj.selected = false;
      }
    });
  };
  let allPartitionsers = (e) => {
    setChecked(e.target.checked);
    title.map((obj) => {
      if (checked === true) {
        obj.selected = true;
      } else {
        obj.selected = false;
      }
    });
  };
  let totalUsers = title.length;

  return (
    <div>
      <h3>Select employee</h3>
      <div className="" tabIndex={0} role="button">
        <div style={{ maxWidth: "400px", minWidth: "300px" }}>
          <button
            onKeyPress={() => toggle(!open)}
            onClick={() => toggle(!open)}
            className="drop_down"
          >
            <div style={{ display: "flex" }}>
              <Typography variant="body2" className="select">
                {!open ? "Select employee" : "All practitioners"}
              </Typography>
              <span style={{ marginLeft: "auto" }} align="end">
                {open ? (
                  <KeyboardArrowUpIcon
                    fontSize="small"
                    style={{ color: "#677e89" }}
                  />
                ) : (
                  <KeyboardArrowDownIcon
                    fontSize="small"
                    style={{ color: "#677e89" }}
                  />
                )}
              </span>
            </div>
          </button>
          <div className="show_emp">
            {open && (
              <div>
                <Paper
                  elevation={0}
                  onChange={(e) => setSearchKey(e.target.value)}
                  sx={{
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    visability: "visible",
                    borderStyle: "outset",
                    borderColor: "skyblue",
                    borderRadius: "10px",
                    opacity: "0.7",
                    borderSize: "1px",
                    backgroundColor: "#244a9b",
                  }}
                >
                  <IconButton aria-label="search">
                    <SearchIcon sx={{ color: "white" }} />
                  </IconButton>
                  <InputBase
                    value={searchKey}
                    sx={{ color: "white" }}
                    placeholder="Search employee"
                    inputProps={{ "aria-label": "id no." }}
                  />
                  {searchKey && (
                    <Typography
                      onClick={() => setSearchKey("")}
                      sx={{
                        marginLeft: "auto",
                        marginRight: "5px",
                        color: "white",
                      }}
                    >
                      clear
                    </Typography>
                  )}
                </Paper>
              </div>
            )}
            {open&&
            <div
                  style={{ display: "flex" }}
                >
                  <Paper
                    sx={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      backgroundColor: "#525150",
                      marginLeft:'5px',
                      marginTop:'5px'
                    }}
                    align="center"
                  >
                    <Typography
                      variant="body"
                      sx={{ fontSize: "20px", color: "white" }}
                    >
                      {totalUsers}
                    </Typography>
                  </Paper>
                  <Typography marginLeft="30px" color='whitesmoke' marginTop='5px'>All Users</Typography>
                </div>
                }
            {open && (
              <div className="list_items">
                
                <Typography color="white" ml>
                  All practitioners
                </Typography>
                <input
                  type="checkbox"
                  checked={checked}
                  onClick={(e) => allPartitionsers(e)}
                  style={{ width: "17px", height: "17px", marginLeft: "auto" }}
                />
              </div>
            )}
            {open &&
              title
                .filter((obj) => {
                  if (searchKey == undefined) {
                    return obj;
                  } else if (
                    obj.name.toLowerCase().includes(searchKey.toLowerCase())
                  ) {
                    return obj;
                  } else {
                    return;
                  }
                })
                .map((obj) => (
                  <div>
                    <li key={obj.id} style={{ listStyleType: "none" }}>
                      <div className="list_items">
                        <AccountCircleIcon />

                        <Typography sx={{ color: "white", padding: "8px" }}>
                          {obj ? obj.name : "NO data found"}
                        </Typography>
                        <input
                          onClick={() => setSelected(obj.id)}
                          type="checkbox"
                          value={obj.selected}
                          style={{
                            width: "17px",
                            height: "17px",
                            marginLeft: "auto",
                            
                          }}
                        />
                      </div>
                    </li>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectEmployee;
