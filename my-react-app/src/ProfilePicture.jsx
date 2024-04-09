function ProfilePicture(){

    const imageUrl = './src/assets/react.svg';

    const handleClick = () => console.log("OUCH!");

    const handleClick2 = (e) => e.target.style.display = "none";

    return(
        <img src={imageUrl} onClick={ (e) => handleClick2(e)}></img>
    );
}

export default ProfilePicture