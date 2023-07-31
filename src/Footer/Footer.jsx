import { FooterWrapper, GitIcon, LinkedinIcon } from "./Footer.styled"

export const Footer = () => {
    return (
      <FooterWrapper>
        <a href="https://github.com/Taisiya22">
          <GitIcon />
        </a>
        <a href="https://www.linkedin.com/in/taisiya-tomashevska/">
          <LinkedinIcon />
        </a>
      </FooterWrapper>
    );
 }