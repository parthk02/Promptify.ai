import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Brand>Promptify.AI</Brand>
      <Text>© {new Date().getFullYear()} Crafted with ❤️ by Parth & Shreya.</Text>
    </Container>
  );
};

const Container = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.navbar};
  color: ${({ theme }) => theme.menu_primary_text};
  font-size: 14px;
  text-align: center;
  padding: 20px 0;
  font-weight: 400;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.05);
  margin-top: auto;

  @media only screen and (max-width: 600px) {
    font-size: 12px;
    padding: 16px 0;
  }
`;

const Brand = styled.h4`
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 5px 0;
`;

const Text = styled.p`
  margin: 0;
  opacity: 0.7;
`;

export default Footer;
