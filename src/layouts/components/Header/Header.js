import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faCaretDown,
    faCartShopping,
    faMagnifyingGlass,
    faUser,
    faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import AuthContext from '../../../context/AuthProvider';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    const navigate = useNavigate();
    const { auth, setAuth } = useContext(AuthContext);
    const [isLogin, setIsLogin] = useState(false);
    const [searchValue, setSearchValue] = useState();
    const refHeaderNavMenu = useRef();
    const refHeaderProductDropdown = useRef();
    const refInputSearch = useRef();
    const refUserManage = useRef();
    const [showInputSearch, setShowInputSearch] = useState(false);

    const handleClickMenu = () => {
        if (window.screen.width < 992) refHeaderNavMenu.current.classList.toggle(cx('hideOrShow'));
    };

    const handleClickProduct = () => {
        if (window.screen.width < 992) refHeaderProductDropdown.current.classList.toggle(cx('hideOrShow'));
    };

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
    };

    const handleEnter = (e) => {
        if (e.keyCode === 13) {
            navigate(`/search?gender=${searchValue}`);
        }
    };

    const handleSearchMobile = () => {
        setShowInputSearch(!showInputSearch);
        refInputSearch.current.classList.toggle(cx('hideOrShow'));
        refInputSearch.current.focus();
    };

    const handleClickInfo = () => {
        refUserManage.current.classList.toggle(cx('hideOrShow'));
    };

    const handleLogout = (e) => {
        e.preventDefault();
        setAuth(null);
        navigate('/');
    };

    useEffect(() => {
        setIsLogin(!!auth);
    }, [auth]);

    return (
        <div className={cx('header')}>
            <Container>
                <Row>
                    <div className={cx('header-service')}>
                        <div className={cx('header-service-left')}>
                            {!isLogin && (
                                <div>
                                    <Link to="/account/login" className={cx('header-service-signup')}>
                                        <FontAwesomeIcon icon={faUser} /> Đăng nhập
                                    </Link>
                                    <Link to="/account/register" className={cx('header-service-signin')}>
                                        <FontAwesomeIcon icon={faUserPlus} /> Đăng ký
                                    </Link>
                                </div>
                            )}
                        </div>

                        <div className={cx('header-service-right')}>
                            <div className={cx('header-service-search')}>
                                <input
                                    className={cx('header-search-input')}
                                    value={searchValue}
                                    placeholder="Tìm kiếm"
                                    onChange={handleSearch}
                                    onKeyDown={handleEnter}
                                />
                                <Link to={`/search?gender=${searchValue}`} className={cx('header-search-icon')}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </Link>
                            </div>
                            <Link to="/cart" className={cx('header-service-cart')}>
                                <FontAwesomeIcon icon={faCartShopping} />
                            </Link>
                            {isLogin && (
                                <div className={cx('header-info')} onClick={handleClickInfo}>
                                    <span className={cx('header-info-name')}>Alex Mora</span>
                                    <img
                                        className={cx('header-info-avatar')}
                                        src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                                        alt=""
                                    />

                                    <ul ref={refUserManage} className={cx('header-manage-list')}>
                                        <Link to={`/account/profile/123`}>
                                            <li className={cx('header-manage-item')}>Thông tin cá nhân</li>
                                        </Link>
                                        <Link>
                                            <li className={cx('header-manage-item')}>Lịch sử đặt hàng</li>
                                        </Link>
                                        <Link onClick={handleLogout}>
                                            <li className={cx('header-manage-item')}>Đăng xuất</li>
                                        </Link>
                                    </ul>
                                </div>
                            )}
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
                                <FontAwesomeIcon
                                    icon={faMagnifyingGlass}
                                    className={cx('header-btn-on-mobile')}
                                    onClick={handleSearchMobile}
                                />
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
                                    <Link to="/product/all" className={cx('product-type')} onClick={handleClickMenu}>
                                        Tất cả sản phẩm
                                    </Link>
                                    <Link to="/product/male" className={cx('product-type')} onClick={handleClickMenu}>
                                        Góc bé trai
                                    </Link>
                                    <Link to="/product/female" className={cx('product-type')} onClick={handleClickMenu}>
                                        Góc bé gái
                                    </Link>
                                    <Link
                                        to="/product/discount"
                                        className={cx('product-type')}
                                        onClick={handleClickMenu}
                                    >
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
            <div>
                <input
                    ref={refInputSearch}
                    type="text"
                    value={searchValue}
                    placeholder="Tìm kiếm"
                    onChange={handleSearch}
                    onKeyDown={handleEnter}
                    className={cx('header-search-mobile')}
                />
            </div>
        </div>
    );
}

export default Header;
