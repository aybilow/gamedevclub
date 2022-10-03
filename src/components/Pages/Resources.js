import classes from './Resources.module.css'
import Cardone from "../ui/Cardone";

function Resources(){
    return(
        <div>
            <h1>Resources!</h1>
            <div className={classes.page}>
               <Cardone>
                   <h2>For those interested in learning how to code:</h2>
                   <iframe width="640" height="360" src="https://www.youtube.com/embed/XHqdL_7brMY"
                           title="YouTube video player"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                           allowFullScreen></iframe>
               </Cardone>

            </div>
        </div>
    );
}

export default Resources;