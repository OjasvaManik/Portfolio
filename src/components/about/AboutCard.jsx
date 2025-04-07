import {useState} from "react";

export default function AboutCard (props) {
    const [isHover, setIsHover] = useState(false);

    return (
        <div className={'text-center texts'}>
            <div
                className={'display-card p-4 group w-[17rem] mb-10'}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                <a href={props.link}   className={'flex justify-baseline'}>
                    <div className={'mr-4'}>
                        <img src={isHover ? props.img.hover.src : props.img.src} alt={isHover ? props.img.hover.alt : props.img.alt} loading="lazy" className={''}/>
                    </div>
                    <div className={'border-l-2 border-amber-500 mr-4 group-hover:border-amber-50 group-hover:duration-300'}></div>
                    <div className={'ml-10 flex-center'}>
                        <p className={'mr-2'}>{props.title}</p>
                        <img src={isHover ? "/icons/linking-hover.webp" : "/icons/linking.webp"} alt={isHover ? "linking-hover" : "linking"} loading="lazy" />
                    </div>
                </a>
            </div>
        </div>
    )
}