import classNames from 'classnames/bind';
import styles from './ProductList.module.scss';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

import NormalProduct from '../../Home/Product/NormalProduct/NormalProduct';
import Pagination from '../PaginationProduct/PaginationProduct';
import Col from 'react-bootstrap/esm/Col';

const cx = classNames.bind(styles);

function ProductList() {
    const products = [
        {
            id: 1,
            img: 'https://bizweb.dktcdn.net/thumb/large/100/117/632/products/giay5-6ad05ccc-be71-4eca-83f8-3e73a5570372-42da6097-d9b3-437a-afe5-66c1be4352b4-8a365fca-ef0a-415a-838e-f172e148cb7c.jpg?v=1473603367790',
            price: '450.000',
            name: 'Giày Thể Thao Buộc Dây - F56',
        },
        {
            id: 2,
            img: 'https://bizweb.dktcdn.net/thumb/large/100/117/632/products/giay5-6ad05ccc-be71-4eca-83f8-3e73a5570372-42da6097-d9b3-437a-afe5-66c1be4352b4-8a365fca-ef0a-415a-838e-f172e148cb7c.jpg?v=1473603367790',
            price: '450.000',
            name: 'Giày Thể Thao Buộc Dây - F56',
        },
        {
            id: 3,
            img: 'https://bizweb.dktcdn.net/thumb/large/100/117/632/products/giay5-6ad05ccc-be71-4eca-83f8-3e73a5570372-42da6097-d9b3-437a-afe5-66c1be4352b4-8a365fca-ef0a-415a-838e-f172e148cb7c.jpg?v=1473603367790',
            price: '450.000',
            name: 'Giày Thể Thao Buộc Dây - F56',
        },
        {
            id: 4,
            img: 'https://bizweb.dktcdn.net/thumb/large/100/117/632/products/giay5-6ad05ccc-be71-4eca-83f8-3e73a5570372-42da6097-d9b3-437a-afe5-66c1be4352b4-8a365fca-ef0a-415a-838e-f172e148cb7c.jpg?v=1473603367790',
            price: '450.000',
            name: 'Giày Thể Thao Buộc Dây - F56',
        },
    ];

    return (
        <div>
            <img
                src="//bizweb.dktcdn.net/100/117/632/themes/157694/assets/collection_banner_top.jpg?1564585558451"
                alt=""
            />
            <h2 className={cx('product-lable')}>Tất cả sản phẩm</h2>

            <Row>
                <Col xl={9}></Col>
                <Col>
                    <Form.Select aria-label="Default select example" className={cx('select')}>
                        <option className={cx('select-item')}>Open this select menu</option>
                        <option className={cx('select-item')} value="1">
                            One
                        </option>
                        <option className={cx('select-item')} value="2">
                            Two
                        </option>
                        <option className={cx('select-item')} value="3">
                            Three
                        </option>
                    </Form.Select>
                </Col>
            </Row>

            <Row>
                {products.map((product) => {
                    return (
                        <NormalProduct
                            key={product.id}
                            to={`/product/${product.id}`}
                            src={product.img}
                            price={`${product.price}đ`}
                            title={product.name}
                        />
                    );
                })}
            </Row>
            <Pagination />
        </div>
    );
}

export default ProductList;
