import classes from "./Cardone.module.css";

function Cardone(props) {
    return <div className={classes.card}>
        {props.children}
    </div>
}

export default Cardone;