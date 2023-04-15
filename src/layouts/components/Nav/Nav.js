import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Nav.module.scss';

const cx = classNames.bind(styles);

function Nav() {
    return (
        <aside className={cx('category')}>
            <div className={cx('category-lable')}>Danh mục</div>
            <div className={cx('category-container')}>
                <Link to="/product/all" className={cx('category-item')}>
                    <FontAwesomeIcon className={cx('category-item-icon')} icon={faCircleRight} />
                    Tất cả sản phẩm
                </Link>
                <Link to="/product/male" className={cx('category-item')}>
                    <FontAwesomeIcon className={cx('category-item-icon')} icon={faCircleRight} />
                    Góc bé trai
                </Link>
                <Link to="/product/female" className={cx('category-item')}>
                    <FontAwesomeIcon className={cx('category-item-icon')} icon={faCircleRight} />
                    Góc bé gái
                </Link>
                <Link to="/product/discount" className={cx('category-item')}>
                    <FontAwesomeIcon className={cx('category-item-icon')} icon={faCircleRight} />
                    Khuyến mãi
                </Link>
                <img
                    className={cx('category-img')}
                    src="https://bizweb.dktcdn.net/100/117/632/themes/157694/assets/bg-cate.jpg"
                    alt=""
                />
            </div>
        </aside>
    );
}

export default Nav;
