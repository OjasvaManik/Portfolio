import {useState} from "react";

export default function SkillCard (props) {
    const [isHover, setIsHover] = useState(false);

    return (
        <div className={'text-center texts'}>
            <div
                className={'display-card flex items-stretch p-4 group'}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                <div className={'mr-4'}>
                    <img src={isHover ? props.img.hover.src : props.img.src} alt={isHover ? props.img.hover.alt : props.img.alt} loading="lazy" />
                </div>
                <div className={'border-l-2 border-amber-500 mr-4 group-hover:border-amber-50'}></div>
                <div className={'grid grid-rows-2'}>
                    <p>{props.title}</p>
                    <p className={'text-amber-500/75 group-hover:text-amber-50 group-hover:duration-300'}>{props.desc}</p>
                </div>
            </div>
        </div>
    )
}