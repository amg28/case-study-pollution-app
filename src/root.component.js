import React from "react";
import { Provider } from "react-redux";
import { Pollution } from "./components/pollution";
import configureStore from "./store";

// import "./assets/scss/style.scss";

export default function Root(props) {
  return (
    <Provider store={configureStore()}>
      <Pollution />
    </Provider>
  );
}
