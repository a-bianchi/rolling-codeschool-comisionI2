import React, { Component } from 'react';
import ListaCustom from "../components/ListaCustom"

class Ver extends Component {
  render() {
    const listado = ['Pan', 'Palta', 'Vino', 'Manaos']
    return (
      <div>
        <ListaCustom title={'Lista de compra'} listado={listado} />
      </div>
    );
  }
}

export default Ver;
