import React, { Component } from "react";
import "./App.css";
import tareas from "./ejemplos/tareas.json";
import Tareas from "./componentes/tareas";

//componente inicial
class App extends Component {
  state = {
    tareas: tareas,
  };

  render() {
    return (
      <div>
      {<Tareas task = {this.state.tareas}/>}
      </div>
    );
  }
}

export default App;
