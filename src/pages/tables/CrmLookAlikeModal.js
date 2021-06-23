import React, { useEffect, useState } from "react";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import {
  Modal,
  Fade,
  Backdrop,
  Grid,
  Box,
  Typography,
  Button,
  Link,
  AppBar,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Avatar,
  Paper,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import StarTwoToneIcon from "@material-ui/icons/StarTwoTone";
import LockIcon from "@material-ui/icons/Lock";
import { makeStyles } from "@material-ui/styles";
import { grey, orange, red, yellow } from "@material-ui/core/colors";
import { ChevronRight, Edit, TrendingUpRounded } from "@material-ui/icons";
import {
  Dropdown,
  Label,
  Menu,
  Rating,
  Tab as SemanticTab,
} from "semantic-ui-react";
import { ChevronDown, ChevronUp } from "react-feather";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "fixed",
    top: "5%",
    left: "50%",
    zIndex: "1050",
    width: "835px",
    marginLeft: -"410px",
    backgroundColor: "#fff",
    border: "none",
    outline: "none",
  },
  paper: {
    position: "fixed",
    display: "block",
    width: "800px",
    minWidth: "800px",
    maxWidth: "calc(100vw - 200px)",
    right: 0,
    bottom: 0,
    top: "64px",
    overflowY: "auto",
    outline: "none",
    [theme.breakpoints.down("xs")]: { top: "55px" },
  },
  closeButton: {
    position: "fixed",
    marginLeft: "-30px",
    marginTop: "61px",
    width: "30px",
    minWidth: "10px",
    padding: "0",
    borderRadius: "0",
    height: "50px",
    background: theme.palette.background.paper,
    transform: "translate(0, -50%)",
    "& span": {
      width: "0px",
    },
  },
  tabPanelStyle: {
    minHeight: "70vh",
    width: "100%",
  },
  profilePic: {
    border: "1px solid black",
    borderRadius: "4px",
    height: "50px",
    width: "50px",
    padding: "5px",
  },
  headerStyle: {
    borderBottom: `1px solid ${grey[200]}`,
    padding: "10px",
  },

  icon: {
    color: grey[400],
    cursor: "pointer",
    "& :hover": {
      color: yellow[700],
    },
  },
  starredIcon: {
    color: yellow[700],
    cursor: "pointer",
  },
  orangeText: {
    color: orange[700],
  },
  redText: {
    color: red[700],
  },
  accordion: {
    width: "100%",
  },
  stepper: {
    borderRadius: "0",
  },
  smallAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    fontSize: "10px",
    marginLeft: "5px",
  },

  modalStyle: {
    position: "static !important",
  },
}));

