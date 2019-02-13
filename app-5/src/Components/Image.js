import React from 'react'

let Image = (props) => {
    if (props.url === ``) {
        return (
            <div>
                <img style={{width:"25vw", height:"auto", padding: 10}} src={"https://dairydoo.com/wp-content/uploads/2018/03/Placeholder.png"} alt="placeholder"/>
            </div>
        ) 
    }
    console.log(props.url)
    return (
        <div>
            <img src={props.url} style={{width:"25vw", height:"auto", padding: 10}} alt="Dog"/>
        </div>
    )
}

export default Image