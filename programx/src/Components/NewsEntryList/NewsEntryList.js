import React from 'react';
import NewsEntry from '../NewsEntry/NewsEntry.js';
import './NewsEntryList.css'

//List of news. The object will create entries with a list of objects containing a news each.

const NewsEntryList = ({news}) => {
  return(
    <div>
      <ul class = "newsEntryList">
        {
          news.map((entry) => {
            return(
              <NewsEntry
                title = {entry.title}
                author = {entry.author}
                date = {entry.date}
                text = {entry.text}/>
            );
          })
        }
      </ul>
    </div>
  );
}

export default NewsEntryList;