export default function CrmLookAlikeModal({ openId, rows }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [row, setRow] = useState("");
  const [starred, setStarred] = useState(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (row) {
      setOpen(true);
    }
  }, [row]);
  useEffect(() => {
    if (openId) {
      setRow(rows.find((row) => row.id === openId));
    }
  }, [openId]);

  const handleClose = () => {
    setOpen(false);
    setRow("");
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      "aria-controls": `scrollable-auto-tabpanel-${index}`,
    };
  }

  const panes = [
    {
      menuItem: (
        <Menu.Item key="messages">
          Sent <Label>15</Label>
        </Menu.Item>
      ),
      render: () => (
        <SemanticTab.Pane>
          <Box width="100%" maxHeight="350px" style={{ overflowY: "auto" }}>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 1
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 2
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 3
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 4
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 5
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 6
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 7
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 8
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 9
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 10
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 11
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 12
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 13
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 14
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 15
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 16
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 17
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 18
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 19
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 20
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 21
            </Typography>
          </Box>
        </SemanticTab.Pane>
      ),
    },
    {
      menuItem: (
        <Menu.Item key="messages">
          Opened <Label>15</Label>
        </Menu.Item>
      ),
      render: () => (
        <SemanticTab.Pane>
          {" "}
          <Box width="100%" maxHeight="350px" style={{ overflowY: "auto" }}>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 1
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 2
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 3
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 4
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 5
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 6
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 7
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 8
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 9
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 10
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 11
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 12
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 13
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 14
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 15
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 16
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 17
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 18
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 19
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 20
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 21
            </Typography>
          </Box>
        </SemanticTab.Pane>
      ),
    },
    {
      menuItem: (
        <Menu.Item key="messages">
          Clicked <Label>15</Label>
        </Menu.Item>
      ),
      render: () => (
        <SemanticTab.Pane>
          {" "}
          <Box width="100%" maxHeight="350px" style={{ overflowY: "auto" }}>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 1
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 2
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 3
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 4
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 5
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 6
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 7
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 8
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 9
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 10
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 11
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 12
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 13
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 14
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 15
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 16
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 17
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 18
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 19
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 20
            </Typography>
            <Typography variant="h5" gutterBottom={true}>
              Campaign 21
            </Typography>
          </Box>
        </SemanticTab.Pane>
      ),
    },
  ];

  return (
    <Modal
      className={classes.modalStyle}
      open={open}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      closeAfterTransition={true}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      disableEnforceFocus
    >
      <Fade in={open}>
        <Grid container={true} justify="flex-end" className={classes.modal}>
          <Paper className={classes.paper}>
            <Button onClick={handleClose} className={classes.closeButton}>
              <ChevronRight />
            </Button>
            {row ? (
              <Grid container={true}>
                <Grid
                  container={true}
                  alignItems="center"
                  className={classes.headerStyle}
                >
                  <Grid
                    container={true}
                    item={true}
                    lg={6}
                    md={6}
                    sm={6}
                    xs={6}
                  >
                    <PeopleOutlineIcon
                      fontSize="large"
                      className={classes.profilePic}
                    />
                    <Box
                      display="flex"
                      flexDirection="column"
                      p={1}
                      ml={1}
                      mr={1}
                    >
                      <Typography variant="h5">Lead</Typography>
                      <Typography variant="h3">
                        {row.fullName.props.children[1].props.children}
                      </Typography>
                    </Box>
                    <Grid
                      container={true}
                      alignItems="flex-end"
                      item={true}
                      lg
                      md
                      sm
                      xs
                    >
                      <Box display="flex" pr={2} pb={2}>
                        <Rating
                          icon="star"
                          defaultRating={1}
                          size="large"
                          maxRating={5}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid
                    container={true}
                    item={true}
                    justify="flex-end"
                    alignItems="center"
                    lg={6}
                    md={6}
                    sm={6}
                    xs={6}
                  >
                    <Button size="small" variant="outlined">
                      <Edit />
                    </Button>
                    <Box ml={1} minWidth="230px">
                      <Dropdown
                        scrolling={true}
                        button={true}
                        fluid={true}
                        text="Actions"
                      >
                        <Dropdown.Menu>
                          <Dropdown.Item icon="edit" text="Edit This Lead" />
                          <Dropdown.Item
                            icon="images outline"
                            text="Change Lead Image"
                          />
                          <Dropdown.Item icon="trash" text="Delete This Lead" />
                          <Dropdown.Item icon="mail" text="Email This Lead" />
                          <Dropdown.Item icon="copy" text="Clone This Lead" />
                          <Dropdown.Item
                            icon="users"
                            text="Change Record Owner"
                          />

                          <Dropdown.Item icon="add" text="Add to List" />
                          <Dropdown.Item
                            icon="file pdf outline"
                            text="Generate Merge Document"
                          />
                          <Dropdown.Item
                            icon="id badge"
                            text="Change Lead To Contact"
                          />
                          <Dropdown.Divider />
                          <Dropdown.Item
                            icon="arrow right"
                            text="Convert Lead"
                          />
                          <Dropdown.Item
                            icon="mail forward"
                            text="Export To MailChimp"
                          />
                          <Dropdown.Item icon="print" text="Print This Lead" />
                          <Dropdown.Divider />
                          <Dropdown.Item
                            icon="compress"
                            text="Merge Into Lead"
                          />
                          <Dropdown.Item
                            icon="compress"
                            text="SmartMerge Lead"
                          />
                          <Dropdown.Item
                            icon="checkmark box"
                            text="Add Activity Set To Lead"
                          />
                          <Dropdown.Item
                            icon="checkmark box"
                            text="Add New Task For Lead"
                          />
                          <Dropdown.Item
                            icon="calendar check outline"
                            text="Add New Event For Lead"
                          />
                        </Dropdown.Menu>
                      </Dropdown>
                    </Box>
                  </Grid>
                </Grid>
                <Grid container={true} className={classes.headerStyle}>
                  <Grid
                    container={true}
                    lg
                    md
                    sm
                    xs
                    item={true}
                    direction="column"
                  >
                    <Typography variant="caption">Lead Status</Typography>

                    {row.leadStatus === "CLOSED - Disqualified" ? (
                      <Typography variant="h4" className={classes.redText}>
                        Disqualified
                      </Typography>
                    ) : (
                      <Typography variant="h4" className={classes.orangeText}>
                        Not Contacted
                      </Typography>
                    )}
                  </Grid>
                  <Grid
                    container={true}
                    lg
                    md
                    sm
                    xs
                    item={true}
                    direction="column"
                  >
                    <Typography variant="caption">Name</Typography>
                    <Typography variant="h4">
                      {row.fullName.props.children[1].props.children}
                    </Typography>
                  </Grid>
                  <Grid
                    container={true}
                    lg
                    md
                    sm
                    xs
                    item={true}
                    direction="column"
                  >
                    <Typography variant="caption">Lead Source</Typography>
                    <Typography variant="h4">{row.leadSource}</Typography>
                  </Grid>
                  <Grid
                    container={true}
                    lg
                    md
                    sm
                    xs
                    item={true}
                    direction="column"
                  >
                    <Typography variant="caption">Lead Rating</Typography>
                    <Typography variant="h4">{row.leadRating}</Typography>
                  </Grid>
                  <Grid
                    container={true}
                    lg
                    md
                    sm
                    xs
                    item={true}
                    direction="column"
                  >
                    <Typography variant="caption">Lead Owner</Typography>
                    <Link href="#" variant="h4" color="primary">
                      {row.leadOwner}
                    </Link>
                  </Grid>
                </Grid>
                <Grid container={true} className={classes.headerStyle}>
                  <Grid container={true} alignItems="center">
                    <AppBar
                      position="static"
                      color="default"
                      style={{ zIndex: "1" }}
                    >
                      <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                      >
                        <Tab label="Details" {...a11yProps(0)} />
                        <Tab label="Related" {...a11yProps(1)} />
                        <Tab label="Activity" {...a11yProps(2)} />
                      </Tabs>
                    </AppBar>
                    <TabPanel
                      className={classes.tabPanelStyle}
                      value={value}
                      index={0}
                    >
                      <Grid container={true}>
                        <Accordion className={classes.accordion}>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography>LEAD INFORMATION </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Grid container={true}>
                              <Grid
                                container={true}
                                alignItems="center"
                                justify="space-around"
                              >
                                <Grid
                                  container={true}
                                  justify="flex-end"
                                  item={true}
                                  lg={3}
                                  md={3}
                                  sm={3}
                                  xs={3}
                                >
                                  <Typography variant="subtitle1">
                                    Record ID
                                  </Typography>
                                </Grid>
                                <Grid item={true} lg={8} md={8} sm={8} xs={8}>
                                  <Typography variant="subtitle2">
                                    57747424
                                  </Typography>
                                </Grid>
                              </Grid>
                              <Grid
                                container={true}
                                alignItems="center"
                                justify="space-around"
                              >
                                <Grid
                                  container={true}
                                  justify="flex-end"
                                  item={true}
                                  lg={3}
                                  md={3}
                                  sm={3}
                                  xs={3}
                                >
                                  <Typography variant="subtitle1">
                                    Name
                                  </Typography>
                                </Grid>
                                <Grid item={true} lg={8} md={8} sm={8} xs={8}>
                                  <Typography variant="subtitle2">
                                    {
                                      row.fullName.props.children[1].props
                                        .children
                                    }
                                  </Typography>
                                </Grid>
                              </Grid>
                              <Grid
                                container={true}
                                alignItems="center"
                                justify="space-around"
                              >
                                <Grid
                                  container={true}
                                  justify="flex-end"
                                  item={true}
                                  lg={3}
                                  md={3}
                                  sm={3}
                                  xs={3}
                                >
                                  <Typography variant="subtitle1">
                                    Title
                                  </Typography>
                                </Grid>
                                <Grid item={true} lg={8} md={8} sm={8} xs={8}>
                                  <Typography variant="subtitle2">
                                    {row.title}
                                  </Typography>
                                </Grid>
                              </Grid>
                              <Grid
                                container={true}
                                alignItems="center"
                                justify="space-around"
                              >
                                <Grid
                                  container={true}
                                  justify="flex-end"
                                  item={true}
                                  lg={3}
                                  md={3}
                                  sm={3}
                                  xs={3}
                                >
                                  <Typography variant="subtitle1">
                                    Organization
                                  </Typography>
                                </Grid>
                                <Grid item={true} lg={8} md={8} sm={8} xs={8}>
                                  <Typography variant="subtitle2">
                                    {row.organization}
                                  </Typography>
                                </Grid>
                              </Grid>
                              <Grid
                                container={true}
                                alignItems="center"
                                justify="space-around"
                              >
                                <Grid
                                  container={true}
                                  justify="flex-end"
                                  item={true}
                                  lg={3}
                                  md={3}
                                  sm={3}
                                  xs={3}
                                >
                                  <Typography variant="subtitle1">
                                    Lead Status
                                  </Typography>
                                </Grid>
                                <Grid item={true} lg={8} md={8} sm={8} xs={8}>
                                  <Typography variant="subtitle2">
                                    {row.leadStatus}
                                  </Typography>
                                </Grid>
                              </Grid>
                              <Grid
                                container={true}
                                alignItems="center"
                                justify="space-around"
                              >
                                <Grid
                                  container={true}
                                  justify="flex-end"
                                  item={true}
                                  lg={3}
                                  md={3}
                                  sm={3}
                                  xs={3}
                                >
                                  <Typography variant="subtitle1">
                                    User Responsible
                                  </Typography>
                                </Grid>
                                <Grid item={true} lg={8} md={8} sm={8} xs={8}>
                                  <Typography variant="subtitle2"></Typography>
                                </Grid>
                              </Grid>
                              <Grid
                                container={true}
                                alignItems="center"
                                justify="space-around"
                              >
                                <Grid
                                  container={true}
                                  justify="flex-end"
                                  item={true}
                                  lg={3}
                                  md={3}
                                  sm={3}
                                  xs={3}
                                >
                                  <Typography variant="subtitle1">
                                    Link Email Address
                                  </Typography>
                                </Grid>
                                <Grid item={true} lg={8} md={8} sm={8} xs={8}>
                                  <Link href="#" variant="subtitle2">
                                    {row.email}
                                  </Link>
                                </Grid>
                              </Grid>
                              <Grid
                                container={true}
                                alignItems="center"
                                justify="space-around"
                              >
                                <Grid
                                  container={true}
                                  justify="flex-end"
                                  item={true}
                                  lg={3}
                                  md={3}
                                  sm={3}
                                  xs={3}
                                >
                                  <Typography variant="subtitle1">
                                    Lead Owner
                                  </Typography>
                                </Grid>
                                <Grid item={true} lg={8} md={8} sm={8} xs={8}>
                                  <Link href="#" variant="subtitle2">
                                    {row.leadOwner}
                                  </Link>
                                </Grid>
                              </Grid>
                              <Grid
                                container={true}
                                alignItems="center"
                                justify="space-around"
                              >
                                <Grid
                                  container={true}
                                  justify="flex-end"
                                  item={true}
                                  lg={3}
                                  md={3}
                                  sm={3}
                                  xs={3}
                                >
                                  <Typography variant="subtitle1">
                                    Lead Created
                                  </Typography>
                                </Grid>
                                <Grid item={true} lg={8} md={8} sm={8} xs={8}>
                                  <Typography variant="subtitle2">
                                    {row.leadCreated}
                                  </Typography>
                                </Grid>
                              </Grid>
                              <Grid
                                container={true}
                                alignItems="center"
                                justify="space-around"
                              >
                                <Grid
                                  container={true}
                                  justify="flex-end"
                                  item={true}
                                  lg={3}
                                  md={3}
                                  sm={3}
                                  xs={3}
                                >
                                  <Typography variant="subtitle1">
                                    Date of Last Activity
                                  </Typography>
                                </Grid>
                                <Grid item={true} lg={8} md={8} sm={8} xs={8}>
                                  <Typography variant="subtitle2"></Typography>
                                </Grid>
                              </Grid>
                              <Grid
                                container={true}
                                alignItems="center"
                                justify="space-around"
                              >
                                <Grid
                                  container={true}
                                  justify="flex-end"
                                  item={true}
                                  lg={3}
                                  md={3}
                                  sm={3}
                                  xs={3}
                                >
                                  <Typography variant="subtitle1">
                                    Date of Next Activity
                                  </Typography>
                                </Grid>
                                <Grid item={true} lg={8} md={8} sm={8} xs={8}>
                                  <Typography variant="subtitle2"></Typography>
                                </Grid>
                              </Grid>
                              <Grid
                                container={true}
                                alignItems="center"
                                justify="space-around"
                              >
                                <Grid
                                  container={true}
                                  justify="flex-end"
                                  item={true}
                                  lg={3}
                                  md={3}
                                  sm={3}
                                  xs={3}
                                >
                                  <Typography variant="subtitle1">
                                    Lead Rating
                                  </Typography>
                                </Grid>
                                <Grid item={true} lg={8} md={8} sm={8} xs={8}>
                                  <Typography variant="subtitle2">
                                    {row.leadRating}
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Grid>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion className={classes.accordion}>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                          >
                            <Typography>ADDITIONAL INFORMATION </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Grid container={true}>
                              <Grid
                                container={true}
                                alignItems="center"
                                justify="space-around"
                              >
                                <Grid
                                  container={true}
                                  justify="flex-end"
                                  item={true}
                                  lg={3}
                                  md={3}
                                  sm={3}
                                  xs={3}
                                >
                                  <Typography variant="subtitle1">
                                    Email Address
                                  </Typography>
                                </Grid>
                                <Grid item={true} lg={8} md={8} sm={8} xs={8}>
                                  <Link href="#" variant="subtitle2">
                                    {row.email}
                                  </Link>
                                </Grid>
                              </Grid>
                              <Grid
                                container={true}
                                alignItems="center"
                                justify="space-around"
                              >
                                <Grid
                                  container={true}
                                  justify="flex-end"
                                  item={true}
                                  lg={3}
                                  md={3}
                                  sm={3}
                                  xs={3}
                                >
                                  <Typography variant="subtitle1">
                                    Email Opted Out
                                  </Typography>
                                </Grid>
                                <Grid item={true} lg={8} md={8} sm={8} xs={8}>
                                  <Typography variant="subtitle2"></Typography>
                                </Grid>
                              </Grid>
                              <Grid
                                container={true}
                                alignItems="center"
                                justify="space-around"
                              >
                                <Grid
                                  container={true}
                                  justify="flex-end"
                                  item={true}
                                  lg={3}
                                  md={3}
                                  sm={3}
                                  xs={3}
                                >
                                  <Typography variant="subtitle1">
                                    Phone
                                  </Typography>
                                </Grid>
                                <Grid item={true} lg={8} md={8} sm={8} xs={8}>
                                  <Typography variant="subtitle2">
                                    {row.phone}
                                  </Typography>
                                </Grid>
                              </Grid>
                              <Grid
                                container={true}
                                alignItems="center"
                                justify="space-around"
                              >
                                <Grid
                                  container={true}
                                  justify="flex-end"
                                  item={true}
                                  lg={3}
                                  md={3}
                                  sm={3}
                                  xs={3}
                                >
                                  <Typography variant="subtitle1">
                                    Mobile Phone
                                  </Typography>
                                </Grid>
                                <Grid item={true} lg={8} md={8} sm={8} xs={8}>
                                  <Typography variant="subtitle2"></Typography>
                                </Grid>
                              </Grid>
                              <Grid
                                container={true}
                                alignItems="center"
                                justify="space-around"
                              >
                                <Grid
                                  container={true}
                                  justify="flex-end"
                                  item={true}
                                  lg={3}
                                  md={3}
                                  sm={3}
                                  xs={3}
                                >
                                  <Typography variant="subtitle1">
                                    Website
                                  </Typography>
                                </Grid>
                                <Grid item={true} lg={8} md={8} sm={8} xs={8}>
                                  <Typography variant="subtitle2"></Typography>
                                </Grid>
                              </Grid>
                              <Grid
                                container={true}
                                alignItems="center"
                                justify="space-around"
                              >
                                <Grid
                                  container={true}
                                  justify="flex-end"
                                  item={true}
                                  lg={3}
                                  md={3}
                                  sm={3}
                                  xs={3}
                                >
                                  <Typography variant="subtitle1">
                                    Industry
                                  </Typography>
                                </Grid>
                                <Grid item={true} lg={8} md={8} sm={8} xs={8}>
                                  <Typography variant="subtitle2"></Typography>
                                </Grid>
                              </Grid>
                              <Grid
                                container={true}
                                alignItems="center"
                                justify="space-around"
                              >
                                <Grid
                                  container={true}
                                  justify="flex-end"
                                  item={true}
                                  lg={3}
                                  md={3}
                                  sm={3}
                                  xs={3}
                                >
                                  <Typography variant="subtitle1">
                                    Number of Employees
                                  </Typography>
                                </Grid>
                                <Grid item={true} lg={8} md={8} sm={8} xs={8}>
                                  <Typography variant="subtitle2"></Typography>
                                </Grid>
                              </Grid>
                              <Grid
                                container={true}
                                alignItems="center"
                                justify="space-around"
                              >
                                <Grid
                                  container={true}
                                  justify="flex-end"
                                  item={true}
                                  lg={3}
                                  md={3}
                                  sm={3}
                                  xs={3}
                                >
                                  <Typography variant="subtitle1">
                                    Lead Source
                                  </Typography>
                                </Grid>
                                <Grid item={true} lg={8} md={8} sm={8} xs={8}>
                                  <Typography variant="subtitle2">
                                    {row.leadSource}
                                  </Typography>
                                </Grid>
                              </Grid>
                              <Grid
                                container={true}
                                alignItems="center"
                                justify="space-around"
                              >
                                <Grid
                                  container={true}
                                  justify="flex-end"
                                  item={true}
                                  lg={3}
                                  md={3}
                                  sm={3}
                                  xs={3}
                                >
                                  <Typography variant="subtitle1">
                                    Address
                                  </Typography>
                                </Grid>
                                <Grid item={true} lg={8} md={8} sm={8} xs={8}>
                                  <Typography variant="subtitle2">
                                    {row.address}
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Grid>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion className={classes.accordion}>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel5a-content"
                            id="panel5a-header"
                          >
                            <Typography>TAG INFORMATION </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Grid container={true}>
                              <Grid
                                container={true}
                                alignItems="center"
                                justify="space-around"
                              >
                                <Grid
                                  container={true}
                                  justify="flex-end"
                                  item={true}
                                  lg={3}
                                  md={3}
                                  sm={3}
                                  xs={3}
                                >
                                  <Typography variant="subtitle1">
                                    Tag List
                                  </Typography>
                                </Grid>
                                <Grid item={true} lg={8} md={8} sm={8} xs={8}>
                                  <Link href="#" variant="subtitle2">
                                    Change
                                  </Link>
                                </Grid>
                              </Grid>
                            </Grid>
                          </AccordionDetails>
                        </Accordion>
                      </Grid>
                    </TabPanel>
                    <TabPanel
                      className={classes.tabPanelStyle}
                      value={value}
                      index={1}
                    >
                      <Grid container={true}>
                        <Grid container={true} justify="space-around">
                          <Grid container={true} item={true} xs={5}>
                            <Button fullWidth={true} variant="outlined">
                              <Box
                                width="100%"
                                display="flex"
                                flexDirection="column"
                              >
                                <Typography
                                  gutterBottom={true}
                                  align="left"
                                  variant="h6"
                                >
                                  NOTES
                                </Typography>
                                <Typography align="left" variant="h6">
                                  0
                                </Typography>
                              </Box>
                            </Button>
                          </Grid>
                          <Grid container={true} item={true} xs={5}>
                            <Button fullWidth={true} variant="outlined">
                              <Box
                                width="100%"
                                display="flex"
                                flexDirection="column"
                              >
                                <Typography
                                  gutterBottom={true}
                                  align="left"
                                  variant="h6"
                                >
                                  FILES
                                </Typography>
                                <Typography align="left" variant="h6">
                                  0
                                </Typography>
                              </Box>
                            </Button>
                          </Grid>
                          <Grid
                            container={true}
                            justify="flex-end"
                            item={true}
                            xs={1}
                          >
                            <Box
                              display="flex"
                              justifyContent="center"
                              flexDirection="column"
                            >
                              <Button>
                                <ChevronUp fontSize="small" />
                              </Button>
                              <Button>
                                <ChevronDown fontSize="small" />
                              </Button>
                            </Box>
                          </Grid>
                        </Grid>
                        <Grid container={true} alignItems="center">
                          <Box
                            display="flex"
                            width="100%"
                            mt={2}
                            borderBottom={`1px solid ${grey[100]}`}
                          >
                            <Grid
                              container={true}
                              alignItems="center"
                              item={true}
                              xs
                            >
                              <IconButton>
                                <ChevronRight />
                              </IconButton>
                              <Typography variant="h6"> Notes </Typography>
                              <Avatar className={classes.smallAvatar}>0</Avatar>
                            </Grid>
                            <Grid
                              container={true}
                              justify="flex-end"
                              item={true}
                              xs
                            >
                              <Box p={2}>
                                <Button variant="outlined">Add Note</Button>
                              </Box>
                            </Grid>
                          </Box>
                          <Box
                            display="flex"
                            width="100%"
                            mt={2}
                            borderBottom={`1px solid ${grey[100]}`}
                          >
                            <Grid
                              container={true}
                              alignItems="center"
                              item={true}
                              xs
                            >
                              <IconButton>
                                <ChevronRight />
                              </IconButton>
                              <Typography variant="h6"> Files </Typography>
                              <Avatar className={classes.smallAvatar}>0</Avatar>
                            </Grid>
                            <Grid
                              container={true}
                              justify="flex-end"
                              item={true}
                              xs
                            >
                              <Box p={2}>
                                <Button variant="outlined">Add Files</Button>
                              </Box>
                            </Grid>
                          </Box>
                        </Grid>
                      </Grid>
                    </TabPanel>
                    <TabPanel
                      className={classes.tabPanelStyle}
                      value={value}
                      index={2}
                    >
                      <Grid container={true}>
                        <SemanticTab panes={panes} />
                      </Grid>
                    </TabPanel>
                  </Grid>
                </Grid>
              </Grid>
            ) : (
              " "
            )}
          </Paper>
        </Grid>
      </Fade>
    </Modal>
  );
}
