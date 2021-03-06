import React from 'react'
import { SectionPix, TitlePix, ImagePix, CardForm } from './style'
import PixImage from './PixImage.png'

const Pix = () => {
  return (
    <SectionPix>
      <div className="container-fluid d-lg-flex justify-content-lg-between align-items-lg-center">
        <TitlePix>
          <h1>Pix: um novo jeito de fazer transferências e pagamentos</h1>
          <a href="#">Saiba como funciona <svg id="Layer" enable-background="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512"><path fill="#fff" d="m37.379 12.552c-.799-.761-2.066-.731-2.827.069-.762.8-.73 2.066.069 2.828l15.342 14.551h-39.963c-1.104 0-2 .896-2 2s.896 2 2 2h39.899l-15.278 14.552c-.8.762-.831 2.028-.069 2.828.393.412.92.62 1.448.62.496 0 .992-.183 1.379-.552l17.449-16.62c.756-.755 1.172-1.759 1.172-2.828s-.416-2.073-1.207-2.862z"/></svg> </a>
        </TitlePix>
        <div className="text-center">
          <ImagePix src={ PixImage } alt="Imagem Pix" />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <CardForm>
            <h3>Peça sua conta e cartão de crédito do Nubank</h3>
            <div className="form">
              <input type="text" required="required"/>
              <label>Digite seu CPF</label>
              <button type="submit"><span>Continuar</span> <svg id="Layer" enable-background="new 0 0 64 64" viewBox="0 0 64 64"><path fill="gray" d="m37.379 12.552c-.799-.761-2.066-.731-2.827.069-.762.8-.73 2.066.069 2.828l15.342 14.551h-39.963c-1.104 0-2 .896-2 2s.896 2 2 2h39.899l-15.278 14.552c-.8.762-.831 2.028-.069 2.828.393.412.92.62 1.448.62.496 0 .992-.183 1.379-.552l17.449-16.62c.756-.755 1.172-1.759 1.172-2.828s-.416-2.073-1.207-2.862z"/></svg></button>
            </div>
          </CardForm>
        </div>
      </div>
    </SectionPix>
  )
}

export default Pix
