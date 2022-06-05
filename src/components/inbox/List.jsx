import { React } from 'react'
import data from "./messageData.json"
import styles from '../../assets/styles/components/searchInbox.module.css'

function List(props) {
    const filteredData = data.filter((el) => {
        if (props.input === '') {
            return el;
        } else {
            return el.text.toLowerCase().includes(props.input)
        }
    })
    return (
        <div>
            {filteredData.map((item) => (
                <li 
                className={styles.list}
                key={item.id}>
                {item.sender_name}
                <br />
                {item.text}
                <br />
                {item.date}
                </li>
            ))}
        </div>
    )
}

export default List