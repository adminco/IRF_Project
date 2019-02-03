// Library imports
import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

// Directory imports
import "./App.css";
import { styles } from "./assets/styles";
import Applicants from "./components/Applicants";
import NewUser from "./components/NewUser";
import Request from "./components/Request";
import Resources from "./components/Resources";
import { resetState } from "./actions/resetStateAction";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: false,
      resetApplication: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // this asynchronous method handles submission
  async handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    console.log("Form submitted!");
    try {
      await fetch(`http://localhost:5000/form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.props.stateResourcesinfo)
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          console.log(JSON.stringify(myJson));
        });
    } catch (error) {
      console.log(error);
    }
    await this.setState({ showAlert: true, resetApplication: true });
    // Hide send alert and reset state after 3sec
    await setTimeout(() => {
      this.setState({ showAlert: false, resetApplication: false });
      this.props.doResetState(true);
    }, 3000);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {/* App Bar */}
        <AppBar className={classes.appBar} position="static" color="default">
          <Toolbar>
            <Typography className={classes.typo} variant="h6" color="inherit">
              INTERNAL REQUEST FORM(IRF)
            </Typography>
          </Toolbar>
          <Toolbar>
            <Typography className={classes.typo2} variant="h5" color="inherit">
              Request for Information Systems Services
            </Typography>
          </Toolbar>
        </AppBar>
        <Paper className={classes.paper}>
          <form onSubmit={this.handleSubmit}>
            <Applicants />
            <NewUser resetApplication={this.state.resetApplication} />
            <Request />
            <Resources resetApplication={this.state.resetApplication} />
            <Button
              type="submit"
              variant="contained"
              size="large"
              color="secondary"
              className={classes.btn}
            >
              Submit
            </Button>
            {this.state.showAlert ? (
              <div className={classes.paper_div3}>
                <Typography
                  className={classes.paper_typo_alert}
                  variant="h5"
                  component="h3"
                >
                  Your form has been submitted.
                </Typography>
              </div>
            ) : null}
          </form>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stateResourcesinfo: state
});

const mapActionsToProps = {
  doResetState: resetState
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(App));
