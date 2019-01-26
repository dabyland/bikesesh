import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import info from "@material-ui/icons/Info";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";

const styles = {
  list: {
    width: 250
  }
};

class SideNav extends React.Component {
  render() {
    const { classes, collapsed } = this.props;

    console.log(collapsed);

    const sideList = (
      <div className={classes.list}>
        <List>Trails</List>
        <Divider />
        <List>{info} About</List>
      </div>
    );

    return (
      <div>
        <Button onClick={collapsed}>Open Left</Button>
        <Drawer open={collapsed}>
          <div tabIndex={0} role="button">
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

SideNav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SideNav);
