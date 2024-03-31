import PropTypes from 'prop-types';

function List(props){

    const category = props.category;
    const itemList = props.items;


    // fruits.sort((a,b) => a.name.localeCompare(b.name)) // ALPHEABETICAL
    // fruits.sort((a,b) => b.name.localeCompare(a.name)) // REVERSE ALPHEABETICAL
    // fruits.sort((a,b) => a.calories - b.calories) //  NUMERIC
    // fruits.sort((a,b) => b.calories - a.calories) // REVERSE NUMERIC

    // const lowCalFruits = fruits.filter(fruit => fruit.calories <100)
    // const highCalFruits = fruits.filter(fruit => fruit.calories >=100)

    const listItems = itemList.map(fruit => <li key={fruit.id}>{fruit.name} : &nbsp; <b>{fruit.calories}</b></li>);

    List.propTypes ={
        category : PropTypes.string,
        items : PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number})),
    }

    List.defaultProps={
        category: "Category",
        items: []

    }

    return(<>
                <h3 className="list-category">{category}</h3>
                <ol className="list-items">{listItems}</ol>
             </>)
}

export default List