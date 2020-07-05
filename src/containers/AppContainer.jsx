import React, { Fragment, useState, useEffect } from 'react';
import Axios from 'axios';
import { HeaderSection } from '../components/Header/HeaderSection';
import { MainContainer } from './MainContainer';

export function AppContainer() {
  const URL = 'https://futuramaapi.herokuapp.com/api/';
  const [input, setInput] = useState({});
  const [randomQuote, setRandomQuote] = useState();
  const [quotesPerCharacter, setQuotesPerCharacter] = useState([]);

  const handleInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  });

  async function handleGetRandomQuote(e) {
    try {
      const response = await Axios.get(`${URL}quotes/1`);
      setRandomQuote({...response.data[0]});              
    } catch (error) {
        throw Error(error);
    }
  }

  async function handleGetQuotesPerCharacter() {
    try {
      const response = await Axios.get(`${URL}characters/${input.characterName}/5`);
      setQuotesPerCharacter(response.data);   
    } catch (error) {
        throw Error(error);
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
        {quotesPerCharacter.length === 5 ?
          <MainContainer
            quotesPerCharacter={quotesPerCharacter}
          /> : undefined    
    }
      </Fragment>
    );
}