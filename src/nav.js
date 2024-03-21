import {Link} from "react-router-dom";

function Nav() {
    return (<div>
            <Link to="/">Redux Examples</Link> | |
            <Link to="/tuiter/home">Tuiter</Link>
        </div>)
}

export default Nav;