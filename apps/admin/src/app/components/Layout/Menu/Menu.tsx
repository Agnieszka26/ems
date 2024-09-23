import { Link } from 'react-router-dom';
import { ROUTE } from '../../../routes';
export const Menu = () => {
  return (
    <nav>
      <ul className="flex list-none">
        <li className="mx-2 text-black">
          <Link to={ROUTE.HOME}>Home </Link>
        </li>
      </ul>
    </nav>
  );
};
