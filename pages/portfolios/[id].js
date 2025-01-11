
import BaseLayout from "@/components/layouts/BaseLayout";
import { useRouter } from "next/router";

const PortfolioDetail = () => {
    const router = useRouter();

    return (
         <BaseLayout>
            <h1>Portfolio Page</h1>
            <h2>{router.query.id}</h2>
         </BaseLayout>
    )
}

export default PortfolioDetail;