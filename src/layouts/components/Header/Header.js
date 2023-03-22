import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faCaretDown,
    faCartShopping,
    faMagnifyingGlass,
    faUser,
    faUserPlus,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import { useRef } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const refHeaderNavMenu = useRef();
    const refHeaderProductDropdown = useRef();

    const handleClickMenu = () => {
        if (window.screen.width < 992) refHeaderNavMenu.current.classList.toggle(cx('hideOrShow'));
    };

    const handleClickProduct = () => {
        if (window.screen.width < 992) refHeaderProductDropdown.current.classList.toggle(cx('hideOrShow'));
    };

    return (
        <div className={cx('header')}>
            <Container>
                <Row>
                    <div className={cx('header-service')}>
                        <div className={cx('header-service-left')}>
                            <Link to="/account/login" className={cx('header-service-signup')}>
                                <FontAwesomeIcon icon={faUser} /> Đăng nhập
                            </Link>
                            <Link to="/account/register" className={cx('header-service-signin')}>
                                <FontAwesomeIcon icon={faUserPlus} /> Đăng ký
                            </Link>
                        </div>
                        <div className={cx('header-service-right')}>
                            <div className={cx('header-service-search')}>
                                <input className={cx('header-search-input')} placeholder="Tìm kiếm" />
                                <button className={cx('header-search-icon')}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            </div>
                            <Link to="/cart" className={cx('header-service-cart')}>
                                <FontAwesomeIcon icon={faCartShopping} />
                            </Link>
                        </div>
                    </div>
                </Row>
            </Container>
            <nav className={cx('header-nav')}>
                <Container>
                    <div className={cx('header-wrapper-logo')}>
                        <FontAwesomeIcon icon={faBars} className={cx('header-nav-menu')} onClick={handleClickMenu} />
                        <Link className={cx('header-nav-logo')} to="/">
                            <img
                                className={cx('header-logo')}
                                src="https://bizweb.dktcdn.net/100/117/632/themes/157694/assets/logo.png?1564585558451"
                                alt=""
                            />
                        </Link>
                        <div className={cx('header-wrapper-btn')}>
                            <Link to="">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('header-btn-on-mobile')} />
                            </Link>
                            <Link to="">
                                <FontAwesomeIcon icon={faCartShopping} className={cx('header-btn-on-mobile')} />
                            </Link>
                        </div>
                    </div>

                    <div ref={refHeaderNavMenu} className={cx('header-nav-list')}>
                        <ul className={cx('header-nav-list-left')}>
                            <Link to="/" className={cx('header-nav-list-item')} onClick={handleClickMenu}>
                                Trang chủ
                            </Link>
                            <Link to="/intro" className={cx('header-nav-list-item')} onClick={handleClickMenu}>
                                Giới thiệu
                            </Link>
                            <Link to="/service" className={cx('header-nav-list-item')} onClick={handleClickMenu}>
                                Dịch vụ
                            </Link>
                        </ul>
                        <ul className={cx('header-nav-list-right')}>
                            <Link className={cx('header-nav-list-item')} onClick={handleClickProduct}>
                                Sản phẩm <FontAwesomeIcon icon={faCaretDown} />
                                <ul ref={refHeaderProductDropdown} className={cx('product-dropdown')}>
                                    <Link to="" className={cx('product-type')} onClick={handleClickMenu}>
                                        Tất cả sản phẩm
                                    </Link>
                                    <Link to="" className={cx('product-type')} onClick={handleClickMenu}>
                                        Góc bé trai
                                    </Link>
                                    <Link to="" className={cx('product-type')} onClick={handleClickMenu}>
                                        Góc bé gái
                                    </Link>
                                    <Link to="" className={cx('product-type')} onClick={handleClickMenu}>
                                        Phụ kiện
                                    </Link>
                                    <Link to="" className={cx('product-type')} onClick={handleClickMenu}>
                                        Khuyến mãi
                                    </Link>
                                    <>
                                        {window.screen.width > 992 && (
                                            <img
                                                src="https://bizweb.dktcdn.net/100/117/632/themes/157694/assets/bg-cate.jpg"
                                                alt=""
                                            />
                                        )}
                                    </>
                                </ul>
                            </Link>
                            <Link to="/news" className={cx('header-nav-list-item')} onClick={handleClickMenu}>
                                Tin tức
                            </Link>
                            <Link to="/contact" className={cx('header-nav-list-item')} onClick={handleClickMenu}>
                                Liên hệ
                            </Link>
                        </ul>
                    </div>
                </Container>
            </nav>
        </div>
    );
}

export default Header;
