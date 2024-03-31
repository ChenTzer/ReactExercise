import Header from "./Header"
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button";
import Student from "./Student";

function App() {
  return(
    <>
      <Student name="Chen Tzer" age={24} isStudent={true}></Student>
      <Student name="Jason" age={27} isStudent={false}></Student>
      <Student name={30} age={27} isStudent={false}></Student>
      <Student></Student>
    </>
  );

}

export default App
