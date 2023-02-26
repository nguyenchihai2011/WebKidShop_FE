import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Nav.module.scss';

import Button from '../../../components/Button/Button';

const cx = classNames.bind(styles);

function Nav() {
    return (
        <aside className={cx('category')}>
            <div className={cx('category-lable')}>Danh mục</div>
            <div className={cx('category-container')}>
                <Button className={cx('category-item')} small>
                    <FontAwesomeIcon className={cx('category-item-icon')} icon={faCircleRight} />
                    Tất cả sản phẩm
                </Button>
                <Button className={cx('category-item')} small>
                    <FontAwesomeIcon className={cx('category-item-icon')} icon={faCircleRight} />
                    Góc bé trai
                </Button>
                <Button className={cx('category-item')} small>
                    <FontAwesomeIcon className={cx('category-item-icon')} icon={faCircleRight} />
                    Góc bé gái
                </Button>
                <Button className={cx('category-item')} small>
                    <FontAwesomeIcon className={cx('category-item-icon')} icon={faCircleRight} />
                    Phụ kiện
                </Button>
                <Button className={cx('category-item')} small>
                    <FontAwesomeIcon className={cx('category-item-icon')} icon={faCircleRight} />
                    Khuyến mãi
                </Button>
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
