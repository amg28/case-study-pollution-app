import React, { Component } from "react";
import { connect } from "react-redux";
import Main from "./main";
import Sidebar from "./Sidebar";
import { searchPhotoApi, getPollutionApi } from "./Api";
import { debounce } from "../utils/ReusableFunctions";
import styled from "styled-components";

const Container = styled.div`
  html {
    font-size: 10px;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: "OpenSans-Regular", Arial, Helvetica, sans-serif;
  }

  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: auto;
  height: 100vh;

  @media (max-width: 575.98px) {
    display: block;
    main {
      height: 45rem;
    }
    aside {
      padding-top: 3rem;
      padding-bottom: 3rem;
    }
  }
`;

const StyledMain = styled.main`
  background-color: #ffffff;
  height: 100%;
`;

const StyledSidebar = styled.aside`
  background-color: #f3f4f8;
`;

class Pollution extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      width: 0, // REPRESENTS THE SCREEN WIDTH
      height: 0 // REPRESENTS THE SCREEN HEIGHT
    };
    this.debounced = debounce(search => {
      if (search !== "") {
        this.props.searchPhotoApi(search);
        this.props.getPollutionApi(search);
      }
    }, 600);

    this.onChange = this.onChange.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);

    this.props.searchPhotoApi();
    this.props.getPollutionApi();
  }

  onChange(e) {
    this.setState({ search: e.target.value }, () =>
      this.debounced(this.state.search)
    );
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  render() {
    return (
      <Container>
        <StyledMain>
          <Main
            photo={this.props.pollutionState.photos[0]}
            cityName={this.props.pollutionState.pollutionCityName}
            pullutionData={this.props.pollutionState.pollutionData}
          />
        </StyledMain>
        <StyledSidebar>
          <Sidebar
            search={this.state.search}
            onChange={this.onChange}
            weatherData={this.props.pollutionState.weatherData}
            pollutionData={this.props.pollutionState.pollutionData}
          />
        </StyledSidebar>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  pollutionState: state.pollutionState
});
const mapDispatchToProps = {
  searchPhotoApi,
  getPollutionApi
};

export default connect(mapStateToProps, mapDispatchToProps)(Pollution);
