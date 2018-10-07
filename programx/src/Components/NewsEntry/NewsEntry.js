import React from 'react';
import './NewsEntry.css'

//Object that will display the news information

const NewsEntry = ({title, author, date, text}) => {
  return(
    <div  class = "newsEntry grow">
      <h1 class = "newsEntryH1">{title}</h1>
      <p  class = "newsEntryAuthor">{author}</p>
      <p  class = "newsEntryDate">{date}</p>
      <p  class = "newsEntryBody">{text}</p>
    </div>
  );
}

export default NewsEntry;
