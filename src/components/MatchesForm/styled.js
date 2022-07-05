import styled from 'styled-components';
import { Button, Container, Form } from 'react-bootstrap';

export const TitleBackground = styled.div`
  background-color: #FC895E;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h3`
font-size: max(1.45vw, 16px);
font-weight: 600;
`

export const ContainerForm = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
gap: 30px;

@media only screen and (max-width: 500px) {
  justify-content: center;
  gap: 10px;
  }
`

export const Label = styled(Form.Label)`
color: #141518;
font-size: max(1vw, 14px);
font-weight: 600;
`

export const FormItemSelect = styled(Form.Select)`
width: 21.57vw;
background-color: #F7F8FF;
border: 1px solid #D5D7DB !important;
font-size: 14px;
color: #606266;
box-shadow: none !important;

@media only screen and (max-width: 900px) {
  width: 25vw;
  }

@media only screen and (max-width: 500px) {
  width: 70vw;
  }
`
export const SelectOption = styled.option`
font-size: 14px;
color: #606266;
`

export const CheckboxContainer = styled(Form.Group)`
height: 77.5px;
display: flex;
flex-direction: column;
justify-content: space-between;
`

export const Checkbox = styled(Form.Check)`
width: 21.57vw;
height: 38px;
display: flex;
align-items: flex-start;
gap: 10px;
font-size: 14px;
color: #606266;

& input {
  box-shadow: none !important;
  border: 1px solid #D5D7DB !important;
  background-color: #F7F8FF;
}

& label {
  font-size: (0.73vw, 10px);
}

@media only screen and (max-width: 900px) {
  width: 25vw;
  }

@media only screen and (max-width: 500px) {
  width: 70vw;
  }
`

export const ButtonContainer = styled.div`
display: flex;
justify-content: center;
`
export const SearchButton = styled(Button)`
display: flex;
justify-content: center;
align-items: center;
width: 18vw;
height: 3.54vw;
background-color: #8D73E4 !important;
color: #fff;
font-size: 18px;
font-weight: 600;
box-shadow: none !important;

&:hover {
  background-color: #F76F34 !important;
  border: #F76F34;
  color:#000;
}

@media only screen and (max-width: 900px) {
  width: 27vw;
  height: 5.31vw;
  font-size: 16px;
  }

@media only screen and (max-width: 500px) {
  width: 36vw;
  height: 7.08vw;
  font-size: 14px;
  }
`
