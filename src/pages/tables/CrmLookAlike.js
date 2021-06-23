import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  TextField,
  Typography,
} from "@material-ui/core";

import { Refresh } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import { Dropdown } from "semantic-ui-react";

import { deepOrange, deepPurple } from "@material-ui/core/colors";
import CrmLookAlikeModal from "./CrmLookAlikeModal";

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px",
    },
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  fullNameStyle: {
    marginLeft: "5px",
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  defaultWidth: {
    width: "100%",
    overflowY: "auto",
    minHeight: "100vh",
    height: "100vh",
  },
  minWidth: {
    minWidth: "150px",
  },
}));

export default function CrmLookAlike() {
  const classes = useStyles();

  let dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const d = new Date("2015-03-25T12:00:00Z");
  const options = [
    { key: "recentlyViewed", text: "Recently Viewed", value: "recentlyViewed" },
    {
      key: "itemsImFollowing",
      text: "Items I'm Following",
      value: "itemsImFollowing",
    },
    { key: "allLeads", text: "All Leads", value: "allLeads" },
    {
      key: "allClosedLeads",
      text: "All Closed Leads",
      value: "allClosedLeads",
    },
    { key: "allOpenLeads", text: "All Open Leads", value: "allOpenLeads" },
    { key: "convertedLeads", text: "Converted Leads", value: "convertedLeads" },
    { key: "myOpenLeads", text: "My Open Leads", value: "myOpenLeads" },
    { key: "todaysLead", text: "Today's Lead", value: "todaysLead" },
  ];

  function createData(
    id,
    fullName,
    title,
    organization,
    phone,
    email,
    leadStatus,
    leadCreated,
    leadSource,
    leadOwner,
    ownerEmail,
    address,
    description,
    leadRating
  ) {
    return {
      id,
      fullName,
      title,
      organization,
      phone,
      email,
      leadStatus,
      leadCreated,
      leadSource,
      leadOwner,
      ownerEmail,
      address,
      description,
      leadRating,
    };
  }

  const rows = [
    createData(
      1,
      <Grid container={true} alignItems={"center"}>
        <Avatar className={classes.orange}>J</Avatar>
        <Typography variant="body2" className={classes.fullNameStyle}>
          Jon Snow
        </Typography>
      </Grid>,
      "CEO",
      "test 1 organization",
      "(406) 653-3860",
      "test1test@gmail.com",
      "CLOSED - Disqualified",
      d.toLocaleDateString("en-US", dateOptions),
      "Partner Referral",
      "John Doe",
      "johndoe@test.com",
      "14 Spenser Center, North Little Rock, AR, 72118, United States",
      "Interested in model: Whirlygig X520",
      0
    ),
    createData(
      2,
      <Grid container={true} alignItems={"center"}>
        <Avatar className={classes.purple}>B</Avatar>
        <Typography variant="body2" className={classes.fullNameStyle}>
          {" "}
          Bon Snow{" "}
        </Typography>
      </Grid>,
      "Secretary",
      "test 2 organization",
      "(406) 653-3861",
      "test2test@gmail.com",
      "OPEN - NotContacted",
      d.toLocaleDateString("en-US", dateOptions),
      "Partner Referral",
      "John Doe",
      "johndoe@test.com",
      "14 Spenser Center, North Little Rock, AR, 72118, United States",
      "Interested in model: Whirlygig X520",
      0
    ),
    createData(
      3,
      <Grid container={true} alignItems={"center"}>
        <Avatar className={classes.orange}>T</Avatar>
        <Typography variant="body2" className={classes.fullNameStyle}>
          {" "}
          Test 3{" "}
        </Typography>
      </Grid>,
      "CEO",
      "test 3 organization",
      "(406) 653-3860",
      "test3test@gmail.com",
      "CLOSED - Disqualified",
      d.toLocaleDateString("en-US", dateOptions),
      "Partner Referral",
      "John Doe",
      "johndoe@test.com",
      "14 Spenser Center, North Little Rock, AR, 72118, United States",
      "Interested in model: Whirlygig X520",
      0
    ),
    createData(
      4,
      <Grid container={true} alignItems={"center"}>
        <Avatar className={classes.purple}>T</Avatar>
        <Typography variant="body2" className={classes.fullNameStyle}>
          {" "}
          Test 4{" "}
        </Typography>
      </Grid>,
      "Secretary",
      "test 4 organization",
      "(406) 653-3861",
      "test4test@gmail.com",
      "OPEN - NotContacted",
      d.toLocaleDateString("en-US", dateOptions),
      "Phone Enquiry",
      "John Doe",
      "johndoe@test.com",
      "14 Spenser Center, North Little Rock, AR, 72118, United States",
      "Interested in model: Whirlygig X520",
      0
    ),
    createData(
      5,
      <Grid container={true} alignItems={"center"}>
        <Avatar className={classes.orange}>T</Avatar>
        <Typography variant="body2" className={classes.fullNameStyle}>
          {" "}
          Test 5{" "}
        </Typography>
      </Grid>,
      "CEO",
      "test 5 organization",
      "(406) 653-3860",
      "test5test@gmail.com",
      "CLOSED - Disqualified",
      d.toLocaleDateString("en-US", dateOptions),
      "Web",
      "John Doe",
      "johndoe@test.com",
      "14 Spenser Center, North Little Rock, AR, 72118, United States",
      "Interested in model: Whirlygig X520",
      0
    ),
    createData(
      6,
      <Grid container={true} alignItems={"center"}>
        <Avatar className={classes.purple}>B</Avatar>
        <Typography variant="body2" className={classes.fullNameStyle}>
          {" "}
          Bon Snow{" "}
        </Typography>
      </Grid>,
      "Secretary",
      "test 2 organization",
      "(406) 653-3861",
      "test2test@gmail.com",
      "OPEN - NotContacted",
      d.toLocaleDateString("en-US", dateOptions),
      "Partner Referral",
      "John Doe",
      "johndoe@test.com",
      "14 Spenser Center, North Little Rock, AR, 72118, United States",
      "Interested in model: Whirlygig X520",
      0
    ),
    createData(
      7,
      <Grid container={true} alignItems={"center"}>
        <Avatar className={classes.purple}>B</Avatar>
        <Typography variant="body2" className={classes.fullNameStyle}>
          {" "}
          Bon Snow{" "}
        </Typography>
      </Grid>,
      "Secretary",
      "test 2 organization",
      "(406) 653-3861",
      "test2test@gmail.com",
      "OPEN - NotContacted",
      d.toLocaleDateString("en-US", dateOptions),
      "Partner Referral",
      "John Doe",
      "johndoe@test.com",
      "14 Spenser Center, North Little Rock, AR, 72118, United States",
      "Interested in model: Whirlygig X520",
      0
    ),
    createData(
      8,
      <Grid container={true} alignItems={"center"}>
        <Avatar className={classes.purple}>B</Avatar>
        <Typography variant="body2" className={classes.fullNameStyle}>
          {" "}
          Bon Snow{" "}
        </Typography>
      </Grid>,
      "Secretary",
      "test 2 organization",
      "(406) 653-3861",
      "test2test@gmail.com",
      "OPEN - NotContacted",
      d.toLocaleDateString("en-US", dateOptions),
      "Partner Referral",
      "John Doe",
      "johndoe@test.com",
      "14 Spenser Center, North Little Rock, AR, 72118, United States",
      "Interested in model: Whirlygig X520",
      0
    ),
    createData(
      9,
      <Grid container={true} alignItems={"center"}>
        <Avatar className={classes.purple}>B</Avatar>
        <Typography variant="body2" className={classes.fullNameStyle}>
          {" "}
          Bon Snow{" "}
        </Typography>
      </Grid>,
      "Secretary",
      "test 2 organization",
      "(406) 653-3861",
      "test2test@gmail.com",
      "OPEN - NotContacted",
      d.toLocaleDateString("en-US", dateOptions),
      "Partner Referral",
      "John Doe",
      "johndoe@test.com",
      "14 Spenser Center, North Little Rock, AR, 72118, United States",
      "Interested in model: Whirlygig X520",
      0
    ),
    createData(
      10,
      <Grid container={true} alignItems={"center"}>
        <Avatar className={classes.purple}>B</Avatar>
        <Typography variant="body2" className={classes.fullNameStyle}>
          {" "}
          Bon Snow{" "}
        </Typography>
      </Grid>,
      "Secretary",
      "test 2 organization",
      "(406) 653-3861",
      "test2test@gmail.com",
      "OPEN - NotContacted",
      d.toLocaleDateString("en-US", dateOptions),
      "Partner Referral",
      "John Doe",
      "johndoe@test.com",
      "14 Spenser Center, North Little Rock, AR, 72118, United States",
      "Interested in model: Whirlygig X520",
      0
    ),
    createData(
      11,
      <Grid container={true} alignItems={"center"}>
        <Avatar className={classes.purple}>B</Avatar>
        <Typography variant="body2" className={classes.fullNameStyle}>
          {" "}
          Bon Snow{" "}
        </Typography>
      </Grid>,
      "Secretary",
      "test 2 organization",
      "(406) 653-3861",
      "test2test@gmail.com",
      "OPEN - NotContacted",
      d.toLocaleDateString("en-US", dateOptions),
      "Partner Referral",
      "John Doe",
      "johndoe@test.com",
      "14 Spenser Center, North Little Rock, AR, 72118, United States",
      "Interested in model: Whirlygig X520",
      0
    ),
    createData(
      12,
      <Grid container={true} alignItems={"center"}>
        <Avatar className={classes.purple}>B</Avatar>
        <Typography variant="body2" className={classes.fullNameStyle}>
          {" "}
          Bon Snow{" "}
        </Typography>
      </Grid>,
      "Secretary",
      "test 2 organization",
      "(406) 653-3861",
      "test2test@gmail.com",
      "OPEN - NotContacted",
      d.toLocaleDateString("en-US", dateOptions),
      "Partner Referral",
      "John Doe",
      "johndoe@test.com",
      "14 Spenser Center, North Little Rock, AR, 72118, United States",
      "Interested in model: Whirlygig X520",
      0
    ),
    createData(
      13,
      <Grid container={true} alignItems={"center"}>
        <Avatar className={classes.purple}>B</Avatar>
        <Typography variant="body2" className={classes.fullNameStyle}>
          {" "}
          Bon Snow{" "}
        </Typography>
      </Grid>,
      "Secretary",
      "test 2 organization",
      "(406) 653-3861",
      "test2test@gmail.com",
      "OPEN - NotContacted",
      d.toLocaleDateString("en-US", dateOptions),
      "Partner Referral",
      "John Doe",
      "johndoe@test.com",
      "14 Spenser Center, North Little Rock, AR, 72118, United States",
      "Interested in model: Whirlygig X520",
      0
    ),
    createData(
      14,
      <Grid container={true} alignItems={"center"}>
        <Avatar className={classes.purple}>B</Avatar>
        <Typography variant="body2" className={classes.fullNameStyle}>
          {" "}
          Bon Snow{" "}
        </Typography>
      </Grid>,
      "Secretary",
      "test 2 organization",
      "(406) 653-3861",
      "test2test@gmail.com",
      "OPEN - NotContacted",
      d.toLocaleDateString("en-US", dateOptions),
      "Partner Referral",
      "John Doe",
      "johndoe@test.com",
      "14 Spenser Center, North Little Rock, AR, 72118, United States",
      "Interested in model: Whirlygig X520",
      0
    ),
    createData(
      15,
      <Grid container={true} alignItems={"center"}>
        <Avatar className={classes.purple}>B</Avatar>
        <Typography variant="body2" className={classes.fullNameStyle}>
          {" "}
          Bon Snow{" "}
        </Typography>
      </Grid>,
      "Secretary",
      "test 2 organization",
      "(406) 653-3861",
      "test2test@gmail.com",
      "OPEN - NotContacted",
      d.toLocaleDateString("en-US", dateOptions),
      "Partner Referral",
      "John Doe",
      "johndoe@test.com",
      "14 Spenser Center, North Little Rock, AR, 72118, United States",
      "Interested in model: Whirlygig X520",
      0
    ),
  ];

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  const headCells = [
    {
      id: "fullName",
      numeric: false,
      label: "Fullname",
    },

    {
      id: "title",
      numeric: false,
      label: "Title",
    },

    {
      id: "organization",
      numeric: false,
      label: "Organization",
    },

    {
      id: "phone",
      numeric: true,
      label: "Phone",
    },

    {
      id: "email",
      numeric: false,
      label: "Email",
    },

    {
      id: "leadStatus",
      numeric: false,
      label: "Lead Status",
    },
    {
      id: "leadCreated",
      numeric: true,
      label: "Lead Created",
    },
  ];

  function EnhancedTableHead(props) {
    const {
      classes,
      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount,
      onRequestSort,
    } = props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ "aria-label": "select all leads" }}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }

  const [dense, setDense] = useState(false);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("fullName");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selected, setSelected] = useState([]);

  const isSelected = (name) => selected.indexOf(name) !== -1;
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  // MODAL
  const [openId, setOpenId] = useState("");

  const handleIdClick = (id) => {
    setOpenId(id);
  };

  useEffect(() => {
    handleIdClick();
  }, [openId]);

  return (
    <Grid container={true}>
      <Grid container={true}>
        <Grid
          item={true}
          lg={2}
          md={3}
          sm={4}
          xs={12}
          container={true}
          direction="column"
        >
          <Typography variant="h4" gutterBottom={true}>
            Leads
          </Typography>
          <Dropdown
            placeholder="All Leads"
            selection={true}
            button={true}
            options={options}
          />
        </Grid>
        <Grid
          item={true}
          lg
          md
          sm={8}
          xs={12}
          container={true}
          justify="flex-end"
          alignItems="center"
          className={classes.searchContainer}
        >
          <TextField variant="outlined" size="small" />
          <Box ml={2}>
            <Button
              variant="outlined"
              onClick={() => {
                window.location.reload();
              }}
            >
              <Refresh />{" "}
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box display="flex" width="100%" mt={2}>
        <TableContainer className={classes.defaultWidth}>
          <Table
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(0, rows.length + 1)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <React.Fragment key={row.id}>
                      <TableRow
                        hover
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            onClick={(event) => handleClick(event, row.id)}
                            checked={isItemSelected}
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </TableCell>
                        <TableCell className={classes.minWidth}>
                          <Button
                            color="primary"
                            onClick={() => handleIdClick(row.id)}
                            fullWidth={true}
                          >
                            <Typography noWrap={true}>
                              {row.fullName}
                            </Typography>
                          </Button>
                        </TableCell>
                        <TableCell>{row.title}</TableCell>
                        <TableCell className={classes.minWidth}>
                          <Typography noWrap={true}>
                            {" "}
                            {row.organization}
                          </Typography>
                        </TableCell>
                        <TableCell className={classes.minWidth}>
                          <Typography noWrap={true}>{row.phone}</Typography>
                        </TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell className={classes.minWidth}>
                          <Typography noWrap={true}>
                            {" "}
                            {row.leadStatus}
                          </Typography>
                        </TableCell>
                        <TableCell className={classes.minWidth}>
                          <Typography noWrap={true}>
                            {row.leadCreated}{" "}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </React.Fragment>
                  );
                })}
            </TableBody>
            <CrmLookAlikeModal rows={rows} openId={openId} />
          </Table>
        </TableContainer>
      </Box>
    </Grid>
  );
}
