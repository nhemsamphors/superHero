import React,{ useContext , useState } from 'react';
import { HeroContext } from '../contextapi/HeroContext';
const HeroForm = () => {
    const [name, setName] = useState('')
    const [comic, setComic] = useState('')
    const {addHero} = useContext(HeroContext);

   const handleSubmit = (e) => {
    e.preventDefault()
      addHero(name,comic)
      setName('')
      setComic('')

   }
    return(
        <div className="d-flex justify-content-center p-3" style={{background: 'teal'}}>
        <form className="col-md-4" onSubmit={handleSubmit}>
        <div className="form-group">
         <h5>Super Hero</h5>
         <input className="form-control" type="text" placeholder="enter your super hero" value={name} 
         onChange={(e) => setName(e.target.value)} required></input>
        </div> 
        <div className="form-group">
         <h5>Comics</h5>
         <input className="form-control" type="text" placeholder="comics" value={comic} 
         onChange={(e) => setComic(e.target.value)} required></input>
        </div> 
        <button className='btn btn-primary mt-3' type='submit'>Submit</button>
        </form>
        
        </div>
    )
}
export default HeroForm;