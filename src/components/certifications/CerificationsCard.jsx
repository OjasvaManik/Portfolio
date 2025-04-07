export default function CertificationsCard (props) {
    return (
        <div className={'text-center texts my-8 max-w-[30%]'}>
            <div className={'display-card ml-4 p-4 group'}>
                <div>
                    <img src={props.img.src} alt={props.img.alt} className={'object-contain h-[100%] w-[100%] rounded-md'} />
                </div>
                <hr className={'my-8'} />
                <div className={'flex flex-col justify-center mb-6'}>
                    <p>{props.title}</p>
                    <p className={'text-amber-500/75 group-hover:text-amber-50'}>{props.by}</p>
                    <p className={'text-amber-500/50 group-hover:text-amber-50'}>{props.issued}</p>
                </div>
            </div>
        </div>
    )
}