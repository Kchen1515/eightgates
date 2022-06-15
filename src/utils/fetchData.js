export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': '36b4c2e54fmsh11704c83f6137dbp12ac86jsn347961078154',
    },
  };


export const fetchData = async (url,options) => {
    const response = await fetch(url, options)
    const data = await response.json()

    return data
}