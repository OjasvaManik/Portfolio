import {useState} from "react";

export default function AboutCard (props) {
    const [isHover, setIsHover] = useState(false);

    return (
        <div className={'text-center texts my-8 flex justify-center'}>
                <div
                    className={'display-card flex flex-col items-center p-4 group'}
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    <a href={props.link} target={'_blank'} className={'flex max-w-[15vw] min-w-[15vw]'}>
                        <div className={'ml-2'}>
                            <img src={isHover ? props.img.hover.src : props.img.src} alt={isHover ? props.img.hover.alt : props.img.alt}/>
                        </div>
                        <div className={'border-l-2 border-amber-500 mx-4 group-hover:border-amber-50'}>

                        </div>
                        <div className={'text-center flex-center mx-10'}>
                            <p>{props.title}</p>
                        </div>
                    </a>
                </div>
        </div>
    )
}