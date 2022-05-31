import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper,
     FooterLinkItems, FooterLinkTitle, FooterLink,
SocialMedia, SocialMediaWrap, SocialLogo,WebSiteRights, SocialIcons, SocialIconLink, FooterLinkHeading } from './FooterElements';
const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                          <FooterLink to="/login">How It Works</FooterLink>
                          <FooterLink to="/login">Testimonials</FooterLink>
                          <FooterLink to="/login">Careers</FooterLink>
                          <FooterLink to="/login">Investors</FooterLink>
                          <FooterLink to="/login">Terms of Service</FooterLink>
                    </FooterLinkItems>
                     <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                          <FooterLink to="/login">How It Works</FooterLink>
                          <FooterLink to="/login">Testimonials</FooterLink>
                          <FooterLink to="/login">Careers</FooterLink>
                          <FooterLink to="/login">Investors</FooterLink>
                          <FooterLink to="/login">Terms of Service</FooterLink>
                    </FooterLinkItems> 
                </FooterLinksWrapper>


                <FooterLinksWrapper>
                <FooterLinkItems>
                          <FooterLinkHeading to="">Intada Canada</FooterLinkHeading>
                          <FooterLink to="">31 Slater Circle</FooterLink>
                          <FooterLink to="">Brampton,Ontario</FooterLink>
                          <FooterLink to="">Canada</FooterLink>
                          <FooterLink to="">+12269781793</FooterLink>
                          <FooterLink to="">+19057818071</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>

                <FooterLinksWrapper>
                    <FooterLinkItems>
                          <FooterLinkHeading to="">Intada India</FooterLinkHeading>
                          <FooterLink to="">309,Suprabh</FooterLink>
                          <FooterLink to="">Bakeri City,Ahemedabad</FooterLink>
                          <FooterLink to="">India</FooterLink>
                          <FooterLink to="">+91 7560876964</FooterLink>
                          
                          
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                          <FooterLink to="/login">Instagram</FooterLink>
                          <FooterLink to="/login">Facebook</FooterLink>
                          <FooterLink to="/login">Youtube</FooterLink>
                          <FooterLink to="/login">Twitter</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        Intada 
                    </SocialLogo>
                    <WebSiteRights>Intada © {new Date().getFullYear()} All rights Reserved.</WebSiteRights>
                    <SocialIcons>
                       <SocialIconLink href="/" traget="_blank" area-label="facebook"><FaFacebook/></SocialIconLink>
                       <SocialIconLink href="/" traget="_blank" area-label="Instagram"><FaInstagram/></SocialIconLink>
                       <SocialIconLink href="/" traget="_blank" area-label="Youtube"><FaYoutube/></SocialIconLink>
                       <SocialIconLink href="//www.twitter.com" traget="_blank" area-label="Twitter"><FaTwitter/></SocialIconLink>
                       <SocialIconLink href="/" traget="_blank" area-label="Linkedin"><FaLinkedin/></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer> 
  )
}

export default Footer;