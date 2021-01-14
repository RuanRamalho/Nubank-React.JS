import React from 'react'
import { SectionRewards, TitleRewards,ImageRewards } from './style'
import RewardsImage from './images/RewardsImage.png'
import RewardsImage_md from './images/RewardsImage_md.png'

const Rewards = () => {
  return (
    <SectionRewards>
      <div className="container d-md-flex align-items-md-center">
        <TitleRewards>
          <h1><a href="#">Rewards</a> <br /> Um programa de pontos justo e fácil de usar.</h1>
          <a href="#">Saiba mais <svg id="Layer" enable-background="new 0 0 64 64" viewBox="0 0 64 64"><path fill="white" d="m37.379 12.552c-.799-.761-2.066-.731-2.827.069-.762.8-.73 2.066.069 2.828l15.342 14.551h-39.963c-1.104 0-2 .896-2 2s.896 2 2 2h39.899l-15.278 14.552c-.8.762-.831 2.028-.069 2.828.393.412.92.62 1.448.62.496 0 .992-.183 1.379-.552l17.449-16.62c.756-.755 1.172-1.759 1.172-2.828s-.416-2.073-1.207-2.862z"/></svg></a>
        </TitleRewards>
        <ImageRewards>
          <img className="mobileImage" src={RewardsImage} alt="Imagem de Recompensas" />
          <img className="desktopImage" src={RewardsImage_md} alt="Imagem de Recompensas" />
        </ImageRewards>
      </div>
    </SectionRewards>
  )
}

export default Rewards