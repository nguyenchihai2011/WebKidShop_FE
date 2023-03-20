import classNames from 'classnames/bind';
import styles from './Item.module.scss';

const cx = classNames.bind(styles);

function Item() {
    return (
        <div className={cx('item-wrap')}>
            <div className={cx('item-product')}>
                <img
                    src="https://bizweb.dktcdn.net/thumb/thumb/100/117/632/products/aovay12.jpg?v=1473606357990"
                    alt=""
                />
                <div className={cx('item-info')}>
                    <h3 className={cx('item-name')}>Váy liên thân KIDS-02</h3>
                    <h4 className={cx('item-type')}>XL / Đỏ</h4>
                </div>
            </div>
            <div className={cx('item-price')}>250.000đ</div>
        </div>
    );
}

export default Item;
