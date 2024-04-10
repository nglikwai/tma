import { consultationStatus } from "@/type/consultation";
import ConsultationCard from "./ConsultationCard";

const ConsultationList = () => {
    return (
        <div className="[&>div]:border-b-[#D9D9D9] [&>div]:border-b ">
            {[
                consultationStatus.progress,
                consultationStatus.closed,
                consultationStatus.closed,
                consultationStatus.progress,
                consultationStatus.closed
            ].map(item => (
                <ConsultationCard key={item} status={item} />
            ))}
        </div>
    );
};

export default ConsultationList;
