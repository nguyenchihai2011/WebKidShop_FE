import classNames from 'classnames/bind';
import styles from './ProductDetails.module.scss';
import { useParams, Link } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import Nav from '../../layouts/components/Nav/Nav';
import SellestProduct from '../../layouts/components/SellestProduct/SellestProduct';
import NormalProduct from '../Home/Product/NormalProduct/NormalProduct';

const cx = classNames.bind(styles);

function ProductDetails() {
    const { id } = useParams();
    return (
        <Container className={cx('product-details')}>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
                <Breadcrumb.Item href="http://localhost:3000/product/all">Sản phẩm</Breadcrumb.Item>
                <Breadcrumb.Item active>Sơ mi kẻ sọc thời trang cho bé - SK</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col>
                    <div className={cx('productdetails')}>
                        <img
                            src="https://bizweb.dktcdn.net/100/117/632/products/somi6-6f995308-45d3-4e20-8d47-4618d8f5a0c7.jpg?v=1473604233470"
                            alt=""
                            className={cx('productdetails-img')}
                        />
                    </div>
                    <div className={cx('productdetails-list')}>
                        <img
                            className={cx('productdetails-item')}
                            src="https://bizweb.dktcdn.net/thumb/medium/100/117/632/products/somi6-6f995308-45d3-4e20-8d47-4618d8f5a0c7-14476867-2495-491c-806b-86678712960e.jpg?v=1473604250600"
                            alt=""
                        />
                        <img
                            className={cx('productdetails-item')}
                            src="https://bizweb.dktcdn.net/thumb/medium/100/117/632/products/somi6-6f995308-45d3-4e20-8d47-4618d8f5a0c7-14476867-2495-491c-806b-86678712960e.jpg?v=1473604250600"
                            alt=""
                        />
                        <img
                            className={cx('productdetails-item')}
                            src="https://bizweb.dktcdn.net/thumb/medium/100/117/632/products/somi6-6f995308-45d3-4e20-8d47-4618d8f5a0c7-14476867-2495-491c-806b-86678712960e.jpg?v=1473604250600"
                            alt=""
                        />
                        <img
                            className={cx('productdetails-item')}
                            src="https://bizweb.dktcdn.net/thumb/medium/100/117/632/products/somi6-6f995308-45d3-4e20-8d47-4618d8f5a0c7-14476867-2495-491c-806b-86678712960e.jpg?v=1473604250600"
                            alt=""
                        />
                        <img
                            className={cx('productdetails-item')}
                            src="https://bizweb.dktcdn.net/thumb/medium/100/117/632/products/somi6-6f995308-45d3-4e20-8d47-4618d8f5a0c7-14476867-2495-491c-806b-86678712960e.jpg?v=1473604250600"
                            alt=""
                        />
                    </div>
                </Col>
                <Col>
                    <h1 className={cx('productdetails-name')}>Sơ mi kẻ sọc thời trang cho bé - SK</h1>
                    <p>
                        Giá: <span className={cx('productdetails-price')}>245.000₫</span>
                    </p>
                    <div className={cx('productdetails-btn')}>Còn hàng</div>
                    <p className={cx('productdetails-code')}>
                        Mã sản phẩm:<span className={cx('productdetails-code-span')}>SM-234_1</span>
                    </p>
                    <p className={cx('productdetails-brand')}>
                        Thương hiệu:<span className={cx('productdetails-brand-span')}>GAP</span>
                    </p>
                    <Form.Select aria-label="Default select example" className={cx('productdetails-dropdown')}>
                        <option>Size</option>
                        <option value="1">S</option>
                        <option value="2">M</option>
                        <option value="3">L</option>
                        <option value="3">XL</option>
                    </Form.Select>
                    <Form.Select aria-label="Default select example" className={cx('productdetails-dropdown')}>
                        <option>Màu sắc</option>
                        <option value="1">Hồng</option>
                        <option value="2">Trắng</option>
                        <option value="3">Đen</option>
                    </Form.Select>
                    <div>
                        <input
                            type="number"
                            name="quantity"
                            min="1"
                            max={Infinity}
                            defaultValue="1"
                            className={cx('productdetails-select')}
                        />
                        <Link>
                            <button className={cx('productdetails-buy-btn')}>Đặt hàng</button>
                        </Link>
                    </div>
                    <p className={cx('productdetails-hotline-text')}>Gọi ngay để được tư vấn mua hàng !</p>
                    <div className={cx('productdetails-hotline-block')}>HOTLINE: 0963647129</div>
                    <img
                        src="https://bizweb.dktcdn.net/100/117/632/themes/157694/assets/icon-dt.jpg?1564585558451"
                        alt=""
                    />
                </Col>
            </Row>
            <Row className={cx('productdetais-more-info')}>
                <Col xl={8}>
                    <Row className={cx('productdetails-info-wrap')}>
                        <h2 className={cx('productdetails-lable')}>Thông tin sản phẩm</h2>
                        <div>
                            <p className={cx('productdetails-info')}>
                                Áo sơ mi kẻ sọc cho bé trai cá tính và khỏe khoắn không chỉ được mix cùng quần jeans,
                                quần kaki để xuống phố mà có thể "kết thân" cùng áo thun năng động mang đến cho bé một
                                phong cách hoàn toàn mới lạ và sành điệu. Chất vải Kate Oxford xuất dư cực đẹp, thoáng
                                mát lên form áo đứng dáng nhìn rất yêu. Mẹ yên tâm mua sắm vì áo được may từ chất liệu
                                kate mềm mịn và thấm hút mồ hôi hiệu quả, mang đến sự thoải mái, mát mẻ cho bé. Áo với
                                thiết kế có túi nhỏ trước ngực, cổ bẻ cổ điển, đính nút chắc chắn bền đẹp.
                            </p>
                            <div className={cx('productdetails')}>
                                <img
                                    src="https://bizweb.dktcdn.net/100/117/632/products/somi6-6f995308-45d3-4e20-8d47-4618d8f5a0c7.jpg?v=1473604233470"
                                    alt=""
                                    className={cx('productdetails-img')}
                                />
                            </div>
                        </div>
                    </Row>
                    <Row className={cx('productdetails-info-wrap')}>
                        <h2 className={cx('productdetails-lable')}>Sản phẩm liên quan</h2>
                        <Row>
                            <Col xl={3} md={6}>
                                <NormalProduct
                                    src="https://bizweb.dktcdn.net/thumb/large/100/117/632/products/giay5-6ad05ccc-be71-4eca-83f8-3e73a5570372-42da6097-d9b3-437a-afe5-66c1be4352b4-8a365fca-ef0a-415a-838e-f172e148cb7c.jpg?v=1473603367790"
                                    oldPrice="450.000"
                                    newPrice="450.000"
                                    discount="0"
                                    title="giầy thể thao buộc dây - f56"
                                />
                            </Col>
                            <Col xl={3} md={6}>
                                <NormalProduct
                                    src="https://bizweb.dktcdn.net/thumb/large/100/117/632/products/giay5-6ad05ccc-be71-4eca-83f8-3e73a5570372-42da6097-d9b3-437a-afe5-66c1be4352b4-8a365fca-ef0a-415a-838e-f172e148cb7c.jpg?v=1473603367790"
                                    oldPrice="450.000"
                                    newPrice="450.000"
                                    discount="0"
                                    title="giầy thể thao buộc dây - f56"
                                />
                            </Col>
                            <Col xl={3} md={6}>
                                <NormalProduct
                                    src="https://bizweb.dktcdn.net/thumb/large/100/117/632/products/giay5-6ad05ccc-be71-4eca-83f8-3e73a5570372-42da6097-d9b3-437a-afe5-66c1be4352b4-8a365fca-ef0a-415a-838e-f172e148cb7c.jpg?v=1473603367790"
                                    oldPrice="450.000"
                                    newPrice="450.000"
                                    discount="0"
                                    title="giầy thể thao buộc dây - f56"
                                />
                            </Col>
                            <Col xl={3} md={6}>
                                <NormalProduct
                                    src="https://bizweb.dktcdn.net/thumb/large/100/117/632/products/giay5-6ad05ccc-be71-4eca-83f8-3e73a5570372-42da6097-d9b3-437a-afe5-66c1be4352b4-8a365fca-ef0a-415a-838e-f172e148cb7c.jpg?v=1473603367790"
                                    oldPrice="450.000"
                                    newPrice="450.000"
                                    discount="0"
                                    title="giầy thể thao buộc dây - f56"
                                />
                            </Col>
                        </Row>
                    </Row>
                </Col>
                <Col xl={4}>
                    <Nav />
                    <SellestProduct />
                </Col>
            </Row>
        </Container>
    );
}

export default ProductDetails;
