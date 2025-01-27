import BaseLayout from "../../components/layouts/BaseLayout";
import BasePage from "../../components/BasePage";
import Link from "next/link";
import axios from "axios"; 



const Portfolios = ({posts}) => {
  const renderPosts = () => {
    return posts.map(post =>  // Changed posts to post here
        <li key={post.id}>
            <Link href={`/portfolios/${post.id}`}>
                {post.title}  // Changed posts to post
            </Link>
        </li>
    )
} 



    return (
      
       <BaseLayout>
          <BasePage>
              <h1>portfolio page </h1>
              <ul>
                {renderPosts()}
              </ul>
          </BasePage>
       </BaseLayout>
      
    );
  }

  Portfolios.getInitialProps = async () => {
         let posts = [];
         try {
             const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
             posts = res.data;
         }catch(e) {
             console.error(e);
         }


         return { posts: posts.slice(0, 10)};
  }
  
  export default Portfolios; 