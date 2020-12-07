import {Link} from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Welcome</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <p>en / ru</p>
      <p>dark / light</p>
    </nav>
  )
}

export default Menu