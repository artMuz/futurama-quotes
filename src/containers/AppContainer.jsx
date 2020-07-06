import React, { Fragment, useState, useEffect } from 'react';
import Axios from 'axios';
import { HeaderSection } from '../components/Header/HeaderSection';
import { MainContainer } from './MainContainer';
import { HeadingError } from '../components/Headings/Headings';

export function AppContainer() {
  const URL = 'https://futuramaapi.herokuapp.com/api/';
  const [errorInfo, setErrorInfo] = useState();
  const [input, setInput] = useState({});
  const [randomQuote, setRandomQuote] = useState();
  const [quotesPerCharacter, setQuotesPerCharacter] = useState([]);

  function handleInputChange(e) {
    setErrorInfo();
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value
    });
  }
  function handleErrorInfo(response) {
    setErrorInfo(response.status);
  }

  async function handleGetRandomQuote() {
    try {
      const response = await Axios.get(`${URL}quotes/1`);
      setRandomQuote({...response.data[0]});             
    } catch ({ response }) {
      handleErrorInfo(response);
    }
  }

  async function handleGetQuotesPerCharacter() {
    setQuotesPerCharacter([]);
    try {
      const response = await Axios.get(`${URL}characters/${input.characterName}/5`);
      setQuotesPerCharacter(response.data);  
    } catch ({ response }) {
      handleErrorInfo(response);
    }
  }

  useEffect(() => {
    handleGetRandomQuote();
  }, []);

  return(
    <Fragment>
      <HeaderSection 
        randomQuote={randomQuote}
        handleInputChange={handleInputChange}
        handleGetQuotesPerCharacter={handleGetQuotesPerCharacter}
      />
      {quotesPerCharacter.length > 0 ?
        <MainContainer
          quotesPerCharacter={quotesPerCharacter}
        /> : undefined    
      }
      { errorInfo ? 
          <HeadingError>
            You have encountered error: {errorInfo}
          </HeadingError>
        : undefined
      }
    </Fragment>
  );
}