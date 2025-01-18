

import BaseLayout from "@/components/layouts/BaseLayout";
import axios from "axios";
import { useRouter } from "next/router";

const Portfolio = ({portfolio}) => {
   
    
    return (
        <BaseLayout>
            <h1>I am portfolio page</h1>
            <h1>{portfolio.title}</h1>
            <p>BODY: {portfolio.body}</p>
            <p>ID: {portfolio.id}</p>
        </BaseLayout>
    )
}


Portfolio.getInitialProps = async ({query}) => {
       let post = {}; 


       try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
            post = res.data       
        }catch(e){
           console.error(e);
       }
       return { portfolio: post };
}

export default Portfolio;
