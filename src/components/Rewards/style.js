import styled from 'styled-components'
import { colors, media } from '../../tokens'

export const SectionRewards = styled.section `
  background: ${colors.darkPurple};
  padding-top: 60px;

  ${media.md} {
    padding: 60px 0;
  }

  ${media.lg} {
    padding: 400px 0;
  }

  ${media.xl} {
    padding: 100px 0;
  }
`;

export const TitleRewards = styled.div `
    h1 {
    font-size: 28px;
    width: 280px;
    margin-bottom: 30px;
    color: ${colors.white};

    a {
      font-size: 28px;
      text-decoration: solid;
      color: ${colors.purple};
        
      &::after {
        content: '';
        transition: none;
        height: 4px;
        bottom: 0;
        background: ${colors.purple};
      }
    }
  }

  a {
    position: relative;
    display: inline-block;
    color: ${colors.white};
    font-size: 17px;
    font-weight: 500;
    text-decoration: none;

    &::after {
      content: '';
      position: absolute;
      width: 0;
      bottom: 15%;
      height: 1px;
      background: ${colors.white};
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
      width: 340px;

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
      width: 480px;
    }
  }
`;

export const ImageRewards = styled.div `
  width: 100%;
  margin-top: 60px;

  .mobileImage {
    width: 100%;
  }

  .desktopImage {
    display: none;
  }

  ${media.md} {
    display: flex;
    justify-content: flex-end;

    .mobileImage {
      display: none;
    }

    .desktopImage {
      width: 200px;
      display: block;
    }
  }

  ${media.lg} {
    .desktopImage {
      width: 300px;
    }
  }

  ${media.xl} {
    .desktopImage {
      width: 400px;
    }
  }
`;