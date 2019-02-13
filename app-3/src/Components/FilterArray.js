import React from 'react'

function FilterList(props) {
    let filterArray = [...props.list]
        filterArray = filterArray.filter(item => item.startsWith(props.item)).map((item, i) => <h2 key={i}>{item}</h2>)
        return (
            <div>
            {filterArray}
        </div>
        )
}

export default FilterList