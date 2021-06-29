import styled from 'styled-components';
import * as colors from '../../config/color';

export const Form = styled.form`
  label {
    width: 180px;
    height: 180px;
    display: flex;
    background: #eee;
    border: 5px dashed ${colors.primaryColor};
    margin: 30px auto;
    cursor: pointer;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    img {
      width: 180px;
      height: 180px;
    }
  }
  input {
    display: none;
  }
`;

export const Title = styled.h1`
  text-align: center;
`;
