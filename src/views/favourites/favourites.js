import React from 'react'
import { Page } from '../../components/page'
import { Title } from '../../components/title'
import { useLocalStorage } from '../../hooks/useLocalStorage';

const examplePokemon = {
  id: null,
  name: "This is place for you favourite pokemon",
  sprites:{
    front_default: 
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/1.png",},
    
  types:"",
};


export const Favourites = () => {
  // const [stateLocalStorage, setStateLocalStorage] = React.useState(() => {
  let keys = Object.keys(localStorage);
  let i = keys.length;
  console.log(keys);
  console.log(i);

  //first

  let pokemonFirst = examplePokemon;
  if (6 >= i > 0) {
    pokemonFirst = JSON.parse(window.localStorage.getItem(keys[0]));
  }
  if (6 < i) {
    let order = i - 6;
    pokemonFirst = JSON.parse(window.localStorage.getItem(keys[order]));
  }
  if (!pokemonFirst) {
    pokemonFirst = examplePokemon;
  }

  //second

  let pokemonSecond = examplePokemon;
  if (6 >= i > 0) {
    pokemonSecond = JSON.parse(window.localStorage.getItem(keys[1]));
  }

  if (6 < i) {
    let orderTwo = i - 5;
    pokemonSecond = JSON.parse(window.localStorage.getItem(keys[orderTwo]));
  }
  if (!pokemonSecond) {
    pokemonSecond = examplePokemon;
  }

  if (!pokemonSecond) {
    pokemonSecond = examplePokemon;
  }

  let pokemonThird = examplePokemon;
  if (6 >= i > 0) {
    pokemonThird = JSON.parse(window.localStorage.getItem(keys[2]));
  }
  if (!pokemonThird) {
    pokemonThird = examplePokemon;
  }

  if (6 < i) {
    let orderTwo = i - 4;
    pokemonThird = JSON.parse(window.localStorage.getItem(keys[orderTwo]));
  }
  if (!pokemonThird) {
    pokemonThird = examplePokemon;
  }
  let pokemonFourth = examplePokemon;
  if (6 >= i > 0) {
    pokemonFourth = JSON.parse(window.localStorage.getItem(keys[3]));
  }

  if (6 < i) {
    let orderTwo = i - 3;
    pokemonFourth = JSON.parse(window.localStorage.getItem(keys[orderTwo]));
  }
  if (!pokemonFourth) {
    pokemonFourth = examplePokemon;
  }

  let pokemonFifth = examplePokemon;
  if (6 >= i > 0) {
    pokemonFifth = JSON.parse(window.localStorage.getItem(keys[4]));
  }

  if (6 < i) {
    let orderTwo = i - 2;
    pokemonFifth = JSON.parse(window.localStorage.getItem(keys[orderTwo]));
  }

  if (!pokemonFifth) {
    pokemonFifth = examplePokemon;
  }
  let pokemonSixth = examplePokemon;
  if (6 >= i > 0) {
    pokemonSixth = JSON.parse(window.localStorage.getItem(keys[5]));
  }

  if (6 < i) {
    let orderTwo = i - 1;
    pokemonSixth = JSON.parse(window.localStorage.getItem(keys[orderTwo]));
  }

  if (!pokemonSixth) {
    pokemonSixth = examplePokemon;
  }

  return (
    <Page>
      <Title>Favourites</Title>
      <p className="text-white py-6 text-center">
        Here will be list of saved pokemons from localStorage
      </p>

      <ol className="text-white list-decimal">
        {/* {pokemonFirst.name} */}
        <p className="font-bold">What you need to do</p>
        <li>
          Import hook `useLocalStorage` and use it to consume data from
          localStorage, it's fairly straightforward. Think of it as `useState`,
          in case of any problems don't hesitate to ask me for help
        </li>
        <li>
          Use loaded data to display list of pokemons added to localStorage. If
          there is no pokemon in localStorage display message "There is no
          pokemons in your favourties list "
        </li>
      </ol>

      <div className="grid grid-rows-2 grid-flow-col gap-4">
        <PokemonProfile
          name={pokemonFirst.name}
          types={pokemonFirst.types}
          avatar={pokemonFirst.avatar}
          id={pokemonFirst.id}
        />
        <PokemonProfile
          name={pokemonSecond.name}
          types={pokemonSecond.types}
          avatar={pokemonSecond.avatar}
          id={pokemonSecond.id}
        />
        <PokemonProfile
          name={pokemonThird.name}
          types={pokemonThird.types}
          avatar={pokemonThird.avatar}
          id={pokemonThird.id}
        />
        <PokemonProfile
          name={pokemonFourth.name}
          types={pokemonFourth.types}
          avatar={pokemonFourth.avatar}
          id={pokemonFourth.id}
        />
        <PokemonProfile
          name={pokemonFifth.name}
          types={pokemonFifth.types}
          avatar={pokemonFifth.avatar}
          id={pokemonFifth.id}
        />
        <PokemonProfile
          name={pokemonSixth.name}
          types={pokemonSixth.types}
          avatar={pokemonSixth.avatar}
          id={pokemonSixth.id}
        />
      </div>
    </Page>
  );
}


const PokemonProfile = ({id, name, types, avatar}) => {

return (
  <figure className="max-w-xs bg-gray-100 rounded-xl p-4">
    <img
      className="w-32 h-32 rounded-full mx-auto"
      src={avatar} 
      alt="One of your favourite pokemons"
      width="384"
      height="512"
    />
    <div className="pt-4 text-center">
      <figcaption className="font-medium">
        <div className="text-cyan-600">#{id} {name}</div>
        <div className="text-gray-500">{types}</div>
      </figcaption>
    </div>
  </figure>
);
}