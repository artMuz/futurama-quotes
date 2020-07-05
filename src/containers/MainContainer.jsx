import React, { useEffect, useState } from 'react';
import { Main } from '../components/Main/Main'
import { HeadingMain } from '../components/Headings/Headings';
import { UnorderedList, ListItem } from '../components/List/List';
import { ImageRelatve, ImageContainer } from '../components/ImageComponent/ImageComponent';

export function MainContainer({ quotesPerCharacter }) {
  const [characterInfo, setCharacterInfo] = useState({});

  function getCharacterInfo() {
    setCharacterInfo({
      name: quotesPerCharacter[0].character,
      image: quotesPerCharacter[0].image,
    });
  }

  function handleListRender() {
    return(
      quotesPerCharacter.map((item, index) => {
        return(
            <ListItem 
              key={index}
            >
              <q>{item.quote}</q>
            </ListItem>              
        )
      })
    )
  }

  useEffect(() => {
    getCharacterInfo();
  }, [quotesPerCharacter]);

  return(
    <Main>
      <HeadingMain>{characterInfo.name}'s quotes</HeadingMain>
      <ImageContainer>
        <ImageRelatve
          src={characterInfo.image}
        />
      </ImageContainer>
      <UnorderedList>
        {handleListRender()}
      </UnorderedList>
    </Main>
  );
}