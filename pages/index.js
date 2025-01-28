import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import { Container, Row, Col } from 'reactstrap';
import Typed from 'typed.js';

class Index extends React.Component {
  componentDidMount() {
    const options = {
      strings: ["Developer", "Tech Lover", "Team Player", "React JS", "Angular"],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 1000,
      loop: true,
      cursorChar: '|'
    };
    this.typed = new Typed('.self-typed', options);
  }

  componentWillUnmount() {
    if (this.typed) {
      this.typed.destroy();
    }
  }

  render() {
    return (
      <BaseLayout className="cover">
        <div className="main-section">
          <div className="background-image">
            <img src="/images/background-index.png" alt="Background" />
          </div>
          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper`}>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2>Full Stack Developer & IT Engineer</h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio and job history.
                        </div>
                      </div>
                      <img className="image" src="/images/section-1.png" alt="Profile" />
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    Welcome to the portfolio website of Bouazzaoui Mohamed.
                    Get informed, collaborate and discover projects I was working on through the years!
                  </h1>
                </div>
                <span className="self-typed"></span>
                <div className="hero-welcome-bio">
                  <h1>
                    Let's take a look on my work.
                  </h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BaseLayout>
    );
  }
}

export default Index;