// Library imports
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";

// Directory imports
import { styles } from "../assets/styles";
import { requests } from "../actions/requestAction";

class Request extends Component {
  constructor(props) {
    super(props);
    this.state = {
      request: "",
      someBenefits: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // this method gets user data in realtime
  async handleChange(event) {
    await this.setState({
      [event.target.name]: event.target.value
    });
    this.props.getRequestInfo(this.state);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {/* Requests */}
        <div className={classes.paper_div2}>
          <Typography
            className={classes.paper_typo}
            variant="h5"
            component="h3"
          >
            Request
          </Typography>
        </div>
        <TextField
          name="request"
          id="request"
          className={classes.textArea}
          fullWidth
          helperText="Request"
          margin="normal"
          variant="filled"
          onChange={this.handleChange}
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          name="someBenefits"
          id="someBenefits"
          className={classes.textArea2}
          fullWidth
          helperText="Benefits to be realized upon completing request"
          margin="normal"
          variant="filled"
          onChange={this.handleChange}
          InputLabelProps={{
            shrink: true
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stateRequestinfo: state.formRequest
});

const mapActionsToProps = {
  getRequestInfo: requests
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Request));
