import Col from 'react-bootstrap/esm/Col';

import classNames from 'classnames/bind';
import styles from './SellProduct.module.scss';

const cx = classNames.bind(styles);

function SellerProduct(props) {
    const { src, title, oldPrice, newPrice } = props;
    return (
        <Col xl={12} className={cx('sell-product')}>
            <img className={cx('product-img')} src={src} alt="product" />
            <div>
                <h5 className={cx('product-title')}>{title}</h5>
                <h5 className={cx('product-new-price')}>{newPrice}</h5>
                <h5 className={cx('product-old-price')}>{oldPrice}</h5>
            </div>
        </Col>
    );
}

export default SellerProduct;
