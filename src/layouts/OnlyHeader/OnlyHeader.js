import classNames from 'classnames/bind';
import styles from './OnlyHeader.module.scss';

import Header from '../components/Header/Header';
import Home from '../../pages/Home';
import Footer from '../components/Footer/Footer';

const cx = classNames.bind(styles);

function OnlyHeader() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>
                <Home />
            </div>
            <Footer />
        </div>
    );
}

export default OnlyHeader;
