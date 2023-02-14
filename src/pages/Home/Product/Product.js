import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Product.module.scss';

import Button from '../../../components/Button/Button';
import Brand from './Brand/Brand';
import SellerProduct from './SellerProduct/SellerProduct';
import NormalProduct from './NormalProduct/NormalProduct';

const cx = classNames.bind(styles);

function Product() {
    return (
        <div className={cx('wrapper')}>
            <Container>
                <Row>
                    <Col xl={3}>
                        <aside>
                            <Row>
                                <Brand src="https://bizweb.dktcdn.net/100/117/632/themes/157694/assets/logo1.png?1564585558451" />
                                <Brand src="https://bizweb.dktcdn.net/100/117/632/themes/157694/assets/logo2.png?1564585558451" />
                                <Brand src="https://bizweb.dktcdn.net/100/117/632/themes/157694/assets/logo3.png?1564585558451" />
                                <Brand src="https://bizweb.dktcdn.net/100/117/632/themes/157694/assets/logo4.png?1564585558451" />
                                <Brand src="https://bizweb.dktcdn.net/100/117/632/themes/157694/assets/logo5.png?1564585558451" />
                                <Brand src="https://bizweb.dktcdn.net/100/117/632/themes/157694/assets/logo6.png?1564585558451" />
                                <Brand src="https://bizweb.dktcdn.net/100/117/632/themes/157694/assets/logo7.png?1564585558451" />
                                <Brand src="https://bizweb.dktcdn.net/100/117/632/themes/157694/assets/logo8.png?1564585558451" />
                            </Row>
                            <Row>
                                <h5 className={cx('seller-product-lable')}>Sản phẩm bán chạy</h5>
                                <SellerProduct
                                    src="https://bizweb.dktcdn.net/thumb/compact/100/117/632/products/aovay12.jpg?v=1473606357990"
                                    title="Váy liền thân KIDS-02"
                                    price="250.000đ"
                                />
                                <SellerProduct
                                    src="https://bizweb.dktcdn.net/thumb/compact/100/117/632/products/aovay10-b5526dcd-b7d6-4897-b574-5a975a7d60de.jpg?v=1473603768963"
                                    title="Váy liền thân KIDS-09"
                                    price="250.000đ"
                                />
                                <SellerProduct
                                    src="https://bizweb.dktcdn.net/thumb/compact/100/117/632/products/aovay9.jpg?v=1473603722567"
                                    title="Váy liền thân KIDS-KF5"
                                    price="250.000đ"
                                />
                                <SellerProduct
                                    src="https://bizweb.dktcdn.net/thumb/compact/100/117/632/products/aovay1.jpg?v=1473603655807"
                                    title="Váy liền thân KIDS"
                                    price="220.000đ"
                                />
                            </Row>
                            <div className={cx('contact')}>
                                <div className={cx('sub-contact')}>
                                    <h5 className={cx('contact-title')}>HOTLINE</h5>
                                    <h5 className={cx('contact-phone')}>0963.647.129</h5>
                                </div>
                            </div>
                        </aside>
                    </Col>
                    <Col xl={9}>
                        <h3 className={cx('hot-product-lable')}>Sản phẩm nổi bật</h3>
                        <Row>
                            <Col>
                                <Button to="" className={cx('hot-product')}>
                                    <img
                                        className={cx('product-img')}
                                        src="https://bizweb.dktcdn.net/thumb/grande/100/117/632/products/aovay1.jpg?v=1473603655807"
                                        alt="vay lien than"
                                    />
                                    <div className={cx('product-sale')}>-9%</div>
                                    <div className={cx('product-info')}>
                                        <h5 className={cx('product-new-price')}>250.000đ</h5>
                                        <h5 className={cx('product-old-price')}>275.000đ</h5>
                                        <h5 className={cx('product-title')}>Váy liền thân KIDS - KF5</h5>
                                        <img
                                            src="https://bizweb.dktcdn.net/100/117/632/themes/157694/assets/btn-buy.png?1564585558451"
                                            alt="mua ngay"
                                        />
                                    </div>
                                </Button>
                            </Col>
                            <Col>
                                <Row>
                                    <NormalProduct
                                        src="https://bizweb.dktcdn.net/thumb/large/100/117/632/products/giay5-6ad05ccc-be71-4eca-83f8-3e73a5570372-42da6097-d9b3-437a-afe5-66c1be4352b4-8a365fca-ef0a-415a-838e-f172e148cb7c.jpg?v=1473603367790"
                                        price="450.000đ"
                                        title="giầy thể thao buộc dây - f56"
                                    />
                                    <NormalProduct
                                        src="https://bizweb.dktcdn.net/thumb/large/100/117/632/products/giay1-0406895d-36ca-4e58-811a-e78d13fd1d1d.jpg?v=14736031937"
                                        price="450.000đ"
                                        title="giầy thể thao buộc dây - 05"
                                    />
                                </Row>
                                <Button to="" className={cx('view-full-product')}>
                                    <div className={cx('full-product-border')}>
                                        Xem toàn bộ sản phẩm{' '}
                                        <FontAwesomeIcon
                                            className={cx('view-full-product-icon')}
                                            icon={faCircleRight}
                                        />
                                    </div>
                                </Button>
                            </Col>
                        </Row>
                        <div className={cx('new-product')}>
                            <h3 className={cx('new-product-lable')}>Hàng mới về!</h3>
                            <div className={cx('new-product-type')}>
                                <Button className={cx('product-type-btn')} small>
                                    Bé trai
                                </Button>
                                <Button className={cx('product-type-btn')} small>
                                    Bé gái
                                </Button>
                                <Button className={cx('product-type-btn')} small>
                                    Phụ kiện
                                </Button>
                            </div>
                        </div>
                        <Row className={cx('new-product-list')}>
                            <NormalProduct
                                src="https://bizweb.dktcdn.net/thumb/large/100/117/632/products/somi6-6f995308-45d3-4e20-8d47-4618d8f5a0c7-14476867-2495-491c-806b-86678712960e.jpg?v=1473604250600"
                                price="245.000đ"
                                title="Sơ mi kẻ sọc thời trang cho bé-03"
                            />
                            <NormalProduct
                                src="https://bizweb.dktcdn.net/thumb/large/100/117/632/products/somi3-6683f4d9-784f-4dfa-9223-a45d58dd521b.jpg?v=1473604237837"
                                price="245.000đ"
                                title="Sơ mi kẻ sọc thời trang cho bé-SK"
                            />
                            <NormalProduct
                                src="https://bizweb.dktcdn.net/thumb/large/100/117/632/products/somi1.jpg?v=1473604123800"
                                price="245.000đ"
                                title="Sơ mi kẻ sọc thời trang cho bé"
                            />
                            <NormalProduct
                                src="https://bizweb.dktcdn.net/thumb/large/100/117/632/products/giay1-0406895d-36ca-4e58-811a-e78d13fd1d1d.jpg?v=1473603193730"
                                price="245.000đ"
                                title="Giày thể thao buộc dây-05"
                            />
                        </Row>
                        <img
                            className={cx('ads-img')}
                            src="https://bizweb.dktcdn.net/100/117/632/themes/157694/assets/banner1.gif?1564585558451"
                            alt=""
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Product;
