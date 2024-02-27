import {
  MouseEvent, useEffect, useRef, useState,
} from 'react';
import { Link, Outlet } from 'react-router-dom';
import classes from './App.module.scss';

export type Todo = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export function App() {
  // const [todos, setTodos] = useState <Array<Todo>>([]);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then((response) => response.json())
  //     .then((data) => setTodos(data));
  // }, []);

  // const [color, setColor] = useState('rgb(0, 0, 0)');

  // const style = {
  //   backgroundColor: color,
  //   height: '500px',
  //   width: '500px',
  // };

  // const changeColor = (): void => {
  //   const getRandomRGB = () => Math.floor(Math.random() * 299);

  //   setColor(`rgb(${getRandomRGB()}, ${getRandomRGB()}, ${getRandomRGB()})`);
  // };

  return (
    <div>
      <div>Мой сайтик</div>
      {/* {todos.map(({ title, id }) => (id < 10 && <div key={id}>{title}</div>))} */}
      {/* {board.map(() => <div style={styleCell} />)} */}
      {/* <div aria-hidden="true" onClick={changeColor} style={style} /> */}
      <Link to="/about">about</Link>
      <br />
      <Link to="/shop">shop</Link>
      <Outlet />
    </div>
  );
}
