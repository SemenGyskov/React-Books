import React, { useState } from 'react';
import About from './components/About';
import Addboock from './components/Addboock';
import Home from './components/Home'
import { BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom'
function App() {
    const initBooks=[{
        id:1,
        name:'Укус питона',
        cost:'400',
        otz:'Отзыв'
    },
    {
        id:2,
        name:'что делать если гречка засохла на тарелке?',
        cost:'4000',
        otz:'Отзыв'
    },
    {   id:3,
        name:'Гарри Поттер',
        cost:'800',
        otz:'Отзыв'
    }]
    const [books,setBooks]=useState(initBooks)
  return(
    <Router>
        <div>
            <nav>
                <Link to="/">Главная страница</Link> | 
                <Link to="/addboock" >Добавить книгу</Link> |
                <Link to="/about" >О компании</Link>
            </nav>
            <Routes>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/' element={<Home initBooks={books}/>}></Route>
            <Route path='/addboock' element={<Addboock initBooks={books} setBooks={setBooks}/>}></Route>
            </Routes>
        </div>
    </Router>
);
}

export default App;
