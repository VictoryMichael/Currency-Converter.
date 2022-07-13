import React, {useEffect, useState} from 'react'
import axios from 'axios'






const NewsFeed = () => {

  const [article, setArticle] = useState(null)


  useEffect(() => {
  
  const options = {
    method: 'GET',
    url: 'https://crypto-news-live3.p.rapidapi.com/news',
    headers: {
      'X-RapidAPI-Key': '652722c4d9msh77bd349813b7fa7p148518jsn7736b8f1493b',
      
      'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com'
    }
  };
  
  axios.request(options).then((response) => {
    console.log(response.data)
    setArticle(response.data)
  }).catch((error) => {
    console.error(error)
  })
    }, [])
       


const first10Article = article?.slice(0,7)

  return (
    <div className='newsfeed'>
       <h2>Crypto News</h2>
    {first10Article?.map(article => (<p> {article.title} </p>  ))}
  
    </div>
  )
}

export default NewsFeed