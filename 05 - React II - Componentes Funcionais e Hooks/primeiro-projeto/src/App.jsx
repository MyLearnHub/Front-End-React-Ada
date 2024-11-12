import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import { ThreeDots } from "react-loader-spinner";
// import { Counter } from "./components/Counter/Counter";

import axios from "axios";
// Componente em classe é uma classe que herda a classe Component do React,
// e retorna HTML dentro do método render.

// Componente funcional é uma função que retorna HTML

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const response = await axios.get(
        "https://api.spaceflightnewsapi.net/v4/articles/"
      );
      const newsData = response.data;

      console.log(newsData);
      setNews(newsData.results);
    }

    loadNews();
  }, []);

  // Método responsável por renderizar o conteúdo HTML do nosso componente
  return (
    <>
      <Navbar />

      {/* <Counter /> */}

      <section id="articles">
        {news.length === 0 ? (
          <div
            style={{
              height: "400px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="white"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
          news.map((article) => {
            return (
              <Article
                key={article.id}
                title={article.title}
                provider={article.news_site}
                description={article.summary}
                thumbnail={article.image_url}
              />
            );
          })
        )}
      </section>
    </>
  );
}

export default App;
