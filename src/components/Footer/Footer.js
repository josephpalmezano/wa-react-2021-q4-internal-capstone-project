import styled from "styled-components";

const FooterWrapper = styled.div`
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: #263238;
  text-align: center;
  color: white;
`;

const Footer = () => (
  <FooterWrapper>Ecommerce created during Wizeline’s Academy React Bootcamp</FooterWrapper>
);

export default Footer;