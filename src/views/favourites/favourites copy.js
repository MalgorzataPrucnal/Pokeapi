import React from 'react'
import { Page } from '../../components/page'
import { Title } from '../../components/title'
import { useLocalStorage } from '../../hooks/useLocalStorage';

const examplePokemon = {
  id: 1,
  name: "This is place for you favourite pokemon",
  sprites:{
    front_default: 
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/1.png",},
    
  types: [
    {
      slot: 1,
      type: {
        name: "grass",
        url: "https://pokeapi.co/api/v2/type/12/",
      },
    },
    {
      slot: 2,
      type: {
        name: "poison",
        url: "https://pokeapi.co/api/v2/type/4/",
      },
    },
  ],
};



let list = [];
export const Favourites = () => {
  // const [stateLocalStorage, setStateLocalStorage] = React.useState(() => {
    let keys = Object.keys(localStorage);
    let i = keys.length;
    console.log(keys);
    console.log(i);
console.log(localStorage);
let first = JSON.parse(window.localStorage.getItem(keys[0]));


    // let allPokemons = keys.map((key, index)=>   );
    let pokemonFirst = examplePokemon;
    if(i>0){
    pokemonFirst = JSON.parse(window.localStorage.getItem(keys[0]));
    if (!pokemonFirst) {console.log("nei ma")}

    }

    console.log(pokemonFirst)
    // let pokemonSecond = examplePokemon;
    // if(!pokemonSecond){
    //   pokemonSecond = JSON.parse(window.localStorage.getItem(keys[1]));
    // pokemonSecond = "dupa"
    //  {console.log('niet')}
    // }

  // let pokemon1 = JSON.parse(window.localStorage.getItem(keys[0]));
  // console.log(pokemon1);

  // let parsed = keys.map((key, index) => {
  //   {JSON.parse(window.localStorage.getItem(key))}});
    
//     if
//     (!key) {console.log("No favourite pokemons")}
//     else if
//     (JSON.parse(window.localStorage.getItem(key))==undefined)
// {return}
// else 
//     // (JSON.parse(window.localStorage.getItem(key))
//     {JSON.parse(window.localStorage.getItem(key))}});

// console.log(parsed);

    // for(let z=0; z<i; z++){
      
    //   if (JSON.parse(window.localStorage.getItem(keys[z]))){
        
    //   list.push(<li key={`{z}`}>{(JSON.parse(window.localStorage.getItem(keys[z]))).name}</li> );


    //         }
    //   else console.log("No pokemons");
    //      }




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
          Import hook `useLocalStorage` and use it to consume data from localStorage, it's fairly straightforward. Think of it as `useState`, in case of any problems don't hesitate to ask me for help
        </li>
        <li>
          Use loaded data to display list of pokemons added to localStorage. If there is no pokemon in localStorage display message "There is no pokemons in your favourties list "
        </li>
        </ol>
        
      <div className="grid grid-rows-2 grid-flow-col gap-4">
        <PokemonProfile
        
          name={pokemonFirst.name}
          types={pokemonFirst.types}
          avatar={pokemonFirst.avatar}
          number={pokemonFirst}
        />
        <PokemonProfile
          // name={pokemonSecond.name}
          // types={pokemonSecond.name}
          // avatar={pokemonSecond.sprites.front_default}
          // number={pokemonSecond.id}
        />
        <PokemonProfile
          name={examplePokemon.name}
          types={examplePokemon.types}
          avatar={examplePokemon.avatar}
          number={examplePokemon.id}
        />
        <PokemonProfile
          name={examplePokemon.name}
          types={examplePokemon.types}
          avatar={examplePokemon.avatar}
          number={examplePokemon.id}
        />
        <PokemonProfile
          name={examplePokemon.name}
          types={examplePokemon.types}
          avatar={examplePokemon.avatar}
          number={examplePokemon.id}
        />
        <PokemonProfile
          name={examplePokemon.name}
          types={examplePokemon.types}
          avatar={examplePokemon.avatar}
          number={examplePokemon.id}
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
      alt=""
      width="384"
      height="512"
    />
    <div className="pt-4 text-center">
      <figcaption className="font-medium">
        <div className="text-cyan-600">#{id} {name}</div>
        {/* <div className="text-gray-500">{types.map(({type}) => type.name).join(', ')}</div> */}
      </figcaption>
    </div>
  </figure>
);
}