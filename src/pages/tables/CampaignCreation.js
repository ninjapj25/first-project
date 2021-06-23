import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/styles";
import { Dropdown } from "semantic-ui-react";
import InfoIcon from "@material-ui/icons/Info";
import { AddCircle, Email, RemoveCircle } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  submitButton: {
    marginLeft: "5px",
  },
  paddingRight: {
    paddingRight: "5px",
  },
  open: {
    display: "block",
  },
  close: {
    display: "none",
  },
}));
export default function CampaignCreation() {
  const classes = useStyles();
  const [campaign, setCampaign] = useState("Campaign Name");
  const [disableCampaign, setDisableCampaign] = useState(true);
  const [exclude, setExclude] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisableCampaign((prevState) => !prevState);
  };

  const excludeClickHandler = () => {
    setExclude((prevState) => !prevState);
  };

  const templateOptions = [
    { key: "template1", value: "template1", text: "Template 1" },
    { key: "template2", value: "template2", text: "Template 2" },
    { key: "template3", value: "template3", text: "Template 3" },
    { key: "template4", value: "template4", text: "Template 4" },
    { key: "template5", value: "template5", text: "Template 5" },
    { key: "template6", value: "template6", text: "Template 6" },
  ];

  const segmensOptions = [
    { key: "segment1", value: "segment1", text: "Segment 1" },
    { key: "segment2", value: "segment2", text: "Segment 2" },
    { key: "segment3", value: "segment3", text: "Segment 3" },
    { key: "segment4", value: "segment4", text: "Segment 4" },
    { key: "segment5", value: "segment5", text: "Segment 5" },
    { key: "segment6", value: "segment6", text: "Segment 6" },
    { key: "segment7", value: "segment7", text: "Segment 7" },
  ];
  const excludeOptions = [
    { key: "exclude1", value: "exclude1", text: "Exclude 1" },
    { key: "exclude2", value: "exclude2", text: "Exclude 2" },
    { key: "exclude3", value: "exclude3", text: "Exclude 3" },
    { key: "exclude4", value: "exclude4", text: "Exclude 4" },
    { key: "exclude5", value: "exclude5", text: "Exclude 5" },
    { key: "exclude6", value: "exclude6", text: "Exclude 6" },
    { key: "exclude7", value: "exclude7", text: "Exclude 7" },
  ];
  return (
    <Grid container={true} spacing={2}>
      <Grid item={true} lg={3} md={5} sm={4} xs={12}>
        {disableCampaign ? (
          <Grid container={true} alignItems="center" spacing={2}>
            <Typography variant="h4" noWrap={true} style={{ maxWidth: "70%" }}>
              {" "}
              {campaign}
            </Typography>
            <IconButton
              onClick={() => setDisableCampaign((prevState) => !prevState)}
            >
              <EditIcon />
            </IconButton>
          </Grid>
        ) : (
          <form onSubmit={handleSubmit}>
            <Grid container={true} alignItems="center">
              <TextField
                variant={"outlined"}
                defaultValue={campaign}
                size="small"
                onChange={(e) => setCampaign(e.target.value)}
              />
              <Button
                variant="contained"
                className={classes.submitButton}
                color="primary"
                type="submit"
              >
                Submit
              </Button>
            </Grid>
          </form>
        )}

        <Box width="100%" mt={5} mb={5}>
          {" "}
          <Typography variant="h3"> New campaign </Typography>
        </Box>
        <Box width="100%" mb={5}>
          <Dropdown
            placeholder="Select a template"
            selection
            options={templateOptions}
          />
        </Box>
        <Grid container={true} direction="column">
          <Typography variant="h5" gutterBottom={true}>
            Subject
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Subject of this email"
          />
          <Box mt={1} mb={5}>
            {" "}
            <Typography variant="body2">
              Set a title for this campaign? <InfoIcon fontSize="inherit" />
            </Typography>
          </Box>
        </Grid>
        <Grid container={true} direction="column">
          <Typography variant="h5" gutterBottom={true}>
            From name
          </Typography>
          <TextField size="small" variant="outlined" placeholder="From name" />
        </Grid>
        <Box width="100%" flexDirection="column" display="flex" mt={5} mb={5}>
          <Typography variant="h5" gutterBottom={true}>
            From email
          </Typography>
          <TextField
            size="small"
            variant="outlined"
            placeholder="name@domain.com"
          />
        </Box>
        <Box width="100%" flexDirection="column" display="flex" mt={5} mb={5}>
          <Typography variant="h5" gutterBottom={true}>
            Reply to email
          </Typography>
          <TextField
            size="small"
            variant="outlined"
            placeholder="name@domain.com"
          />
        </Box>
        <Box width="100%" mt={5} mb={5}>
          {" "}
          <Typography variant="h3"> Test send this campaign </Typography>
        </Box>
        <Box width="100%" flexDirection="column" display="flex" mt={5} mb={5}>
          <Typography variant="h5" gutterBottom={true}>
            Test email(s)
          </Typography>
          <TextField
            size="small"
            variant="outlined"
            placeholder="reganaminteractive@gmail"
          />
        </Box>
        <Box width="100%" mb={5}>
          <Button variant="outlined">
            {" "}
            <Email className={classes.paddingRight} /> Test send this newsletter
          </Button>
        </Box>
        <Box width="100%" mt={5} mb={5}>
          <Typography variant="h3">Define recipients</Typography>
        </Box>
        <Box display="flex" alignItems="center" width="100%" mt={5} mb={5}>
          {" "}
          <AddCircle className={classes.paddingRight} />
          <Typography> Choose your lists &amp; segments</Typography>
        </Box>
        <Box width="100%">
          <Dropdown
            placeholder="Lists"
            fluid
            selection
            options={segmensOptions}
            multiple
            width="100%"
          />
        </Box>
        <Box display="flex" alignItems="center" mt={3} mb={3}>
          <Button variant="outlined" onClick={excludeClickHandler}>
            <RemoveCircle className={classes.paddingRight} />
            Exclude lists from this campaign?
          </Button>
        </Box>
        <Box width="100%" className={exclude ? classes.open : classes.close}>
          <Dropdown
            placeholder="Exclude"
            fluid
            selection
            options={excludeOptions}
            multiple
            width="100%"
          />
        </Box>
      </Grid>
      <Grid
        container={true}
        justify="center"
        item={true}
        lg={9}
        md={7}
        sm={8}
        xs={12}
      >
        <img
          src="/static/img/screenshots/emailEditor.PNG"
          alt="Email Editor"
          width="95%"
          height="500px"
        />
      </Grid>
    </Grid>
  );
}
