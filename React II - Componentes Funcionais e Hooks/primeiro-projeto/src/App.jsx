import React from "react";
import "./styles/App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
// import { Counter } from "./components/Counter/Counter";

import article1Img from "./assets/images/article1.png";
import article2Img from "./assets/images/article2.jpg";
import article3Img from "./assets/images/article3.jpg";
// Componente em classe é uma classe que herda a classe Component do React,
// e retorna HTML dentro do método render.

// Componente funcional é uma função que retorna HTML

class App extends React.Component {
  // Método responsável por renderizar o conteúdo HTML do nosso componente
  render() {
    return (
      <>
        <Navbar />

        {/* <Counter /> */}

        <section id="articles">
          <Article
            title="Designing Dashboards"
            provider="NASA"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            nam, tempora a. Repellendus odit, eum nemo repudiandae nesciunt
            eaque error!"
            thumbnail={article1Img}
          />
          <Article
            title="Vibrant Portraits of 2020"
            provider="SpaceNews"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            nam, tempora a. Repellendus odit, eum nemo repudiandae nesciunt
            eaque error!"
            thumbnail={article2Img}
          />
          <Article
            title="36 Days of Malayalam type"
            provider="Spaceflight Now"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            nam, tempora a. Repellendus odit, eum nemo repudiandae nesciunt
            eaque error!"
            thumbnail={article3Img}
          />
          <Article
            title="Designing Dashboards"
            provider="NASA"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            nam, tempora a. Repellendus odit, eum nemo repudiandae nesciunt
            eaque error!"
            thumbnail={article1Img}
          />
        </section>
      </>
    );
  }
}

export default App;
