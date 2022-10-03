import { Link } from "react-router-dom";

import classes from './BeegNav.module.css'

function BeegNav() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Game Dev Club</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li>
                        <Link to='/'>Dummy 3</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default BeegNav;