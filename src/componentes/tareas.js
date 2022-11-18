import React, { Component } from "react";

class Tareas extends Component {
  render() {
       // porpiedad map permite interar con cada elemtnto del arreglo o lista
       // elemto key se le da un elemto unico en este caso el id */}
    return this.props.task.map((e) => (
      <p key={e.id}>
        {e.titulo} | {e.descripcion} - {e.id}
        <input type = "checkbox"/>
        <button>
            Eliminar tareas
        </button>
      </p>
    ));
  }
}

export default Tareas;
