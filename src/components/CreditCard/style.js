import styled from 'styled-components'
import { colors, media } from '../../tokens'

export const SectionCreditCard = styled.section `
  padding-top: 60px;

  ${media.md} {
    padding-top: 100px;
    display: flex;
    justify-content: space-between;
  }

  ${media.lg} {
    padding-top: 140px;
  }

  ${media.xl} {
    padding-top: 100px;
  }
`;

export const TitleCreditCard = styled.div `
    h1 {
    font-size: 28px;
    width: 285px;
    margin-bottom: 30px;

    a {
      font-size: 28px;
      text-decoration: solid;
        
      &::after {
        content: '';
        transition: none;
        height: 4px;
        bottom: 0;
      }
    }
  }

  a {
    position: relative;
    display: inline-block;
    color: ${colors.primary};
    font-size: 17px;
    font-weight: 500;
    text-decoration: none;

    &::after {
      content: '';
      position: absolute;
      width: 0;
      bottom: 15%;
      height: 1px;
      background: ${colors.primary};
      transition: .2s;
      display: block;
    }

    &:hover::after {
      width: 100%;
    }

    svg {
      width: 20px;
      height: 37px;
    }
  }

  ${media.md} {
    h1 {
      font-size: 48px;
      width: 450px;

      a {
        font-size: 48px;
      }
    }

    a {
      font-size: 19px;
    }
  }
`;

export const ImageCreditCard = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    width: 200px;
  }

  ${media.md} {
    img {
      width: 100%
    }
  }

  ${media.lg} {
    img {
      width: 400px;
    }
  }

  ${media.xl} {
    width: 21vw;
  }
`;