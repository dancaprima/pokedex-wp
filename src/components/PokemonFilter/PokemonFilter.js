import React, { useState, useEffect } from 'react';
import { Header, Select } from 'semantic-ui-react';
import { get } from '../../utils/fetch';
import { API_URL } from '../../url';

const PokemonFilter = ({ onChange }) => {
  const [data, setData] = useState([
    { key: 'all', value: 'all', text: 'Semua' }
  ]);

  useEffect(() => {
    const getType = async () => {
      const {
        data: { results }
      } = await get(`${API_URL}/type`);

      const value = results.map(e => {
        return { key: e.name, value: e.name, text: e.name };
      });
      setData([...data, ...value]);
    };
    getType();
  }, []);

  return (
    <Header as="h3" block>
      <Select placeholder="Select Type" options={data} onChange={onChange} />
    </Header>
  );
};

export default PokemonFilter;
