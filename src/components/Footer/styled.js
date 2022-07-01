import styled from 'styled-components';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const FooterBackground = styled(Navbar)`
  background-color: #7355d3;
`;

export const FooterContainer = styled(Container)`
  height: max(11vw, 150px);
  align-items: flex-end !important;
`;

export const VetorImage = styled.img`
  height: max(7.2vw, 95px);
  width: max(7.5vw, 100px);

  @media only screen and (max-width: 991px) {
    display: none;
  }
`;

export const FooterCenterContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 45px;
  align-items: center;
  justify-content: center;
`;

export const NavLinks = styled(Nav)`
  gap: 40px;
  margin: 0 auto !important;
  flex-direction: row;

  @media only screen and (max-width: 500px) {
    gap: 20px;
  }
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  color: #f76f34;
  background-color: #e7e1fb;
  width: max(8vw, 120px);
  height: max(2.3vw, 35px);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;

  &:hover {
    color: #e7e1fb;
    background-color: #f76f34;
  }

  @media only screen and (max-width: 500px) {
    width: 100px;
  }
`;

export const Text = styled.span`
  color: #fff;
  font-size: 14px;
`;
