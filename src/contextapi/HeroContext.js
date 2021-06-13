import React, {useState, createContext} from 'react';

export const HeroContext = createContext()

const HeroContextProvider = (props) => {
    const [heros, setHeros ] = useState([
      {name: 'flash', comic: ' DC'}
     
    ])
    const addHero = (name, comic) => {
        setHeros([...heros, {name, comic}])
    }
    return(
        <HeroContext.Provider value={{heros,addHero}}>
         {props.children}
        </HeroContext.Provider>
    )
}
export default HeroContextProvider;