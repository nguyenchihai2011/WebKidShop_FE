import classNames from 'classnames/bind';
import styles from './OnlyHeader.module.scss';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const cx = classNames.bind(styles);

function OnlyHeader({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>{children}</div>
            <Footer />
        </div>
    );
}

export default OnlyHeader;
