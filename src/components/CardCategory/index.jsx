import React from "react";
import Slider from "react-slick";
import Card from 'react-bootstrap/Card';
import dogSmile from '../../assets/dogSmile.png'
import catSerious from '../../assets/catSerious.png'
import birdModel from '../../assets/birdModel.png'
import exotics from '../../assets/exotics.png'
import reptiles from '../../assets/reptiles.png'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './styled'

const CardCategory = () => {
      const settings = {
        dots: false,
        infinite: false,
        centerMode: false,
        speed: 500,
        slidesToScroll: 3,
        slidesToShow: 3,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 4,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };

      return (
        <S.ContainerCategory>
          <S.TitleCategory>Categorias</S.TitleCategory>
              <S.ContainerCardsCategory>
                <Slider {...settings}>
                <S.LinkContainer to="/">
                  <S.CardCategory>
                    <Card.Img variant="top" src={dogSmile} />
                    <Card.Body>
                      <Card.Title>Cães</Card.Title>
                    </Card.Body>
                  </S.CardCategory>
                </S.LinkContainer>
                <S.LinkContainer to="/">
                  <S.CardCategory>
                    <Card.Img variant="top" src={catSerious} />
                    <Card.Body>
                      <Card.Title>Gatos</Card.Title>
                    </Card.Body>
                  </S.CardCategory>
                </S.LinkContainer>
                <S.LinkContainer to="/">
                  <S.CardCategory>
                    <Card.Img variant="top" src={birdModel} />
                    <Card.Body>
                      <Card.Title>Aves</Card.Title>
                    </Card.Body>
                  </S.CardCategory>
                </S.LinkContainer>
                <S.LinkContainer to="/">
                  <S.CardCategory>
                    <Card.Img variant="top" src={reptiles} />
                    <Card.Body>
                      <Card.Title>Répteis</Card.Title>
                    </Card.Body>
                  </S.CardCategory>
                </S.LinkContainer>
                <S.LinkContainer to="/">
                  <S.CardCategory>
                    <Card.Img variant="top" src={exotics} />
                    <Card.Body>
                      <Card.Title>Exóticos</Card.Title>
                    </Card.Body>
                  </S.CardCategory>
                </S.LinkContainer>
              </Slider>
              </S.ContainerCardsCategory>
        </S.ContainerCategory>
      );
};


export default CardCategory;
