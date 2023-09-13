import { useEffect, useState } from 'react';
import Article from './components/Article';

import './index.css';

const apiKey = '124ddb3977044c3f93f99554e6a04326';
const pais = 'us';
const autor = 'TN';
const urlARG = `https://newsapi.org/v2/top-headlines?country=${pais}&apiKey=${apiKey}`;

function App() {
  const [notice, setNotice] = useState([]);

  useEffect(() => {
    fetch(urlARG)
      .then((res) => res.json())
      .then((data) => {
        const filteredArticles = data.articles.filter((article) => {
          return !article.title.includes('[Removed]');
        });

        setNotice(filteredArticles);
      });
  }, []);

  return (
    <>
      <div className='bg-gray-300 w-full h-screen justify-center overflow-y-auto flex flex-wrap gap-2 p-4'>
        <Article notice={notice} />
      </div>
    </>
  );
}

export default App;
