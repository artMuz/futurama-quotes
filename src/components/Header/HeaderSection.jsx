import React from 'react';
import { HeadingFancy, SubHeading } from '../Headings/Headings';
import { Input } from '../Inputs/Inputs';
import HeaderImage from '../../images/logo.png';
import { ImageComponent } from '../ImageComponent/ImageComponent';
import { Header } from './Header';
import { Button } from '../Button/Button';

export function HeaderSection({ name, quotesNumber, randomQuote, handleInputChange, handleGetQuotesPerCharacter }) {
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
      <SubHeading>Type the name of a Futurama character and pick a number of quotes.</SubHeading>
      <Input
        width="20rem"
        onChange={handleInputChange}
        name="characterName"
        type="text"
        placeholder="Insert the name"
        value={name || ''}
      />
      <Input
        width="5rem"
        type="number"
        min={1}
        max={10}
        name="quotesNumber"
        onChange={handleInputChange}
        value={quotesNumber}
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