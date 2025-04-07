export default function AboutCard (props) {
    return (
        <div className={'text-center texts my-8 flex justify-center'}>
            <a href={props.link} target={'_blank'} className={'flex flex-col items-center max-w-[15vw]'}>
                <div className={'display-card flex min-w-[15vw]'}>
                    <div className={'ml-2'}>
                        <img src={props.img.src} alt={props.img.alt} />
                    </div>
                    <div className={'border-l-2 border-amber-500 mx-4'}>

                    </div>
                    <div className={'text-center flex-center ml-10'}>
                        <p>{props.title}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}