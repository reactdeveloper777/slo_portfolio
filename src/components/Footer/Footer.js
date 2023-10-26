import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href="tel:7696986437">+91 7696986437</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href="mailto:abirla77ar@gmail.com">abirla77ar@gmail.com</LinkItem>
      </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>Innovating one project at a  time</Slogan>
          </CompanyContainer>
        
        <SocialContainer>
          <SocialIcons href='https://github.com/reactdeveloper777' target='_blank'>
        <AiFillGithub size="3rem"/>
      </SocialIcons>
        </SocialContainer>
        <SocialContainer>
        <SocialIcons href='https://www.linkedin.com/in/mr-akash-86ba071b7' target='_blank'>
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
     </SocialContainer>
        <SocialContainer>
        <SocialIcons href='https://instagram.com/mr_akash_birla?igshid=OGQ5ZDc2ODk2ZA==' target='_blank'>
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
        </SocialContainer>
        </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
