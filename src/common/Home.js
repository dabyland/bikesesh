import React, { Component } from "react";
import styled from "react-emotion";
import ExpansionPanel from "./ExpansionPanel";
import Button from "@material-ui/core/Button";

const Container = styled("div")`
  display: flex;
`;

const button = {
  margin: "12px"
};

class Home extends Component {
  constructor() {
    super();
    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      trails: []
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        });
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  showTrails() {
    fetch(
      `https://www.mtbproject.com/data/get-trails?lat=${this.state.latitude}&lon=${
        this.state.longitude
      }&maxDistance=10&key=200254031-7576673c2385abe3db498ef8c9ec9e60`
    )
      .then(results => results.json())
      .then(data => {
        let trails = data.trails.map(trail => trail);
        this.setState({ trails: trails });
        console.log("state", this.state.trails);
      });
  }

  render() {
    const { trails } = this.state;

    return (
      <Container>
        <div>
          {this.state.latitude ? (
            <Button
              style={button}
              variant="contained"
              color="primary"
              onClick={() => {
                this.showTrails();
              }}
            >
              Show Trails Nearby
            </Button>
          ) : null}
        </div>
        <ExpansionPanel trails={trails} />
      </Container>
    );
  }
}

export default Home;
