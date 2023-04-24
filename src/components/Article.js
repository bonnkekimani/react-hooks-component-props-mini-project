import React from 'react'
function Article(props){    const { title, date, preview } = props;    const NewDate = date ? new Date(date).toLocaleDateString() : 'January 1, 1970';  return (    <div>Article        <article>        <h3>{title}</h3>        <small>{NewDate}</small>        <p>{preview}</p>
        </article>    </div>  )}
export default Article;
