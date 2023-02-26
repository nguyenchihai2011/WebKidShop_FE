import classNames from 'classnames/bind';
import styles from './Breadcrumb.module.scss';

const cx = classNames.bind(styles);

function Breadcrumb({ page }) {
    return <div className={cx('wrapper')}>Trang chủ / {page} </div>;
}

export default Breadcrumb;
