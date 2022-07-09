import React, { Component } from "react";
import Maca from "./Maca.png";

export default class Exercise extends Component {
  state = {
    nome: "Julio",
    idade: 20,
    comidaFavorita: "Lamen",
    musicas: ["Those Eyes", "Glimpse of Us", "Baby Came Home 2"],
  };

  render() {
    return (
      <div>
        <h1> {this.state.nome} </h1>
        <h2> {this.state.idade} </h2>
        <h3> {this.state.comidaFavorita} </h3>
        <ul>
          <li> {this.state.musicas[0]} </li>
          <li> {this.state.musicas[1]} </li>
          <li> {this.state.musicas[2]} </li>
        </ul>
        <img src={Maca} alt="Maça"></img>
      </div>
    );
  }
}
