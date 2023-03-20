import Pagination from 'react-bootstrap/Pagination';
import classNames from 'classnames/bind';
import styles from './PaginationProduct.module.scss';

const cx = classNames.bind(styles);

function PaginationProduct() {
    return (
        <Pagination className={cx('pagination')}>
            <Pagination.First className={cx('pagination-item')} />
            <Pagination.Prev className={cx('pagination-item')} />
            <Pagination.Item className={cx('pagination-item')}>{1}</Pagination.Item>
            <Pagination.Item className={cx('pagination-item')}>{2}</Pagination.Item>
            <Pagination.Next className={cx('pagination-item')} />
            <Pagination.Last className={cx('pagination-item')} />
        </Pagination>
    );
}

export default PaginationProduct;
