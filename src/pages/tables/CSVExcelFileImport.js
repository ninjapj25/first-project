import {
  Box,
  Checkbox,
  Grid,
  IconButton,
  Radio,
  Typography,
  FormControl,
  RadioGroup,
  Table,
  TableCell,
  TableHead,
  Paper,
  TableRow,
  TableBody,
  Button,
  TableContainer,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ExcelRenderer } from "react-excel-renderer";
import { parse } from "papaparse";
import React, { useEffect, useRef, useState, useMemo } from "react";
import { ArrowLeft } from "react-feather";
import { Dropdown } from "semantic-ui-react";
import Loader from "../../components/Loader";

const useStyles = makeStyles((theme) => ({
  longText: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.9rem",
    },
  },
  root: {
    width: "78vw",
    overflowX: "auto",
    minHeight: "500px",
    marginTop: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
    },
  },

  noData: {
    display: "none",
  },
  table: {
    width: "100%",
    minWidth: 1000,
  },
  headerStyle: {
    minWidth: "200px",
  },
  loading: {
    display: "block",
  },
}));

export default function CSVExcelFileImport() {
  const classes = useStyles();
  const [value, setValue] = useState();
  const [data, setData] = useState();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [loading, setLoading] = useState();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const uploadButton = useRef(null);
  const handleUploadClick = () => {
    uploadButton.current.click();
  };

  const handleFileChange = useMemo(
    () => (e) => {
      if (e.target.files[0].type === "application/vnd.ms-excel") {
        setLoading(true);
        Array.from(e.target.files).forEach(async (file) => {
          const text = await file.text();
          const result = parse(text);
          setData(result.data.slice(0, 3));
          setLoading(false);
        });
      } else if (
        e.target.files[0].type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      ) {
        setLoading(true);
        ExcelRenderer(e.target.files[0], (err, resp) => {
          if (err) {
            console.log(err);
          } else {
            setData(resp.rows.slice(0, 3));
            setLoading(false);
          }
        });
      } else {
        alert("We can only accept CSV or Excel File");
      }
    },
    [data]
  );

  const defaultOptions = [
    { key: "disabled", value: "disabled", text: "Disabled" },
    { key: "email", value: "email", text: "Email" },
    { key: "firstName", value: "firstName", text: "First Name" },
    { key: "lastName", value: "lastName", text: "Last Name" },
    { key: "fullName", value: "fullName", text: "Full Name" },
    { key: "position", value: "position", text: "Position" },
    { key: "companyName", value: "companyName", text: "Company Name" },
    { key: "address", value: "address", text: "Address" },
    { key: "city", value: "city", text: "City" },
    { key: "zip", value: "zip", text: "Zip" },
    { key: "country", value: "country", text: "Country" },
    { key: "telephone", value: "telephone", text: "Telephone" },
    { key: "industry", value: "industry", text: "Industry" },
    { key: "website", value: "website", text: "Website" },
    { key: "facebook", value: "facebook", text: "Facebook" },
    { key: "twitter", value: "twitter", text: "Twitter" },
  ];

  const handleDropDownChange = (e, data) => {
    setSelectedOptions((prevState) => {
      if (selectedOptions.indexOf(data.value) > -1) {
        return [...prevState];
      } else {
        return [...prevState, data.value];
      }
    });
  };

  useEffect(() => {
    if (selectedOptions) {
      selectedOptions.map((selectedOption) =>
        defaultOptions.find((defaultOption, i) => {
          if (defaultOption.value === selectedOption) {
            defaultOptions[i] = Object.assign(defaultOptions[i], {
              disabled: true,
            });

            return true;
          }
        })
      );
    }
  }, [selectedOptions, defaultOptions]);

  return (
    <Grid container={true}>
      <Box width="100%" mt={2} mb={2}>
        <IconButton>
          <ArrowLeft />
        </IconButton>
      </Box>
      <Box width="100%" mt={2} mb={2}>
        <Typography variant="h3"> Import from file to tt1</Typography>
      </Box>
      <Box width="100%">
        <Paper>
          <Box width="100%" maxWidth="1000px" display="flex" flexWrap="wrap">
            <Box width="100%" display="flex" alignItems="center">
              <Checkbox />
              <Typography> Use first row for headers </Typography>
            </Box>

            <FormControl component="fieldset" fullWidth={true}>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                onChange={handleChange}
              >
                <Grid container={true}>
                  <Grid
                    container={true}
                    item={true}
                    lg={4}
                    md={6}
                    xs={12}
                    alignItems="center"
                  >
                    <Radio value="existingContacts" />
                    <Typography className={classes.longText}>
                      Update existing contacts with new data
                    </Typography>
                  </Grid>
                  <Grid
                    container={true}
                    item={true}
                    lg={4}
                    md={6}
                    xs={12}
                    alignItems="center"
                  >
                    <Radio value="uploadDuplicates" />
                    <Typography> Upload duplicates with new data</Typography>
                  </Grid>
                  <Grid
                    container={true}
                    item={true}
                    lg={4}
                    md={6}
                    xs={12}
                    alignItems="center"
                  >
                    <Radio value="skipDuplicates" />
                    <Typography>Skip duplicates</Typography>
                  </Grid>
                </Grid>
              </RadioGroup>
            </FormControl>
          </Box>
        </Paper>
      </Box>

      <Box
        width="100%"
        p={10}
        className={loading ? classes.loading : classes.noData}
      >
        <Loader />
      </Box>

      <TableContainer
        component={Paper}
        className={data ? classes.root : classes.noData}
      >
        <Box p={3}>
          <Typography variant="h3">Select columns from your file</Typography>
        </Box>

        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {data ? (
                data[0].map((item, i) => (
                  <TableCell key={item} className={classes.headerStyle}>
                    <Dropdown
                      placeholder="Column"
                      button
                      scrolling
                      id="dropdowns"
                      options={defaultOptions}
                      onChange={handleDropDownChange}
                    />
                  </TableCell>
                ))
              ) : (
                <TableCell></TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {data ? (
              data.map((item, i) => (
                <TableRow key={i}>
                  {item.map((cell, i) => (
                    <TableCell key={i}>{cell}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell></TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Box p={3}>
        <Button onClick={handleUploadClick} variant="contained" color="primary">
          Import files
        </Button>
        <input
          onChange={handleFileChange}
          type="file"
          ref={uploadButton}
          style={{ display: "none" }}
        />
      </Box>
    </Grid>
  );
}
