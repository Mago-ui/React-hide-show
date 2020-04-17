import React from "react";
import "./App.css";
/*
function Hello(props) {
  return (
    <div>
      {props.text}
      {props.subtitle}
    </div>
  );
}
*/

class Component extends React.Component {
  state = {
    show: true,
  };

  render() {
    if (this.state.show) {
      return (
        <div>
          {this.props.text}
          {this.props.subtitle}

          <div onClick={() => this.setState({ show: false })}>click</div>
        </div>
      );
    } else {
      return <h1>no hay nada :v</h1>;
    }
  }
}

function App() {
  return (
    <div className="App">
      <div>Hello World</div>
      <Component title="payaso" sub="lol"></Component>
      <Component title="payas" sub="lol"></Component>
      <Component title="payas" sub="lol"></Component>
    </div>
  );
}

export default App;
