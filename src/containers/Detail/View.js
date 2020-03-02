import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { Container, Image, List, Grid } from 'semantic-ui-react';
import Loader from '../../components/Loader/Loader';

const POKEMON_QUERY = gql`
  query Pokemon($name: String!) {
    pokemon(name: $name) {
      name
      types
      classification
      image
      resistant
      height {
        minimum
        maximum
      }
      weight {
        minimum
        maximum
      }
      maxCP
      maxHP
    }
  }
`;
const DetailView = () => {
  const { id } = useParams();

  const { data, loading, error } = useQuery(POKEMON_QUERY, {
    variables: { name: id }
  });
  if (error) return <div>Error</div>;
  if (loading) return <Loader show={true} />;
  if (data) {
    const { pokemon } = data;
    return (
      <Container>
        <Grid>
          <Grid.Column width={4}>
            <Image src={pokemon.image} size="medium" bordered />
          </Grid.Column>
          <Grid.Column width={4}>
            <List>
              <List.Item>
                <List.Header>Name</List.Header>
                {pokemon.name}
              </List.Item>
              <List.Item>
                <List.Header>Classification</List.Header>
                {pokemon.classification}
              </List.Item>
              <List.Item>
                <List.Header>Max CP</List.Header>
                {pokemon.maxCP}
              </List.Item>
              <List.Item>
                <List.Header>Max HP</List.Header>
                {pokemon.maxHP}
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={4}>
            <List>
              <List.Item>
                <List.Header>Height Min</List.Header>
                {pokemon.height.minimum}
              </List.Item>
              <List.Item>
                <List.Header>Height Max</List.Header>
                {pokemon.height.maximum}
              </List.Item>
              <List.Item>
                <List.Header>Weight Min</List.Header>
                {pokemon.weight.minimum}
              </List.Item>
              <List.Item>
                <List.Header>Weight Max</List.Header>
                {pokemon.weight.maximum}
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
};

export default DetailView;
