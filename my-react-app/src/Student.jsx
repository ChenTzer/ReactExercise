import propTypes from 'prop-types'

function Student(props){
    return(
        <div className="Student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );

}

//propTypes = ensure the attribute is of one specific type, if not, display warning in console ( will not stop program from stopping.)
Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool
}

//defaultProps = default values if no value is entered
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}

export default Student