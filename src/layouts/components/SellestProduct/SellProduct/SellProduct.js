import Col from 'react-bootstrap/esm/Col';

import classNames from 'classnames/bind';
import styles from './SellProduct.module.scss';

const cx = classNames.bind(styles);

function SellerProduct({ src, title, price }) {
    return (
        <Col xl={12} className={cx('sell-product')}>
            <img className={cx('product-img')} src={src} alt="product" />
            <div>
                <h5 className={cx('product-title')}>{title}</h5>
                <h5 className={cx('product-price')}>{price}</h5>
            </div>
        </Col>
    );
}

export default SellerProduct;
