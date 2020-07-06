import React from 'react';
import { HeadingFancy } from '../Headings/Headings';
import { TextInput } from '../TextInput/TextInput';
import HeaderImage from '../../images/logo.png';
import { ImageComponent } from '../ImageComponent/ImageComponent';
import { Header } from './Header';
import { Button } from '../Button/Button';

export function HeaderSection({ randomQuote, handleInputChange, handleGetQuotesPerCharacter }) {
  return (
    <Header>
      <ImageComponent
        height = "8rem"
        width = "25rem"
        src={HeaderImage}
      />
      
      {randomQuote && 
        <HeadingFancy>
          <q>{randomQuote.quote}</q>
          {` (${randomQuote.character})`}
        </HeadingFancy>
      }
      <TextInput
        onChange={handleInputChange}
        name="characterName"
        type="text"
        placeholder="Insert your favourite Futurama character"
      />
      <Button
        type="button"
        onClick={handleGetQuotesPerCharacter}
      >
        Submit
      </Button>
    </Header>
  );
}