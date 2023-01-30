import './App.css';

const App=()=> {
  const name = 'John';
  const isNameShowing = true;
  return (
    <div className="App">
        <h1>Hello, {isNameShowing ? name : 'Nyes'}!</h1>
        {name ? (
          <>
          test
          </>
        ): (
          <>
          <h1>test</h1>
          <h2>There is no name</h2>
          </>
          
        )}
    </div>
  );
}

export default App;
