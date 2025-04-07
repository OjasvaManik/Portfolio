import CertificationsCard from "./CerificationsCard.jsx";
import certificates from "../../data/certificates.js";

export default function Certifications () {
    const certificateDetails = certificates.map(certificate => {
        return (
            <CertificationsCard
                key = {certificate.id}
                {...certificate}
            />
        )
    })

    return (
        <div className={'card flex flex-wrap justify-center'}>
            {certificateDetails}
        </div>
    );
}