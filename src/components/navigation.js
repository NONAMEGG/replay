import { Link } from 'react-router-dom'

const Navigation =() => {
    return (
        <>
            <ul className='header__menu'>
            <li><Link to="/"> menuitems</Link></li>
            <li><Link to="/login"> menuitems</Link></li>
            <li><Link to="/"> menuitems</Link></li>
            <li><Link to="/login"> menuitems</Link></li>
            </ul>
        </>
    )
}

export default Navigation