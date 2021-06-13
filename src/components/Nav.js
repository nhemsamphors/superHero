import React,{useContext} from 'react';
import { HeroContext } from '../contextapi/HeroContext';

const design = {
    background: 'black',
    height: '60px',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-around'

}
const Nav = () => {
    const {heros} = useContext(HeroContext)
    return(
        <div style={design}>
        <h1>Superhero</h1>
        <h1>List of heros: {heros.length} </h1>
        
        </div>
    )
}
export default Nav;