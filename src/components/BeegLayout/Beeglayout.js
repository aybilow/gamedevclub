import classes from './Beeglayout.module.css';
import BeegNav from "./BeegNav";

function Beeglayout(props) {
    return ( <div>
            <BeegNav />
            <main className={classes.main}>{props.children}</main>

        </div>
    );

}

export default Beeglayout;