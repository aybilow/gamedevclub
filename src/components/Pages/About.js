import classes from "./About.module.css";
import bil from "./bil.jpg";
import chrims from "./chrims.jpg";
import Cardtwo from "../ui/Cardtwo";

function About (){
    return (
        <div>
            <h1 className={classes.title}>About Us:</h1>

        <div className={classes.page}>

            <Cardtwo>
                <figure>
                    <h2>Leadership</h2>
                    <img src={bil} alt="bil" width ="50%" />
                    <figcaption>Aaron Bilow, President</figcaption>
                </figure>
                <figure>
                    <h2>&nbsp;</h2>
                    <img src ={chrims} alt="chrims" width="50%" />
                    <figcaption>Christopher Brunal, Vice President</figcaption>
                </figure>
            </Cardtwo>
            <Cardtwo>
                <h2 className={classes.mission}>Our<br/>Mission:</h2>
                <p>
                    We're looking to connect programmers, artists, musicians and writers to share in the video
                    game development process. We also aim to expose and discuss the video game development
                    process in order to show that there's more that goes into video games than just programming.<br/>
                    Join us to be connected with a team and aid in the development process!



                </p>
            </Cardtwo>
        </div>
        </div>
    );

}

export default About;