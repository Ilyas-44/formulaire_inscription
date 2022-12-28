import React, { useState } from 'react';

function Form() {
  // Use the useState hook to create state variables for the form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [date, setdate] = useState('');
  const [ville, setville] = useState('');
  const [genre, setgenre] = useState('');
  const [loisirs, setloisirs] = useState([]);









  // Define a function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Show an alert with the form information
    alert(`your Email: ${email}\n your Password: ${password}\n Votre date de naissance est : ${date}\n Votre ville est : ${ville}\n vous etes : ${genre}\n votre loisirs sont : ${loisirs}`);
  };
  
  return (
    <div>
        <h1>Inscription</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label><br />
      <input type="text" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} /><br />
      <label htmlFor="password">Password:</label><br />
      <input type="password" id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} /><br /><br />
      <label>Date de naissance</label>
      <input type="date" name="date" value={date} onChange={(event) => setdate(event.target.value)}/><br />
      <div className="form-group">
        <select name="ville" value={ville} onChange={(event) => setville(event.target.value)}>
          <option>choisir une ville </option>
          <option value="tetouan">tetouan</option>
          <option value="tanger">tanger</option>
        </select><br />
        <label>Genre : </label> <br/>
        <input type="radio" value="Homme" name="genre" onChange={(event) => setgenre(event.target.value)} /> Homme 
        <input type="radio" value="femme" name="genre" onChange={(event) => setgenre(event.target.value)} /> femme 
        <br/>
    <label htmlFor="">Loisirs :</label> <br/>
        <input type="checkbox" name="loisirs" value="Sport" onChange={(event) => setloisirs([...loisirs,event.target.value])}/>Sport
        <input type="checkbox" name="loisirs" value="lecture" onChange={(event) => setloisirs([...loisirs,event.target.value])}/>lecture
        <input type="checkbox" name="loisirs" value="musique" onChange={(event) => setloisirs([...loisirs,event.target.value])}/>musique
        <br/>
        <label>import your picture here : </label> 
        <input type="file" />

      </div>
      <div className='btn-form'>
        <button type="submit">Submit</button>
      </div>
    </form>
    </div>
  );
}

export default Form;
