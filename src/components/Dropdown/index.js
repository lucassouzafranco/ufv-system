import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Dropdown as DropdownC, Text, Arrow, DropdownContent, Item, Search } from './styleDropdown';

const BASE_URL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/MG';

const Dropdown = ({ selected, setSelected }) => {

  const [isActive, setIsActive] = useState(false);
  const [citys, setCitys] = useState(null);
  const [filter, setFilter] = useState(null);
  const [loading, setLoading] = useState(true);

  function order(data) {
    data.sort((a, b) => {
      if (a.nome < b.nome) {
        return -1;
      } else {
        return true;
      }
    })
    return data;
  }

  function findCitysByName(event) {
    if (filter) {
      setFilter(null);
    }
    let a = event.target.value;
    const fraseFinal = a.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase());
    console.log(fraseFinal);
    setFilter(citys.filter(city => city.nome.includes(fraseFinal)));
  }

  useEffect(() => {
    async function getCitys() {
      await axios.get(`${BASE_URL}/distritos`)
        .then((response) => {
          setCitys(order(response.data));
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }
    getCitys();
  }, []);

  return (
    <DropdownC>
      <Text onClick={() => setIsActive(!isActive)}>
        {loading ? 'Carregando...' : `${selected}`}
        <Arrow />
      </Text>
      {!loading && (
        <>
          {isActive && (
            <DropdownContent>
              <Search
                onChange={findCitysByName}
                placeholder="Pesquisar cidade"
              />

              <>
                {filter ?
                  filter.map(city => (
                    <Item
                      key={city.id}
                      onClick={() => {
                        setSelected(city.nome);
                        setIsActive(false);
                      }}
                    >{city.nome}</Item>
                  ))
                  :
                  <>
                    {citys.map(city => (
                      <Item
                        key={city.id}
                        onClick={() => {
                          setSelected(city.nome);
                          setIsActive(false);
                        }}
                      >{city.nome}</Item>
                    ))}
                  </>
                }
              </>
            </DropdownContent>
          )}
        </>
      )}
    </DropdownC>
  )
}
export default Dropdown;