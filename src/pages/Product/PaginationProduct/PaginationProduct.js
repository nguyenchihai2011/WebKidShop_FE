import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './PaginationProduct.module.scss';

const cx = classNames.bind(styles);

function PaginationProduct() {
    return (
        <div className={cx('pagination')}>
            <Link className={cx('pagination-item')}>&lt;</Link>
            <Link className={cx('pagination-item', 'active')}>1</Link>
            <Link className={cx('pagination-item')}>2</Link>
            <Link className={cx('pagination-item')}>&gt;</Link>
        </div>
    );
}

export default PaginationProduct;
