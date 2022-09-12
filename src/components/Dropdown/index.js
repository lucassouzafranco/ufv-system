import React, { useEffect } from "react";

const BASE_URL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/MG';

export const fetchStates = () => {
  const url = `${BASE_URL}/distritos`;
  return (fetch(url).then(response => response.json()));
}

const Dropdown = () => {
  
  useEffect(() => {
    fetchStates().then(console.log);
  }, []);

  return(
    <option value=''>Cidade</option>
  )
}
export default Dropdown;