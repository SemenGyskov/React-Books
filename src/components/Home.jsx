import React from "react";
import { useState } from "react";
function Home(initBooks){ 

return <div>
    <h2>Набор Книг</h2>
    {initBooks.initBooks.map((item,book)=> (
        <div key={book}>
            <p>Название: {item.name}</p>
            <p>Цена: {item.cost}</p>
            <p>Отзыв: {item.otz}</p>
        </div>
    ))}
    </div>; }
export default Home;