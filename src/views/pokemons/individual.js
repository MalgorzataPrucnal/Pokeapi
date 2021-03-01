import React from "react";
import { Page } from "../../components/page";
import { Title } from "../../components/title";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useState, useEffect } from "react";

export const Individual = (props) => {
  const [individualData, setIndividualData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [state, setState] = useLocalStorage("pokemons");
  const save = () => setState([...state, individualData]);


  let url = props.match.params.index;
  // const [state, setState] = useLocalStorage(url);
  let error = false;
  let err = () => {return <p>no pokemon</p>};
  
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${url}`)
      .then((r) => r.json())
      .then((data) => {
        setIndividualData(data);
        
      })
      .catch(error => {console.log("No such pokemon."); setLoading(false)})  
    }, []);

 if(individualData === null && !loading) {
   return <p>This pokemon does not exist.</p>
 }

  
  if (individualData === null && loading) {
    return <p>Loading ...</p>;
  }
  
  //////// Old solution ////////
  // let save = () => {
  //   window.localStorage.setItem(
  //     url,
  //     JSON.stringify({
  //       id: url,
  //       name: individualData.name,
  //       avatar: individualData.sprites.front_default,
  //       types: individualData.types.map(({ type }) => type.name).join(", "),
  //     })
  //   );
  // };

  // let save = () => {setState(individualData); console.log(individualData)};

  // const save = (pokemon) => setState([...state, individualData]);

  return (
    <Page>
      <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "30px"}}>
        <figure className="max-w-xs bg-gray-100 rounded-xl p-4 object-none object-center">
          <img
            className=" w-32 h-32 rounded-full mx-auto"
            src={individualData.sprites.front_default}
            alt="This is your pokemon"
            width="384"
            height="512"
          />
          <div className="pt-1 text-center">
            <figcaption className="font-medium">
              <div className="text-cyan-600">
                #{individualData.id} {individualData.name}
              </div>
              <div className="text-gray-500">
                {individualData.types.map(({ type }) => type.name).join(", ")}
              </div>
            </figcaption>
          </div>
        </figure>
        <button
      
          className="hover:bg-light-pink-200 hover:text-light-blue-800 group flex items-center rounded-md bg-pink-100 text-light-pink-600 text-sm font-medium px-4 py-2"
          onClick={save}
        >
          Add to favourites
        </button>
      </div>
    </Page>
  );
};
