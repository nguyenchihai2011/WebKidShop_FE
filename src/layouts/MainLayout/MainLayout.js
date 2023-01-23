import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from '../components/Header/Header.js';
import Nav from '../components/Nav/Nav.js';

function MainLayout({ children }) {
    return (
        <div className="wrapper">
            <Header />
            <Container>
                <div className="content">
                    <Row>
                        <Col lg="4">
                            <Nav />
                        </Col>
                        <Col lg="8">{children}</Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default MainLayout;
