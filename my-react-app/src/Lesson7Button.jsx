function Lesson7Button(){

    let count = 0;

    const handleClick = () => console.log("Ouch");

    const handleClick2 = (name) => console.log(`${name} stop click me`);

    const handleClick3 = (name) => {
        if(count <3){
            count++;
            console.log(`${name} you clicked me ${count} time(s)`);
        }
        else{
            console.log(`${name} stop click me`)
        }
    }

    const handleClick4 = (e) => e.target.textContent = "OUCH!";
    return(
        <button onClick={(e) => handleClick4(e)} onDoubleClick ={(e) =>handleClick3("CHEN TZER")}>Click me</button>
    );
}

export default Lesson7Button