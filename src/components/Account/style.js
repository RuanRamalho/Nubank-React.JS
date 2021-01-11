import styled from 'styled-components'
import { colors, media } from '../../tokens'

export const SectionAccount = styled.section `
  background: #F5F5F5;
  padding: 60px 0;

  ${media.md} {
    padding: 200px 0;
  }

  ${media.lg} {
    padding: 400px 0;
  }

  ${media.xl} {
    padding: 120px 0;
  }
`;

export const TitleAccount = styled.div `
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
      height: 2px;
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
      transform: rotate(-45deg);
    }
  }

  ${media.md} {
    h1 {
      font-size: 48px;
      width: 290px;

      a {
        font-size: 48px;
      }
    }

    a {
      font-size: 19px;
    }
  }

  ${media.lg} {
    h1 {
      width: 420px;
    }
  }
`;

export const ImageAccount = styled.img `
  width: 100%;
  margin-top: 30px;

  ${media.md} {
    width: 400px;
  }

  ${media.lg} {
    width: 500px;
  }

  ${media.xl} {
    width: 670px;
  }
`;
