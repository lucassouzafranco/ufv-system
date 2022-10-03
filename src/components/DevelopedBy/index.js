import React, { Fragment } from "react";
import { Credits } from "./styleDevelopedBy";

const DevelopedBy = () => {
  return(
    <Fragment>
      <Credits>Desenvolvido com ❤️ por <a style={{textDecoration: 'none', color: '#114977', fontWeight: 'bold'}} href="https://infoalto.com.br/" target='_blank' rel="noreferrer">InfoAlto Empresa Júnior.</a></Credits>
    </Fragment>
  )
}

export default DevelopedBy;