import { React, useState } from 'react'
import data from "./messageData.json"

function List(props) {
    const filteredData = data.filter((el) => {
        if (props.input === '') {
            return el;
        } else {
            return el.subject.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.id}>{item.sender_name}{item.subject}</li>
            ))}
        </ul>
    )
}

export default List