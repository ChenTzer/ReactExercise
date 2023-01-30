import './App.css';

const Person = (person) =>{
  return(
    <>
    <h1>Name: {person.name}</h1>
    <h2>Last Name: {person.lastName}</h2>
    <h2>Age: {person.age}</h2>
    </>
  )
}

const App=()=> {
  return (
    <div className="App">
        <Person name = 'John' lastName = "Doe" age = {21}/>
        <Person name = "Jane" lastName = "Liew" age = {21 +6}/>
        <Person/>
    </div>
  );
}

export default App;
