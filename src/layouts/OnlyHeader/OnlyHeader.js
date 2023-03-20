import classNames from 'classnames/bind';
import styles from './OnlyHeader.module.scss';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Container from 'react-bootstrap/esm/Container';

const cx = classNames.bind(styles);

function OnlyHeader({ children, page }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>{children}</div>
            <Footer />
        </div>
    );
}

export default OnlyHeader;
