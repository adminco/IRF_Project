// Library imports
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";

// Directory imports
import { styles } from "../assets/styles";
import { applicantInfo } from "../actions/applicantsAction";
import { resetState } from "../actions/resetStateAction";


class Applicants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reqestedBy: "",
      department: "",
      location: "",
      manager: "",
      date: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // this method gets user data in realtime
  async handleChange(event) {
    await this.setState({
      [event.target.name]: event.target.value
    });
    this.props.getApplicantInfo(this.state);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {/* Applicant's Info */}
        <div className={classes.paper_div}>
          <Typography
            className={classes.paper_typo}
            variant="h5"
            component="h3"
          >
            Applicant's Information
          </Typography>
        </div>
        <TextField
          required
          name="reqestedBy"
          id="reqestedBy"
          label="Requested By"
          className={classes.textField}
          margin="normal"
          onChange={this.handleChange}
        />
        <TextField
          name="department"
          id="department"
          label="Department"
          className={classes.textField}
          margin="normal"
          onChange={this.handleChange}
        />
        <TextField
          name="location"
          id="location"
          label="Location"
          className={classes.textField}
          margin="normal"
          onChange={this.handleChange}
        />
        <TextField
          name="manager"
          id=" manager"
          label="Manager"
          className={classes.textField}
          margin="normal"
          onChange={this.handleChange}
        />
        {this.state.reqestedBy? ( <TextField
          required
          helperText = 'Required'
          name="date"
          id="date"
          label="Date"
          className={classes.textField}
          margin="normal"
          onChange={this.handleChange}
        />): ( <TextField
          name="date"
          id="date"
          label="Date"
          className={classes.textField}
          margin="normal"
          onChange={this.handleChange}
        />)}
       
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stateApplicantinfo: state.applicantInfo,
  resetStateStatus: state.resetForm
});

const mapActionsToProps = {
  getApplicantInfo: applicantInfo,
  doResetState: resetState
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Applicants));
