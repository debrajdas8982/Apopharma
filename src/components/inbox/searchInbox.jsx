import { React, useState } from "react";
import { Textarea, Input } from '@mantine/core';
import List from "./List";
import styles from '../../assets/styles/components/searchInbox.module.css'

function SearchInbox() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className={styles.main}>
      <h2>Inbox</h2>
      <div className={styles.search}>
        <Input
           className={styles['inbox-details']}
          id="outlined-basic"
          onChange={inputHandler}
          placeholder='Search...'
        />
      </div>
      <List input={inputText} />
    </div>
  );
}

export default SearchInbox