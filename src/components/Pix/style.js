import styled from 'styled-components'
import { colors, media } from '../../tokens'

export const SectionPix = styled.section`
  background: ${colors.primary};
  padding: 40px 0;

  ${media.lg} {
    padding: 100px 40px;
  }
`;

export const TitlePix = styled.div `
  color: white;

  h1 {
    font-size: 28px;
  }

  a {
    display: inline-block;
    position: relative;
    font-weight: bold;
    font-size: 17px;
    color: ${colors.white};
    text-decoration: none;

    &::after {
      content: '';
      position: absolute;
      display: block;
      width: 0;
      height: 2px;
      background: ${colors.white};
      transition: .2s;
      bottom: 15%;
    }

    &:hover::after {
      width: 100%;
    }

    svg {
      width: 20px;
      height: 37px;
    }
  }

  ${media.lg} {
    h1 {
      font-size: 48px;
    }
  }
  
  ${media.xl} {
    h1 {
      width: 400px;
    }
  }

  ${media.xxl} {
    h1 {
      width: 580px;
    }
  }
`;

export const ImagePix = styled.img `
  width: 180px;
  margin: 40px 0;

  ${media.lg} {
    width: 300px;
  }
  
  ${media.xl} {
    width: 400px;
  }

  ${media.xxl} {
    width: 580px;
    margin-right: 200px;
  }
`;

export const CardForm = styled.div `
  background: white;
  padding: 25px 25px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 315px;
  height: 250px;
  position: relative;

  h3 {
    font-size: 21px;
  }

  .form {
    position: absolute;
    width: 80%;
    margin-top: 30px;
    
    input {
      width: 100%;
      border: none;
      margin: 50px 0;
      border-bottom: 1px solid gray;
      outline: none;

      &:hover {
          border-bottom: 1px solid black;
        }

      &:focus {
        border-bottom: 1px solid black;
      }

      &:focus ~ label,
      &:valid ~ label {
        top: 30px;
        font-size: 12px;
      }
    }

    label {
      position: absolute;
      top: 47px;
      left: 0;
      transition: 0.3s;
      pointer-events: none;
      color: gray;
      font-size: 14px;
    }
    
    button {
      bottom: -30px;
      position: absolute;
      width: 100%;
      border-radius: 31px;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      border: none;
      color: gray;
      outline: none;

      span {
        font-weight: 400;
        font-size: 17px;
      }
  
      svg {
        height: 20px;
        width: 40px;
      }
    }
  }

  ${media.md} {
    height: 280px;

    .form {
      margin-top: 60px;

      button {
        bottom: -35px;
      }
    }
  }

  ${media.lg} {
    height: 300px;

    h3 {
      font-size: 24px;
    }

    .form {
      margin-top: 60px;
    }
  }
`;