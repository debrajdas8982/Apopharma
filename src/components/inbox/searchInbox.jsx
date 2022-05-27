import { React, useState } from "react";
import { Textarea } from '@mantine/core';
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
      <h1>React Search</h1>
      <div className={styles.search}>
        <Textarea
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <List input={inputText} />
    </div>
  );
}

export default SearchInbox