// Library imports
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { connect } from "react-redux";

// Directory imports
import { styles } from "../assets/styles";
import { newUserInfo } from "../actions/newUserAction";

const priorities = [
  {
    value: "ASAP",
    label: "ASAP"
  },
  {
    value: "Necessity(Two weeks)",
    label: "Necessity(Two weeks)"
  },
  {
    value: "FYI(One Month)",
    label: "FYI(One Month)"
  }
];

class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameOfUser: "",
      mimicUser: "",
      position: "",
      startDate: "",
      phoneExt: "",
      priority: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // this method gets user data in realtime
  async handleChange(event) {
    await this.setState({
      [event.target.name]: event.target.value
    });
    this.props.getNewUserInfo(this.state);
  }

  // this component lifeCycle hook resets the state
  componentDidUpdate(prevProps) {
    if (this.props.resetApplication !== prevProps.resetApplication) {
      this.setState({ priority: "" });
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {/* New User Request */}
        <div className={classes.paper_div2}>
          <Typography
            className={classes.paper_typo}
            variant="h5"
            component="h3"
          >
            New User Request
          </Typography>
        </div>
        <TextField
          name="nameOfUser"
          id="nameOfUser"
          label="Name of New User"
          className={classes.textField}
          margin="normal"
          onChange={this.handleChange}
        />
        {this.state.nameOfUser? ( <TextField
          required
          helperText="Required"
          name="mimicUser"
          id="mimicUser"
          label="Mimic User"
          className={classes.textField}
          margin="normal"
          onChange={this.handleChange}
        />) : ( <TextField
          name="mimicUser"
          id="mimicUser"
          label="Mimic User"
          className={classes.textField}
          margin="normal"
          onChange={this.handleChange}
        />)}
        {this.state.nameOfUser? (<TextField
          required
          helperText="Required"
          name="position"
          id="position"
          label="Position"
          className={classes.textField}
          margin="normal"
          onChange={this.handleChange}
        />): (<TextField
          name="position"
          id="position"
          label="Position"
          className={classes.textField}
          margin="normal"
          onChange={this.handleChange}
        />)}
        
        <TextField
          name="startDate"
          id="startDate"
          label="Start Date"
          className={classes.textField}
          margin="normal"
          onChange={this.handleChange}
        />
        <TextField
          name="phoneExt"
          id="phoneExt"
          label="Phone-Ext"
          className={classes.textField}
          margin="normal"
          onChange={this.handleChange}
        />
        <TextField
          name="priority"
          id="standard-select-currency"
          select
          value={this.state.priority}
          className={classes.textField}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          helperText="Priority"
          margin="normal"
          onChange={this.handleChange}
        >
          {priorities.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stateNewUserinfo: state.newUser
});

const mapActionsToProps = {
  getNewUserInfo: newUserInfo
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(NewUser));
