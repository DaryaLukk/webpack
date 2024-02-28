import { Link, Outlet } from 'react-router-dom';
import png from '@/assets/png.png';
import Svg from '@/assets/svg.svg';

export type Todo = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export function App() {
  return (
    <div>
      <h1>
        PLATFORM=
        {__PLATFORM__}
      </h1>
      <div>
        <img src={png} alt="" width={300} height={300} />
      </div>
      <Svg width={100} height={100} fill="yellow" />
      {/* По идее должен работаь :( */}
      {/* <Svg width={100} height={100} color="blue" /> */}
      <div>Мой сайтик</div>
      <Link to="/about">about</Link>
      <br />
      <Link to="/shop">shop</Link>
      <Outlet />
    </div>
  );
}
