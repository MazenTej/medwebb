import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./footerElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About Us</FooterLinkTitle>
              <FooterLink to="/comment">Leave a comment</FooterLink>
              <FooterLink to="/comment">How it works</FooterLink>
              <FooterLink to="/comment">Testimonials</FooterLink>
              <FooterLink to="/comment">careers</FooterLink>
              <FooterLink to="/comment">Investors</FooterLink>
              <FooterLink to="/comment">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> About Us</FooterLinkTitle>
              <FooterLink to="/comment">Leave a comment</FooterLink>
              <FooterLink to="/comment">How it works</FooterLink>
              <FooterLink to="/comment">Testimonials</FooterLink>
              <FooterLink to="/comment">careers</FooterLink>
              <FooterLink to="/comment">Investors</FooterLink>
              <FooterLink to="/comment">Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About Us</FooterLinkTitle>
              <FooterLink to="/comment">Leave a comment</FooterLink>
              <FooterLink to="/comment">How it works</FooterLink>
              <FooterLink to="/comment">Testimonials</FooterLink>
              <FooterLink to="/comment">careers</FooterLink>
              <FooterLink to="/comment">Investors</FooterLink>
              <FooterLink to="/comment">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> About Us</FooterLinkTitle>
              <FooterLink to="/comment">Leave a comment</FooterLink>
              <FooterLink to="/comment">How it works</FooterLink>
              <FooterLink to="/comment">Testimonials</FooterLink>
              <FooterLink to="/comment">careers</FooterLink>
              <FooterLink to="/comment">Investors</FooterLink>
              <FooterLink to="/comment">Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Mediterranean Taste
            </SocialLogo>
            <WebsiteRights>
              Mediterranean Taste © {new Date().getFullYear()} All rights
              reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink hred="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink hred="/" target="_blank" aria-label="instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink hred="/" target="_blank" aria-label="twitter">
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
