import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCartShopping, faMagnifyingGlass, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import Button from '../../../components/Button/Button';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <Container>
                <Row>
                    <div className={cx('service')}>
                        <div className={cx('service-left')}>
                            <Button to="/account/login" small>
                                <FontAwesomeIcon icon={faUser} /> Đăng nhập
                            </Button>
                            <Button to="/account/register" small>
                                <FontAwesomeIcon icon={faUserPlus} /> Đăng ký
                            </Button>
                        </div>
                        <div className={cx('service-right')}>
                            <div className={cx('search')}>
                                <input className={cx('search-input')} placeholder="Tìm kiếm" />
                                <button className={cx('search-icon')}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            </div>
                            <Button to="/cart" small>
                                <FontAwesomeIcon icon={faCartShopping} />
                            </Button>
                        </div>
                    </div>
                </Row>
            </Container>

            <div className={cx('menu')}>
                <Container>
                    <Row>
                        <div>
                            <Link className={cx('logo')} to="/">
                                <img
                                    src="https://bizweb.dktcdn.net/100/117/632/themes/157694/assets/logo.png?1564585558451"
                                    alt="logo-img"
                                />
                            </Link>

                            <ul className={cx('list-items')}>
                                <div className={cx('group-items')}>
                                    <li className={cx('item')}>
                                        <Button to="/">Trang chủ</Button>
                                    </li>
                                    <li className={cx('item')}>
                                        <Button to="/intro">Giới thiệu</Button>
                                    </li>
                                    <li className={cx('item')}>
                                        <Button to="/service">Dịch vụ</Button>
                                    </li>
                                </div>
                                <div className={cx('group-items')}>
                                    <li className={cx('item')}>
                                        <Button className={cx('item-btn')}>
                                            Sản phẩm <FontAwesomeIcon icon={faCaretDown} />
                                        </Button>
                                        <div className={cx('product-dropdown')}>
                                            <Button className={cx('product-type')} small to="/product/all">
                                                Tất cả sản phẩm
                                            </Button>

                                            <Button className={cx('product-type')} small to="">
                                                Góc bé trai
                                            </Button>

                                            <Button className={cx('product-type')} small to="">
                                                Góc bé gái
                                            </Button>

                                            <Button className={cx('product-type')} small to="">
                                                Phụ kiện
                                            </Button>

                                            <Button className={cx('product-type')} small to="">
                                                Khuyến mãi
                                            </Button>
                                            <img
                                                src="https://bizweb.dktcdn.net/100/117/632/themes/157694/assets/bg-cate.jpg"
                                                alt=""
                                            />
                                        </div>
                                    </li>
                                    <li className={cx('item')}>
                                        <Button to="/news">Tin tức</Button>
                                    </li>
                                    <li className={cx('item')}>
                                        <Button to="/contact">Liên hệ</Button>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Header;
