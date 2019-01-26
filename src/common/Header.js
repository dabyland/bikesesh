import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false
    };
  }

  onClick = () => {
    this.setState(state => ({ collapsed: !state.collapsed }));
  };

  render() {
    return (
      <div className={styles.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={styles.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.onClick}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={styles.grow}>
              bikesesh.
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  styles: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
