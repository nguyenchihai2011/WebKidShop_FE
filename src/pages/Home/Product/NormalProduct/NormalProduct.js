import Col from 'react-bootstrap/esm/Col';

import classNames from 'classnames/bind';
import styles from './NormalProduct.module.scss';

import Button from '../../../../components/Button/Button';

const cx = classNames.bind(styles);

function NormalProduct({ src, price, title }) {
    return (
        <Col>
            <Button to="" className={cx('normal-product')}>
                <img className={cx('product-img')} src={src} alt="giay the thao" />
                <div className={cx('product-info')}>
                    <h5 className={cx('product-price')}>{price}</h5>
                    <h5 className={cx('product-title')}>{title}</h5>
                    <img
                        src="https://bizweb.dktcdn.net/100/117/632/themes/157694/assets/btn-buy.png?1564585558451"
                        alt="mua ngay"
                    />
                </div>
            </Button>
        </Col>
    );
}

export default NormalProduct;
