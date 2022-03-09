import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import styles from "./poper.module.css";
import TextField from "@mui/material/TextField";

function Poper() {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button
            variant="contained"
            color="warning"
            {...bindTrigger(popupState)}
          >
            Create
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Typography sx={{ p: 2 }}>
              <CreateReportForm />
            </Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

export default Poper;

function CreateReportForm() {
  return (
    <div className={styles.createReport_form}>
      <table>
        <tr>
          <td>
            <TextField id="outlined-basic" label="Name" variant="outlined" />
          </td>
          <td>
            <TextField id="outlined-basic" label="Title" variant="outlined" />
          </td>
        </tr>
      </table>
    </div>
  );
}
