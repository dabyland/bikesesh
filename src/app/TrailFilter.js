import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";

class TrailFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
    };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });

    // TODO: Do some sorting on trails
    // props.trails.sort((a, b) => parseFloat(b.starVotes) - parseFloat(a.starVotes));
  };

  render() {
    const { anchorEl } = this.state;

    console.log("render");

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Filter Trails
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Popularity</MenuItem>
          <MenuItem onClick={this.handleClose}>Closest</MenuItem>
        </Menu>
      </div>
    );
  }
}

TrailFilter.propTypes = {
  trails: PropTypes.array
};

export default TrailFilter;