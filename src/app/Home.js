import React, { Component } from "react";
import styled from "react-emotion";
import ExpansionPanel from "./ExpansionPanel";
import Button from "@material-ui/core/Button";
import TrailFilter from "./TrailFilter";

const Container = styled("div")`
  display: flex;
`;

const Inputs = styled("div")`
  position: "absolute";
  justify-content: "center";
  align-items: "center";
  background-color: "pink";
  margin: 0 auto;
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

  showTrails() {
    if (this.state.latitude && this.state.longitude) {
      fetch(
        `https://www.mtbproject.com/data/get-trails?lat=${this.state.latitude}&lon=${
          this.state.longitude
        }&maxDistance=10&key=200254031-7576673c2385abe3db498ef8c9ec9e60`
      )
        .then(results => results.json())
        .then(data => {
          const trails = data.trails.map(trail => trail);
          this.setState({ trails: trails });
        });
    }
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          loading: false,
          error: null
        });
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  render() {
    const { trails } = this.state;

    return (
      <Container>
        <Inputs>
          <Button
            style={button}
            variant="contained"
            color="primary"
            onClick={this.showTrails.bind(this)}
          >
            Show Nearby Trails
          </Button>
          {trails.length >= 1 ? <TrailFilter trails={trails} /> : null}
        </Inputs>
        <ExpansionPanel trails={trails} />
      </Container>
    );
  }
}

export default Home;
