import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from '../components/Header/Header.js';
import Nav from '../components/Nav/Nav.js';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb.js';
import Footer from '../components/Footer/Footer.js';

import classNames from 'classnames/bind';
import styles from './MainLayout.module.scss';

const cx = classNames.bind(styles);
function MainLayout({ page, children }) {
    return (
        <div className="wrapper">
            <Header />
            <Container>
                <Breadcrumb page={page} />
                <Row className={cx('content')}>
                    <Col lg="4">
                        <Nav />
                    </Col>
                    <Col lg="8">{children}</Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default MainLayout;
