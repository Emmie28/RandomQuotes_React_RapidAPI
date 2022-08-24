import axios from 'axios';

const URL = 'https://bodybuilding-quotes1.p.rapidapi.com/random-quote';

const allQuotesURL = 'https://bodybuilding-quotes1.p.rapidapi.com/quotes';
const get_author_URL = 'https://bodybuilding-quotes1.p.rapidapi.com/author-quotes';
const get_author_list_URL = 'https://bodybuilding-quotes1.p.rapidapi.com/authors';

const options = {
  headers: {
    'X-RapidAPI-Key': 'c44a99eb60msh2694cacd04d5bb0p1d6dd9jsnb132a4a5958c',
    'X-RapidAPI-Host': 'bodybuilding-quotes1.p.rapidapi.com'
  }
};


export const option = {

    params: {page: '1'},
    headers: {
      'X-RapidAPI-Key': 'c44a99eb60msh2694cacd04d5bb0p1d6dd9jsnb132a4a5958c',
      'X-RapidAPI-Host': 'bodybuilding-quotes1.p.rapidapi.com'
    }
  };

export const get_author_options = {
    params: {author: 'Arnold'},
    headers: {
      'X-RapidAPI-Key': 'c44a99eb60msh2694cacd04d5bb0p1d6dd9jsnb132a4a5958c',
      'X-RapidAPI-Host': 'bodybuilding-quotes1.p.rapidapi.com'
    }
  };

 export const author_list_options = {
    headers: {
      'X-RapidAPI-Key': 'c44a99eb60msh2694cacd04d5bb0p1d6dd9jsnb132a4a5958c',
      'X-RapidAPI-Host': 'bodybuilding-quotes1.p.rapidapi.com'
    }
  };

export const getAuthorList = async () => {
  try{
    const {data} = await axios.get(get_author_list_URL, author_list_options);
      return data;
  } catch ( error ) {
    console.log(error)
  }
}

export const getAuthorQuotes = async () => {
  try{
    const { data } = await axios.get(get_author_URL, get_author_options);
      return data;
  } catch ( error ) {
    console.log(error)
  }
}


export const getAllQuotes = async () => {
    try{
        const { data } = await axios.get(allQuotesURL, option);
            return data;
    } catch ( error ) {
        console.log(error)
    }
}


export const getRandomQuotes = async () => {
    try {
        const { data } = await axios.get(URL, options);
            return data;
    } catch (error) {
        console.log(error)
    }
}



