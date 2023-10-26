import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider divider/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    I've worked with a range a technologies in the web development world. From Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <picture>
        <DiReact size="3rem"/>
        </picture>
       <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Experience With<br/>
          React.js
          </ListParagraph>
          </ListContainer>
         </ListItem>
         <ListItem>
          <picture>
          <DiFirebase size="3rem"/>
          </picture>
        
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Experience With<br/>
          Node and Databases
          </ListParagraph>
          </ListContainer>
         </ListItem>
         <ListItem>
          <picture>
          <DiZend size="3rem"/>
          </picture>
        
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>Experience With<br/>
          React.js
          </ListParagraph>
          </ListContainer>
         </ListItem>
    </List>
    <SectionDivider coloAlt/>

    
  </Section>
);

export default Technologies;
