import styled from "styled-components";

const NavHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 18px;
  @media (max-width: 640px) {
    flex-direction: column;
    max-height: 140px;
  }
`;

const Logo = styled.h1`
  text-transform: uppercase;
  font-weight: 300;
  line-height: 1;
  color: #263238;

  span {
    font-weight: 700;
    color: #d32f2f;
  }
`;

const NavigationItem = styled.a`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  padding: 0 10px;
  color: ${props => props.active ? "#d32f2f" : "#263238"};
`;

const NavigationWrapper = styled.div`
  @media (max-width: 640px) {
    margin-top: 5px;
  }
`;

const Cart = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  float: right;

  .menu {
    font-size: 30px;
    color: #263238;
  }

  @media (max-width: 640px) {
    top: -40px;
    align-self: flex-end;
  }
`;

const CartIcon = styled.a`
  font-size: 30px;
  color: #263238;
`;

const CartQuant = styled.div`
    position: absolute;
    bottom: 80%;
    right: 0;
    color: white;
    font-size: 14px;
    font-weight: 900;
    background: #d32f2f;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    border-radius: 50%;
`;

const SearchInput = styled.input`
  height: 40px;
  width: 70%;
  border-radius: 0.5em;
  padding: 5px;

  @media (max-width: 640px) {
    width: 60%;
    margin: 5px 20%;
  }
`;

const RightWrapper = styled.div`
  width: 20%;
  @media (max-width: 640px) {
    width: 100%;
  }
`;


const Header = () => (
  <NavHeader>
    <Logo><span>WIZE</span>SNEAKERS</Logo>
    <NavigationWrapper>
      <NavigationItem active>MEN</NavigationItem>
      <NavigationItem>WOMEN</NavigationItem>
      <NavigationItem>KIDS</NavigationItem>
    </NavigationWrapper>
    <RightWrapper>
      <SearchInput placeholder="Search"></SearchInput>
      <Cart>
        <CartIcon href="/"><span>&#128722;</span></CartIcon>
        <CartQuant>5</CartQuant>
      </Cart>
    </RightWrapper>
  </NavHeader>
);

export default Header;