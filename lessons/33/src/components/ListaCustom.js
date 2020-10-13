import React from 'react';

const ListaCustom = (props) => {
  return (
    <div>
      <strong>{props.title}</strong>
      {props.listado.map(elemento => {
        return <p>{elemento}</p>
      })}
    </div>
  );
}

export default ListaCustom;
