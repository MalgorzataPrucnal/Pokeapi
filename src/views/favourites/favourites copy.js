import React from "react";
import { Page } from "../../components/page";
import { Title } from "../../components/title";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import placeholder from "../../assets/placeholder.png";

const examplePokemon = {
  id: null,
  name: "This is place for your favourite pokemon.",
  avatar: placeholder,

  types: "",
};

export const Favourites = () => {
  // const [stateLocalStorage, setStateLocalStorage] = React.useState(() => {
  let keys = Object.keys(localStorage);
  let i = keys.length;
  console.log(keys);
  console.log(i);

  if (i > 6 ) {
    keys.shift();

  }

  let message;
  if (i === 0) {
    message = "There is no pokemons on your favourites list.";
  }

  //first

  let pokemonFirst = examplePokemon;
  
    pokemonFirst = JSON.parse(window.localStorage.getItem(keys[0]));
  
  if (!pokemonFirst) {
    pokemonFirst = examplePokemon;
  }

  //second

  let pokemonSecond = examplePokemon;
    pokemonSecond = JSON.parse(window.localStorage.getItem(keys[1]));

  if (!pokemonSecond) {
    pokemonSecond = examplePokemon;
  }

  console.log(pokemonSecond.name);

  let pokemonThird = examplePokemon;
     pokemonThird = JSON.parse(window.localStorage.getItem(keys[2]));
 
     if (!pokemonThird) {
    pokemonThird = examplePokemon;
  }


  let pokemonFourth = examplePokemon;
 
    pokemonFourth = JSON.parse(window.localStorage.getItem(keys[3]));
 
  if (!pokemonFourth) {
    pokemonFourth = examplePokemon;
  }

  let pokemonFifth = examplePokemon;
 
    pokemonFifth = JSON.parse(window.localStorage.getItem(keys[4]));

  if (!pokemonFifth) {
    pokemonFifth = examplePokemon;
  }
  let pokemonSixth = examplePokemon;
  
    pokemonSixth = JSON.parse(window.localStorage.getItem(keys[5]));
  
  if (!pokemonSixth) {
    pokemonSixth = examplePokemon;
  }

  return (
    <Page>
      <Title>Favourites</Title>
      <p className="text-white py-6 text-center">
        Here will be list of saved pokemons from localStorage
      </p>
      <p> {message} </p>

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
};

const PokemonProfile = ({ id, name, types, avatar }) => {
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
          <div className="text-cyan-600">
            #{id} {name}
          </div>
          <div className="text-gray-500">{types}</div>
        </figcaption>
      </div>
    </figure>
  );
};
