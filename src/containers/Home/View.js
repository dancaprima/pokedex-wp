import React, { useEffect, useState } from 'react';
import { Container, Card } from 'semantic-ui-react';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { API_URL } from '../../url';
import { get } from '../../utils/fetch';
import { generateImage } from '../../utils/image';
import debounce from 'lodash.debounce';
import PokemonFilter from '../../components/PokemonFilter/PokemonFilter';
import Loader from '../../components/Loader/Loader';

const HomeView = ({ history }) => {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [type, setType] = useState('all');

  useEffect(() => {
    if (type === 'all') {
      window.addEventListener('scroll', infiniteScroll);
      fetchPokemons();
    } else {
      getPokemonByType(type);
    }
    return () => {
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [offset, type]);

  const fetchPokemons = async () => {
    setLoading(true);
    const {
      data: { results }
    } = await get(`${API_URL}/pokemon`, {
      limit: 24,
      offset: offset ? offset : null
    });
    setData([...data, ...results]);
    setLoading(false);
  };

  const onChangeType = (evt, data) => {
    setType(data.value);
    setData([]);
  };

  const infiniteScroll = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >
      document.documentElement.scrollHeight - 500
    ) {
      setOffset(offset + 24);
    }
  }, 100);

  const getPokemonByType = async name => {
    setLoading(true);

    if (name !== 'all') {
      const {
        data: { pokemon }
      } = await get(`${API_URL}/type/${name}`);
      const value = pokemon.map(e => e.pokemon);
      setData(value);
    } else {
      fetchPokemons();
    }
    setLoading(false);
  };

  const toDetail = param => {
    history.push(`detail/${param.toLowerCase()}`);
  };

  return (
    <Container>
      <PokemonFilter onChange={onChangeType} />
      <Card.Group itemsPerRow={6}>
        {data &&
          data.map(e => (
            <PokemonCard
              key={e.name}
              onClick={() => toDetail(e.name)}
              title={e.name}
              image={generateImage(e.name)}
            />
          ))}
      </Card.Group>
      <Loader show={isLoading} />
    </Container>
  );
};

export default HomeView;
