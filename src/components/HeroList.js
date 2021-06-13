import React, {useContext} from 'react';
import { HeroContext } from '../contextapi/HeroContext';
const HeroList = () => {
    const { heros } = useContext(HeroContext)
    return heros.length ? (
        <div>
       <h2 className='text-white p-2'>Below are the Super heros list</h2>
       
        {heros.map(hero =>(
          <div>
           <h4>Super Hero: {hero.name}</h4>
           <h4>Super Hero: {hero.comic}</h4>
           <hr></hr>
             </div>

         ))} 
         </div>
         ):(
        
        <div>
        <h2>No Super Hero</h2>
        </div>
    )

}
export default HeroList;