import { useEffect, useState } from "react";
import Article from "./components/Article";
import Filter from "./components/Filter";

import "./index.css";

const apiKey = "124ddb3977044c3f93f99554e6a04326";
const pais = "us";
const autor = "TN";
const urlCountry = `https://newsapi.org/v2/top-headlines?country=${pais}&apiKey=${apiKey}`;

function App() {
  const [notice, setNotice] = useState([]);

  useEffect(() => {
    fetch(urlCountry)
      .then((res) => res.json())
      .then((data) => {
        const filteredArticles = data.articles.filter((article) => {
          return !article.title.includes("[Removed]");
        });

        setNotice(filteredArticles);
      });
  }, []);

  function buscador(query) {
    let url = `https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.totalResults != 0) {
          const filteredArticles = data.articles.filter((article) => {
            return !article.title.includes("[Removed]");
          });
          setNotice(filteredArticles);
        } else {
          alert("no se encontraron resultados");
        }
      });
  }
  function buscadorCategory(query) {
    const urlCategory = `https://newsapi.org/v2/top-headlines?category=${query}&apiKey=${apiKey}`;
    fetch(urlCategory)
      .then((res) => res.json())
      .then((data) => {
        if (data.totalResults != 0) {
          const filteredArticles = data.articles.filter((article) => {
            return !article.title.includes("[Removed]");
          });
          setNotice(filteredArticles);
        } else {
          alert("no se encontraron resultados");
        }
      });
  }
  return (
    <>
      <div className="bg-gray-300 w-full h-screen justify-center overflow-y-auto flex flex-wrap gap-2 p-4">
        <div className="w-full h-auto flex items-center justify-center">
          <Filter buscador={buscador} category={buscadorCategory} />
        </div>
        <Article notice={notice} />
      </div>
    </>
  );
}

export default App;
