import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PersonCircle } from 'react-bootstrap-icons';

export const LogoImage = styled.img`
  width: max(15vw, 200px);
`;

export const NavLinks = styled(Nav)`
  gap: 20px;
  margin: 0 auto !important;
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.active === props.to ? "#fff" : "#fc895e"};
  background-color: ${props => props.active === props.to ? "#f76f34" : "#fff"};
  width: max(8vw, 120px);
  height: max(2.3vw, 35px);
  display: flex;
  align-items: center;
  justify-content: center;
  outline: 2px solid #f76f34;
  outline-offset: -2px;
  border-radius: 4px;

  &:hover {
    color: #fff;
    background-color: #f76f34;
  }

  @media only screen and (max-width: 992px) {
  width: auto;
  justify-content: flex-start;
  padding: 0 30px;
  }
`;

export const NavUser = styled(Link)`
  width: 15vw;
  height: max(2.3vw, 35px);
  outline: 2px solid #f76f34;
  outline-offset: -2px;
  border-radius: 4px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  text-decoration: none;

  &:before {
    height: 3.95vw;
    border-left: 1px solid #d5d7db;
    content: '';
    position: absolute;
    left: -2em;
  }

  &:hover {
      background-color: #f76f34;
    }

  &:hover span, i  {
    color: #fff;
  }

  @media only screen and (max-width: 1200px) {
    &:before {
      display: none;
    }
  }

  @media only screen and (max-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 30px;
    height: 35px;
    width: auto;
    outline: 2px solid #f76f34;
    margin-top: 20px;
  }
`;

export const NavSignin = styled(NavUser)`
justify-content: center;
gap: 40px;

&:hover img  {
      stroke: #fff;
  }

@media only screen and (max-width: 992px) {
    justify-content: space-between;
    padding: 0 30px;
  }
`

export const UserIcon = styled(PersonCircle)`
  color: #7355D3;
  font-size: max(1.8vw, 25px);

  @media only screen and (max-width: 992px) {
    display: none;
  }
`;

export const SigninIcon = styled.img`
width: max(1.95vw, 25px);

@media only screen and (max-width: 992px) {
    display: none;
  }
`

export const UserName = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #7e8085;
`;

export const SigninText = styled(UserName)`
color: #FC895E;
`

export const PlusSign = styled.i`
  color: #f76f34;
  font-size: 20px;
  font-weight: 600;
`;