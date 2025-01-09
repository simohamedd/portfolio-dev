
import Header from "../shared/Header";


const BaseLayout = props => {


    return(
        <>
          <Header />
          {props.childern}
        </>
    )
}

export default BaseLayout; 