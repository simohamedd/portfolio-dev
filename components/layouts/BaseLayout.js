  import Header from "../shared/Header";

  const BaseLayout = props => {
      return (
          <>
              <Header />
              {props.children}  {/* Fixed the typo here */}
          </>
      )
  }

  export default BaseLayout;