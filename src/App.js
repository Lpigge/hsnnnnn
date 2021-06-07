import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";

const options = ["High", "Medium", "Low"];
const modeoptions = ["Cool", "Warm"];

export default function SwitchLabels() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true
  });

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch"
      }
    }
  }));

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const anchorRef = React.useRef(null);
  const anchorRef1 = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [selectedIndex1, setSelectedIndex1] = React.useState(1);

  const handleClickSpeed = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleClickMode = () => {
    console.info(`You clicked ${modeoptions[selectedIndex1]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleMenuItemClick1 = (event1, index1) => {
    setSelectedIndex1(index1);
    setOpen1(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleToggle1 = () => {
    setOpen1((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleClose1 = (event1) => {
    if (anchorRef1.current && anchorRef1.current.contains(event1.target)) {
      return;
    }

    setOpen1(false);
  };

  const classes = useStyles();

  return (
    <Box>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
            />
          }
          label="off/on"
        />
      </FormGroup>

      <div className={classes.root}>
        <Button variant="contained" color="secondary">
          EXIT
        </Button>
      </div>

      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="filled-basic" label="RoomID" variant="filled" />
        <TextField id="filled-basic" label="State" variant="filled" />
        <TextField id="filled-basic" label="RoomTemp" variant="filled" />
        <TextField id="filled-basic" label="TargetTemp" variant="filled" />
      </form>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="filled-basic" label="CurrentSpeed" variant="filled" />
        <TextField id="filled-basic" label="CurrentMode" variant="filled" />
        <TextField id="filled-basic" label="Fee" variant="filled" />
        <TextField id="filled-basic" label="TotalFee" variant="filled" />
      </form>

      <div className={classes.root}>
        <Button variant="contained" color="secondary">
          UP
        </Button>
        <Button variant="contained" color="secondary">
          Down
        </Button>
      </div>

      <Grid container direction="row" alignItems="center">
        <Box>
          <Grid item xs={20}>
            <ButtonGroup
              variant="contained"
              color="primary"
              ref={anchorRef}
              aria-label="split button"
            >
              <Button onClick={handleClickSpeed}>
                {options[selectedIndex]}
              </Button>
              <Button
                color="primary"
                size="small"
                aria-controls={open ? "split-button-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-label="select merge strategy"
                aria-haspopup="menu"
                onClick={handleToggle}
              >
                <ArrowDropDownIcon />
              </Button>
            </ButtonGroup>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom"
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList id="split-button-menu">
                        {options.map((option, index) => (
                          <MenuItem
                            key={option}
                            selected={index === selectedIndex}
                            onClick={(event) =>
                              handleMenuItemClick(event, index)
                            }
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Grid>
        </Box>

        <Divider orientation="vertical" flexItem />

        <Box>
          <Grid item xs={40}>
            <ButtonGroup
              variant="contained"
              color="primary"
              ref={anchorRef1}
              aria-label="split button"
            >
              <Button onClick={handleClickMode}>
                {modeoptions[selectedIndex1]}
              </Button>
              <Button
                color="primary"
                size="small"
                aria-controls={open1 ? "split-button-menu1" : undefined}
                aria-expanded={open1 ? "true" : undefined}
                aria-label="select merge strategy"
                aria-haspopup="menu"
                onClick={handleToggle1}
              >
                <ArrowDropDownIcon />
              </Button>
            </ButtonGroup>
            <Popper
              open={open1}
              anchorEl={anchorRef1.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom"
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose1}>
                      <MenuList id="split-button-menu1">
                        {modeoptions.map((option1, index1) => (
                          <MenuItem
                            key={option1}
                            //   disabled={index === 2}
                            selected={index1 === selectedIndex1}
                            onClick={(event1) =>
                              handleMenuItemClick1(event1, index1)
                            }
                          >
                            {option1}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
}
