import about from "../../data/about.js";
import AboutCard from "./AboutCard.jsx";

export default function About () {

    const aboutDetails = about.map(info => {
        return (
            <AboutCard
                key ={info.id}
                {...info}
            />
        )
    })

    return (
        <div className={'card flex flex-col justify-center'}>
            {aboutDetails}
        </div>
    );
}