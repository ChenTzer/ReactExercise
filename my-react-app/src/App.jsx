import UserGreeting from "./UserGreeting";

function App() {
  return(
    <>
      <UserGreeting isLoggedIn={true} username="ChenTzer"></UserGreeting>
      <UserGreeting></UserGreeting>
    </>
  );

}

export default App
