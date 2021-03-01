import React from "react";
import { Page } from "../../components/page";
import { Title } from "../../components/title";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import placeholder from "../../assets/placeholder.png";

const examplePokemon = {
  id: "",
  name: "This is place for your favourite pokemon.",
  sprites: {
    front_default: placeholder,
  },
  types: [
    {
      slot: 1,
      type: {
        name: "",
        url: "https://pokeapi.co/api/v2/type/12/",
      },
    },
    {
      slot: 2,
      type: {
        name: "",
        url: "https://pokeapi.co/api/v2/type/4/",
      },
    },
  ],
};

// const examplePokemon = {
//   id: null,
//   name: "This is place for your favourite pokemon.",
//   avatar: placeholder,

//   types: "",
// };

export const Favourites = () => {
  // const [state, setState] = useLocalStorage("pokemons");

  let pokemonFirst = examplePokemon;
  let pokemonSecond = examplePokemon;
  let pokemonThird = examplePokemon;
  let pokemonFourth = examplePokemon;
  let pokemonFifth = examplePokemon;
  let pokemonSixth = examplePokemon;

  let filtered;
  let i;

  let message;

  const arrayOfPokemons = JSON.parse(window.localStorage.getItem("pokemons"));

  if (
    !arrayOfPokemons ||
    arrayOfPokemons === null ||
    arrayOfPokemons === undefined
  ) {
    message = "There is no pokemons on your favourites list.";
  }

  if (arrayOfPokemons) {
    i = arrayOfPokemons.length;
    filtered = arrayOfPokemons.reduce((acc, current) => {
      const doubled = acc.find((item) => item.id === current.id);
      if (!doubled) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);

    if (filtered && filtered.length > 6) {
      filtered.shift();
      window.localStorage.setItem("pokemons", JSON.stringify(filtered));
    }
  }
  console.log(filtered);

  //first
  if (i > 0) {
    pokemonFirst = filtered[0];
  }
  if (!pokemonFirst) {
    pokemonFirst = examplePokemon;
  }

  //second
  if (i > 1) {
    pokemonSecond = filtered[1];
  }

  if (!pokemonSecond) {
    pokemonSecond = examplePokemon;
  }

  console.log(pokemonSecond.name);

  if (i > 2) {
    pokemonThird = filtered[2];
  }

  if (!pokemonThird) {
    pokemonThird = examplePokemon;
  }

  if (i > 3) {
    pokemonFourth = filtered[3];
  }

  if (!pokemonFourth) {
    pokemonFourth = examplePokemon;
  }

  if (i > 4) {
    pokemonFifth = filtered[4];
  }
  if (!pokemonFifth) {
    pokemonFifth = examplePokemon;
  }

  if (i > 5) {
    pokemonSixth = filtered[5];
  }
  if (!pokemonSixth) {
    pokemonSixth = examplePokemon;
  }

  return (
    <Page>
      <Title>Favourites</Title>
      {/* <p className="text-white py-6 text-center">
        Here will be list of saved pokemons from localStorage
      </p> */}
      <p className="text-white py-6 text-center">
        {message}
      </p>

      {/* <ol className="text-white list-decimal">
        {/* {pokemonFirst.name} */}
      {/* <p className="font-bold">What you need to do</p> */}
      {/* <li>
          Import hook `useLocalStorage` and use it to consume data from
          localStorage, it's fairly straightforward. Think of it as `useState`,
          in case of any problems don't hesitate to ask me for help
        </li> */}
      {/* <li>
          Use loaded data to display list of pokemons added to localStorage. If
          there is no pokemon in localStorage display message "There is no
          pokemons in your favourties list "
        </li> */}
      {/* </ol>  */}

      <div className="grid grid-rows-2 grid-flow-col gap-4">
        <PokemonProfile
          name={pokemonFirst.name}
          types={pokemonFirst.types}
          avatar={pokemonFirst.sprites.front_default}
          id={pokemonFirst.id}
        />
        <PokemonProfile
          name={pokemonSecond.name}
          types={pokemonSecond.types}
          avatar={pokemonSecond.sprites.front_default}
          id={pokemonSecond.id}
        />
        <PokemonProfile
          name={pokemonThird.name}
          types={pokemonThird.types}
          avatar={pokemonThird.sprites.front_default}
          id={pokemonThird.id}
        />
        <PokemonProfile
          name={pokemonFourth.name}
          types={pokemonFourth.types}
          avatar={pokemonFourth.sprites.front_default}
          id={pokemonFourth.id}
        />
        <PokemonProfile
          name={pokemonFifth.name}
          types={pokemonFifth.types}
          avatar={pokemonFifth.sprites.front_default}
          id={pokemonFifth.id}
        />
        <PokemonProfile
          name={pokemonSixth.name}
          types={pokemonSixth.types}
          avatar={pokemonSixth.sprites.front_default}
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
        alt=""
        width="384"
        height="512"
      />
      <div className="pt-4 text-center">
        <figcaption className="font-medium">
          <div className="text-cyan-600">
            #{id} {name}
          </div>
          <div className="text-gray-500">
            {types.map(({ type }) => type.name).join(", ")}
          </div>
        </figcaption>
      </div>
    </figure>
  );
};
