import classes from './Cardtwo.module.css';

function Cardtwo(props){
    return <div className={classes.card}>
        {props.children}
    </div>
}

export default Cardtwo;