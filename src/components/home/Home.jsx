export default function Home () {
    const hours = new Date().getHours();
    let timeOfDay;

    if (hours < 6) timeOfDay = "go to bed";
    else if (hours >=6 && hours < 12) timeOfDay = "someone's awake early";
    else if (hours >= 12 && hours < 18) timeOfDay = "time slows down in the afternoon";
    else if (hours >= 18 && hours < 21) timeOfDay = "evening is just morning in denial";
    else if (hours >= 21) timeOfDay = "still awake? why?";

    return (
        <div className={'card flex-center'}>
            <div className={'text-amber-500 flex-center border-amber-500 mr-20 h-[70vh] w-[50vh] gradient p-1 rounded-full border-0 hover:duration-500 duration-500 hover:scale-110'}>
                <img src={'/img/ojasva-manik-bw.webp'} alt={'Ojasva Manik'} className={'object-cover h-[100%] w-[100%] rounded-full'} loading="lazy" />
            </div>
            <div className={'text-amber-500 text-4xl ml-20 w-[60vh] hover:scale-110 hover:duration-500 duration-500'}>
                <h1 className={'p-2'}>
                    {timeOfDay}
                </h1>
                <hr className={'m-2'} />
                <p className={'p-2 text-sm text-justify'}>
                    motivated and detail-oriented computer science student with hands-on experience in full-stack development. experienced in building scalable and maintainable applications using Spring Boot (Java and Kotlin), with hands-on experience in both MySQL and PostgreSQL.
                    <br />
                    <br />
                    skilled in developing responsive and modern user interfaces using React and TailwindCSS. comfortable working with RESTful APIs and applying clean architecture principles in project development.
                    <br />
                    <br />
                    strong programming background in C++, with working knowledge of C and Python. continuously expanding my technical skill set through academic projects and independent learning, with a focus on performance, security, and user experience.
                </p>
            </div>
        </div>
    );
}