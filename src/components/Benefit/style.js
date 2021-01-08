import styled from 'styled-components'
import { colors, media } from '../../tokens'

export const SectionBenefit = styled.section `
  padding: 40px 0;

  ${media.md} {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export const TitleBenefit = styled.div `
  h1 {
    margin-bottom: 30px;
    font-size: 28px;
  }

  a {
    position: relative;
    display: inline-block;
    font-weight: 500;
    font-size: 17px;
    color: ${colors.primary};
    text-decoration: none;

    &::after {
      content: '';
      position: absolute;
      display: block;
      width: 0;
      height: 1px;
      background: ${colors.primary};
      transition: .2s;
      bottom: 15%;
    }

    &:hover::after {
      width: 100%;
    }

    svg {
      width: 20px;
      height: 37px;
      margin-left: 5px;
    }
  }

  ${media.md} {
    h1 {
      font-size: 48px;
      width: 325px;
    }

    a {
      font-size: 19px;
    }
  }
`;

export const ImageBenefit = styled.img `
  width: 100%;
  height: auto;
  margin-top: 30px;

  ${media.md} {
    width: 32vw;
  }
`;

