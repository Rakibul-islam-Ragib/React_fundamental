import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <nav>
      <ul>
          <li>
              <NavLink exact to="/" activeStyle={{
                fontWeight: 'bold',
                color: 'red'
              }}>Home</NavLink>
          </li>
          <li>
              <NavLink exact to="/contact" activeStyle={{
                fontWeight: 'bold',
                color: 'red'
              }}>Contact</NavLink>
          </li>
          <li>
              <NavLink exact to="/post/js/React" activeStyle={{
                fontWeight: 'bold',
                color: 'red'
              }}>React</NavLink>
          </li>

      </ul>
    </nav>
  )
}

export default Navbar