import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  //not required by react but required by javascript whenever class is created. This is where we can initialize state
  // constructor(props) {
  //   super(props);

  //   this.state = { lat: null, long: null, errorMsg: "" }; 
  // }

  state = { lat: null, long: null, errorMsg: "" };//where we initialize state object, THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT TO STATE

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
       
      (position) => {this.setState({
        lat: position.coords.latitude, 
        long: position.coords.longitude
      })},
      //handle error using state
      (err) => {this.setState({ 
        errorMsg: err.message
       })}

    );
  }

  //React says we have to define render()
  render() {
    if (this.state.errorMsg && !this.state.lat) {
      return <div>Error: {this.state.errorMsg}</div>;
    }
    if (this.state.lat && !this.state.errorMsg) {
      return (
        
          <SeasonDisplay lat={this.state.lat} />
      );
    }
    return <h2>Loading...</h2>;
  }
}

const root = ReactDOM.render(<App />, document.querySelector("#root"));
