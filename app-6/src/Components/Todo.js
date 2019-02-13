import React from 'react'

let Todo = (props) => {
    let list = props.array.map((elem, i) => <h2 key={i}>{elem}</h2>)
    return (
        <div>
            {list}
        </div>
    )
}

export default Todo