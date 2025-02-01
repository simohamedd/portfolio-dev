
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import Link from "next/link";
import { useGetPosts } from '@/actions';





const Portfolios = () => {
  const { posts, error } = useGetPosts();

    

  const renderPosts = () => {
    return posts.map(post =>  // Changed posts to post here
        <li key={post.id} style={{'fontSize': '20px'}}>
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
              { posts &&
                <ul>
                  {renderPosts(posts)}
                </ul>
              }
              { error &&
                <div className="alert alert-danger">{error.message}</div>
              }
          </BasePage>
       </BaseLayout>
      
    );
  }

 
  
  export default Portfolios; 