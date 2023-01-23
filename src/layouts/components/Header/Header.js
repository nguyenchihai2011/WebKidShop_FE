import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCartShopping, faMagnifyingGlass, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import Button from '../../../components/Button/Button';
import imgLogo from '../../../assets/img/header/logo.png';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <Container>
                <Row>
                    <div className={cx('service')}>
                        <div className={cx('service-left')}>
                            <Button small>
                                <FontAwesomeIcon icon={faUser} /> Đăng nhập
                            </Button>
                            <Button small>
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
                                <img src={imgLogo} alt="logo-img" />
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
                                        <Button to="/product">
                                            Sản phẩm <FontAwesomeIcon icon={faCaretDown} />
                                        </Button>
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
