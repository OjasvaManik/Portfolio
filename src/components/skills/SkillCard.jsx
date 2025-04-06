export default function SkillCard (props) {
    return (
        <div className={'text-center texts'}>
            <div className={'display-card flex items-stretch p-4'}>
                <div className={'mr-4'}>
                    <img src={props.img.src} alt={props.img.alt}/>
                </div>
                <div className={'border-l-2 border-amber-500 mr-4'}></div>
                <div className={'grid grid-rows-2'}>
                    <p>{props.title}</p>
                    <p className={'text-amber-500/75'}>{props.desc}</p>
                </div>
            </div>
        </div>
    )
}