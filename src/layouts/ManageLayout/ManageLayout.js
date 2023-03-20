import classNames from 'classnames/bind';
import styles from './ManageLayout.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const cx = classNames.bind(styles);

function ManageLayout({ children }) {
    const refOrder = useRef();
    const handleClick = () => {
        refOrder.current.classList.toggle(cx('dropdown'));
    };
    return (
        <div>
            <header className={cx('manage-header')}>
                <div className={cx('header-logo')}>Kid Shop Admin Panel</div>
                <div className={cx('header-account')}>
                    <FontAwesomeIcon icon={faUser} />
                    <span className={cx('header-account-name')}>admin</span>
                    <FontAwesomeIcon icon={faCaretDown} />
                </div>
            </header>
            <div className={cx('manage-body')}>
                <nav className={cx('body-nav')}>
                    <ul className={cx('body-nav-list')}>
                        <li className={cx('body-nav-item')} onClick={handleClick}>
                            Quản lý đơn hàng
                        </li>
                        <ul ref={refOrder} className={cx('body-subnav-list')}>
                            <Link to="">
                                <li className={cx('body-subnav-item')}>Đơn hàng đã duyệt</li>
                            </Link>
                            <Link to="">
                                <li className={cx('body-subnav-item')}>Đơn hàng chờ duyệt</li>
                            </Link>
                        </ul>
                        <Link to="">
                            <li className={cx('body-nav-item')}>Quản lý loại sản phẩm</li>
                        </Link>
                        <Link to="/manage/product">
                            <li className={cx('body-nav-item')}>Quản lý sản phẩm</li>
                        </Link>
                        <Link to="">
                            <li className={cx('body-nav-item')}>Quản lý thương hiệu</li>
                        </Link>
                        <Link to="">
                            <li className={cx('body-nav-item')}>Quản lý bài viết</li>
                        </Link>
                        <Link to="">
                            <li className={cx('body-nav-item')}>Quản lý tài khoản</li>
                        </Link>
                        <Link to="">
                            <li className={cx('body-nav-item')}>Thống kê doanh thu</li>
                        </Link>
                    </ul>
                </nav>
                <div className={cx('body-wrap')}>{children}</div>
            </div>
        </div>
    );
}

export default ManageLayout;
