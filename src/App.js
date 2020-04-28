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

  taggle = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    if (this.state.show) {
      return (
        <div id="lol">
          {this.props.text}
          {this.props.sub}

          <div onClick={this.taggle}>click</div>
          {
            //<div onClick={() => this.setState({ show: false })}>click</div>
          }
        </div>
      );
    } else {
      return (
        <div>
          <h1>no hay mas cursos</h1>
          <div onClick={this.taggle}>again</div>
        </div>
      );
    }
  }
}

function App() {
  return (
    <div className="App">
      <div>Estos son Componentes</div>
      <Component
        text="El señor de los anillos"
        sub="Las dos Torres"
      ></Component>
      <Component text="El Hobbit" sub="Tolkien"></Component>
      <Component text="Juego de Tronos" sub="Temporada 7"></Component>
    </div>
  );
}

export default App;
