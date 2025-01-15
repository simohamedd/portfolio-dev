
<<<<<<< HEAD
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
=======

import BaseLayout from "@/components/layouts/BaseLayout";
import axios from "axios";
import { useRouter } from "next/router";

const Portfolio = ({post}) => {
    const router = useRouter();
    
    return (
        <BaseLayout>
            <h1>I am portfolio page</h1>
            <h1>{post.title}</h1>
            <p>BODY: {post.body}</p>
            <p>ID: {post.id}</p>
        </BaseLayout>
    );
};


Portfolio.getInitialProps = async ({query}) => {
       let post = {}; 


       try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
            post = res.data       
        }catch(e){
           console.error(e);
       }
       return { post };
}

export default Portfolio;
>>>>>>> temp-branch
