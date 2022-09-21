import Card from "../ui/Card";
import classes from './Beeghome.module.css'
import chrims from './chrims.jpg'

function Beeghome(){
    return (
        <div className={classes.page}>
            <img src="https://pixelrino.neocities.org/hypnogifarchive/gooper-3d-look.gif" alt="Goofy Fish 🔎"/>

            <Card>
                <img src={chrims} alt="Chrims :)" width="75%"/>
                <img src="https://pixelrino.neocities.org/hypnogifarchive/pizza-dance.gif" alt="funny pizza :0" />
                <div>
                    <h2>Game Development Club!</h2>
                    <h3>More info Coming Soon!</h3>
                </div>
            </Card>

            <img src="https://pixelrino.neocities.org/hypnogifarchive/gooper-3d-sax.gif" alt="Saxophish 🎷"/>


        </div>
    );
}

export default Beeghome;