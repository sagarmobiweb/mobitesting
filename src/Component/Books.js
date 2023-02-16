import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Books = () => {
const [books, setBooks] = useState([]);
const [isLoaded, setIsLoaded] = useState(false);

useEffect(() => {
axios.get('https://wordpress-179008-1030625.cloudwaysapps.com//wp-json/wp/v2/books/')
.then(res => {
setBooks(res.data);
setIsLoaded(true);
})
.catch(err => console.log(err))
}, []);

console.log(books, isLoaded);
return (
<div>
<h1>welcome our story books </h1>
</div>
);
};

export default Books;




