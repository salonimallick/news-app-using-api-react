import { useEffect, useState } from 'react';
import './App.css';
import News from './News';

function App() {


  let [articles,setArticles] = useState([]);
  let [category,setCategory] = useState("india");

useEffect(()=>{

  fetch("https://newsapi.org/v2/everything?q=${category}&from=2024-01-05&apiKey=83559ebdc2474695a35dc7b1973acd7e")
  .then((response)=>response.json())
  .then((news)=>{
    setArticles(news.articles);
    console.log(news.articles);
  })
  .catch((err)=>{
    console.log(err)
  })
},[category])

  return (
    <div className="App">
     
     <header className='header'>

      <h1>News App</h1>

      <input type='text' onChange={(event)=>{
        if(event.target.value!=="")
        {
          setCategory(event.target.value);
        }
        else
        {
          setCategory("india");
        }
      }} placeholder='Search News'></input>

     </header>

    <section className='news-articles'>

      {

        articles.length!==0?

        articles.map((article)=>{
          return(
            <News article={article}/>
          )
        })
        :
        <h3>No news found for your search text</h3>
      }

    </section>
    </div>
  );
} 

export default App;
