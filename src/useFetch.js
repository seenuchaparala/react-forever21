import { useState, useEffect } from 'react'

const useFetch = (query) => {
  const key = process.env.REACT_APP_API_KEY
 
  const [data, setData] = useState([])
  useEffect(() => {
    const url = `https://apidojo-forever21-v1.p.rapidapi.com/products/search?query=${query}&rows=60&color_groups=black&start=0`
    const options = {
      method: 'GET',

      headers: {
        'X-RapidAPI-Key': '78bed3a4a8mshbf6e6f99e1ad1a5p14e1ddjsn26dbe05350e0',
        'X-RapidAPI-Host': 'apidojo-forever21-v1.p.rapidapi.com',
      },
    }

    fetch(url, options)
      .then((response) => response.json())
      .then((result) => setData(result.response.docs))
      .catch((error) => console.log(error))
  }, [query, key])
  return data
}

export default useFetch
