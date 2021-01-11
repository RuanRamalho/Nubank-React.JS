import React from 'react'
import { SectionAccount, TitleAccount, ImageAccount } from './style'
import AccountImage from './AccountImage.png'

const Account = () => {
  return (
    <SectionAccount>
      <div className="container d-md-flex align-items-md-center justify-content-md-center">
        <TitleAccount>
          <h1><a href="#">Conta do Nubank</a> Nossa conta digital com mais de 20 milhões de clientes em todo o Brasil.</h1>
          <a href="#">Segura e sem complicações <svg id="Layer" enable-background="new 0 0 64 64" viewBox="0 0 64 64"><path fill="#8A05BE" d="m37.379 12.552c-.799-.761-2.066-.731-2.827.069-.762.8-.73 2.066.069 2.828l15.342 14.551h-39.963c-1.104 0-2 .896-2 2s.896 2 2 2h39.899l-15.278 14.552c-.8.762-.831 2.028-.069 2.828.393.412.92.62 1.448.62.496 0 .992-.183 1.379-.552l17.449-16.62c.756-.755 1.172-1.759 1.172-2.828s-.416-2.073-1.207-2.862z"/></svg></a>
        </TitleAccount>
        <ImageAccount src={AccountImage} alt="Imagem de Conta" />
      </div>
    </SectionAccount>
  )
}

export default Account