import React from "react";
import Search from "./_utils/Search";
import styled from "styled-components";

const StyledInfoCard = styled.div`
  background-color: #ffffff;
  padding: 2rem 3rem;
  border-radius: 2rem;
  margin: 3rem 2rem 2rem;
  h3 {
    // @include font(rgba(0, 0, 0, 0.87), "OpenSans-SemiBold", 1.8rem, 600);
    font-family: "OpenSans-SemiBold", Arial, Helvetica, sans-serif;
    font-size: 1.8rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.87);
    margin: 0 0 2rem;
  }
  .item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    h4 {
      // @include font(rgba(0, 0, 0, 0.57), "OpenSans-Regular", 1.4rem, 400);
      font-family: "OpenSans-Regular", Arial, Helvetica, sans-serif;
      font-size: 1.4rem;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.57);
      margin: 0;
    }
    h5 {
      // @include font(rgba(0, 0, 0, 0.57), "OpenSans-SemiBold", 1.4rem, 600);
      font-family: "OpenSans-SemiBold", Arial, Helvetica, sans-serif;
      font-size: 1.4rem;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.57);
      margin: 0;
    }
  }

  @media (max-width: 575.98px) {
    margin: 0rem 2rem 3rem;
  }
`;

const Sidebar = props => {
  return (
    <>
      <Search search={props.search} onChange={props.onChange} />
      <StyledInfoCard>
        <h3>Pollution Details</h3>
        {props.pollutionData ? (
          props.pollutionData.main ? (
            <>
              <div className="item">
                <h4>Air Quality Index</h4>
                <h5>{props.pollutionData.main.aqi}</h5>
              </div>
              <div className="item">
                <h4>Сoncentration of CO μg/m3</h4>
                <h5>{props.pollutionData.components.co}</h5>
              </div>
              <div className="item">
                <h4>Сoncentration of NO μg/m3</h4>
                <h5>{props.pollutionData.components.no}</h5>
              </div>
              <div className="item">
                <h4>Сoncentration of NO2 μg/m3</h4>
                <h5>{props.pollutionData.components.no2}</h5>
              </div>
              <div className="item">
                <h4>Сoncentration of O3 μg/m3</h4>
                <h5>{props.pollutionData.components.o3}</h5>
              </div>
              <div className="item">
                <h4>Сoncentration of SO2 μg/m3</h4>
                <h5>{props.pollutionData.components.so2}</h5>
              </div>
              <div className="item">
                <h4>Сoncentration of PM2.5 μg/m3</h4>
                <h5>{props.pollutionData.components.pm2_5}</h5>
              </div>
              <div className="item">
                <h4>Сoncentration of PM10 μg/m3</h4>
                <h5>{props.pollutionData.components.pm10}</h5>
              </div>
              <div className="item">
                <h4>Сoncentration of NH3 μg/m3</h4>
                <h5>{props.pollutionData.components.nh3}</h5>
              </div>
            </>
          ) : (
            <h2>{props.pollutionData.message}</h2>
          )
        ) : (
          <h2>Loading...</h2>
        )}
      </StyledInfoCard>
    </>
  );
};

export default Sidebar;
