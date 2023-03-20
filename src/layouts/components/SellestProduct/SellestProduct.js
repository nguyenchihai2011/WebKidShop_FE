import Row from 'react-bootstrap/esm/Row';
import classNames from 'classnames/bind';
import styles from './SellestProduct.module.scss';

import SellProduct from './SellProduct/SellProduct';

const cx = classNames.bind(styles);

function SellestProduct() {
    return (
        <Row>
            <h5 className={cx('sellest-product-lable')}>Sản phẩm bán chạy</h5>
            <SellProduct
                src="https://bizweb.dktcdn.net/thumb/compact/100/117/632/products/aovay12.jpg?v=1473606357990"
                title="Váy liền thân KIDS-02"
                price="250.000đ"
            />
            <SellProduct
                src="https://bizweb.dktcdn.net/thumb/compact/100/117/632/products/aovay10-b5526dcd-b7d6-4897-b574-5a975a7d60de.jpg?v=1473603768963"
                title="Váy liền thân KIDS-09"
                price="250.000đ"
            />
            <SellProduct
                src="https://bizweb.dktcdn.net/thumb/compact/100/117/632/products/aovay9.jpg?v=1473603722567"
                title="Váy liền thân KIDS-KF5"
                price="250.000đ"
            />
            <SellProduct
                src="https://bizweb.dktcdn.net/thumb/compact/100/117/632/products/aovay1.jpg?v=1473603655807"
                title="Váy liền thân KIDS"
                price="220.000đ"
            />
        </Row>
    );
}

export default SellestProduct;
