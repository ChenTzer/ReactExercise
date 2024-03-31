import propTypes from 'prop-types'

function UserGreeting(props){
    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }else{
    //     return <h2>Please Log in to continue</h2>
    // }

    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>
    const loginPrompt = <h2 className="login-prompt">Please Log in to continue</h2>

    return(props.isLoggedIn ?  welcomeMessage
                            : loginPrompt
    )
}

UserGreeting.propTypes={
    isLoggedIn : propTypes.bool,
    username: propTypes.string
}

UserGreeting.defaultProps={
    isLoggedIn : false,
    username: "Guest"
}


export default UserGreeting