import React from "react";
import "./App.css";

//PROPS SON PARAMETROS
// function Holapapu(props) {
//   return <div id="hola">
//   <h1>{props.subtitulo}</h1>
//   {props.mitexto}
//   </div>;
// }

//CLASE DEBE TENER EXTENDER O HEREDAR con extends
class Holapapu extends React.Component {
  //propiedad state almacena datos del componente y cambia su estado 
  state = {
    show: true,
  };

  //metodo toggleShow()
  toggleShow = ()=>{
    //! EL ! HACE QUE CAMBIE EL ESTADO DE TUR A FALSE O VISEVERSA
    this.setState({show: !this.state.show})
  }
  //llama un metodo llamado render que tiene un return que permite retornar el elemento
  render() {
    //si show es true retorna
    if (this.state.show) {
      return (
        <div id="hola">
          {/* this ayuda a que se pueda utilizar como propiedad */}
          <h1>{this.props.subtitulo}</h1>
          {this.props.mitexto}
          {/* agragamos un boton */}
          <button onClick={this.toggleShow}>Cambiar estado</button>
        </div>
      );
    }else{
      //retorna el estado anterior
      return <h1>There are not element
        <button onClick={this.toggleShow}>Cambiar estado</button>
      </h1>
    }
  }
}

function App() {
  return (
    <div>
      This is my component:
      <Holapapu mitexto="Bienvenido" subtitulo="Soy React" />
      <Holapapu mitexto="hola Rodry" subtitulo="loremp ispum" />
      <Holapapu mitexto="Adios" subtitulo="subtitulo 3" />
    </div>
  );
}

export default App;
