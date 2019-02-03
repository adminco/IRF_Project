// Library imports
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { connect } from "react-redux";

// Directory imports
import { styles } from "../assets/styles";
import { resources } from "../assets/resourcesFile";
import { resourcesAction } from "../actions/resourcesAction";
import { resetState } from "../actions/resetStateAction";

class Resources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...resources
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // this method gets user data in realtime
  async handleChange(event) {
    await this.setState({
      [event.target.value]: event.target.checked
    });
    this.props.getResourcesInfo(this.state);
  }

  // this component lifeCycle hook resets the state
  componentDidUpdate(prevProps) {
    if (this.props.resetApplication !== prevProps.resetApplication) {
      this.setState({ ...resources });
    }
  }

  render() {
    const { classes } = this.props;
    console.log(window.screen.availWidth);
    return (
      <div className={classes.root}>
        {/* Resources */}
        <div className={classes.paper_div2}>
          <Typography
            className={classes.paper_typo}
            variant="h5"
            component="h3"
          >
            Resources
          </Typography>
        </div>
        <div className={classes.resources_container}>
          <div>
            <FormGroup column className={classes.formGroup}>
              <FormControlLabel
                control={
                  <Checkbox
                    value="as400"
                    checked={this.state.as400}
                    onChange={this.handleChange}
                  />
                }
                label="AS400"
                className={classes.formLabel}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="network"
                    checked={this.state.network}
                    onChange={this.handleChange}
                  />
                }
                label="Network"
                className={classes.formLabel}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="folderAccess"
                    checked={this.state.folderAccess}
                    onChange={this.handleChange}
                  />
                }
                label="Folder Access"
                className={classes.formLabel}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="rds"
                    checked={this.state.rds}
                    onChange={this.handleChange}
                  />
                }
                label="RDS"
                className={classes.formLabel}
              />
            </FormGroup>
          </div>
          <div>
            <FormGroup column className={classes.formGroup}>
              <FormControlLabel
                control={
                  <Checkbox
                    value="networkRestore"
                    checked={this.state.networkRestore}
                    onChange={this.handleChange}
                  />
                }
                label="Network Restore"
                className={classes.formLabel}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="smartPhone"
                    checked={this.state.smartPhone}
                    onChange={this.handleChange}
                  />
                }
                label="SmartPhone"
                className={classes.formLabel}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="pcOrLaptop"
                    checked={this.state.pcOrLaptop}
                    onChange={this.handleChange}
                  />
                }
                label="PC/Laptop"
                className={classes.formLabel}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="transportationSuite"
                    checked={this.state.transportationSuite}
                    onChange={this.handleChange}
                  />
                }
                label="Transportation Suite"
                className={classes.formLabel}
              />
            </FormGroup>
          </div>
          <div>
            <FormGroup column className={classes.formGroup}>
              <FormControlLabel
                control={
                  <Checkbox
                    value="powerSell"
                    checked={this.state.powerSell}
                    onChange={this.handleChange}
                  />
                }
                label="PowerSell"
                className={classes.formLabel}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="powerNet"
                    checked={this.state.powerNet}
                    onChange={this.handleChange}
                  />
                }
                label="PowerNet"
                className={classes.formLabel}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="fastFax"
                    checked={this.state.fastFax}
                    onChange={this.handleChange}
                  />
                }
                label="FastFax"
                className={classes.formLabel}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="ric"
                    checked={this.state.ric}
                    onChange={this.handleChange}
                  />
                }
                label="RIC"
                className={classes.formLabel}
              />
            </FormGroup>
          </div>
          <div>
            <FormGroup column className={classes.formGroup}>
              <FormControlLabel
                control={
                  <Checkbox
                    value="powerAnalyzer"
                    checked={this.state.powerAnalyzer}
                    onChange={this.handleChange}
                  />
                }
                label="Power Analyzer"
                className={classes.formLabel}
              />
            </FormGroup>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stateResourcesinfo: state
});

const mapActionsToProps = {
  getResourcesInfo: resourcesAction,
  doResetState: resetState
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Resources));
