import {useState} from "react";

export default function ProjectCard (props) {
    const [isHover, setIsHover] = useState(false);

    return (
        <div className={'text-center texts my-8 max-w-[30%]'}>
            <div
                className={'display-card ml-4 p-4 group'}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                <a href={props.link} target={'_blank'}>
                    <div>
                        <img src={props.img.src} alt={props.img.alt} className={'object-contain h-[100%] w-[100%] rounded-md'} loading="lazy" />
                    </div>
                    <hr className={'my-8'} />
                    <div className={'flex flex-col justify-center mb-6'}>
                        <div className={'flex-center'}>
                            <p className={'mr-2'}>{props.title}</p>
                            <img src={isHover ? "/icons/linking-hover.webp" : "/icons/linking.webp"} alt={isHover ? "linking-hover" : "linking"} loading="lazy" />
                        </div>
                        <p className={'text-amber-500/75 group-hover:text-amber-50 group-hover:duration-300'}>{props.description}</p>
                        <hr className={'my-8'} />
                        <div className={'flex justify-center gap-2 flex-wrap mt-2'}>
                            {props.lang.map((item, index) => (
                                <span key={index} className={'text-amber-500/75 group-hover:text-amber-50 group-hover:duration-300 border-2 border-amber-500 px-2 py-1 rounded'}>
                                {item.tag}
                            </span>
                            ))}
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}