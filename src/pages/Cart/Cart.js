import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Cart.module.scss';

const cx = classNames.bind(styles);

function Cart() {
    return (
        <Container>
            <Table striped bordered hover responsive className={cx('cart-table')}>
                <thead>
                    <tr className={cx('cart-th')}>
                        <th>Hình ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>Đơn giá</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                        <th>Xoá</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img
                                src="https://bizweb.dktcdn.net/thumb/small/100/117/632/products/aovay12.jpg?v=1473606357990"
                                alt=""
                            />
                        </td>
                        <td>Váy liên thân KIDS-02 XL / Đỏ</td>
                        <td>250.000₫</td>
                        <td>
                            <input
                                type="number"
                                name="quantity"
                                min="1"
                                max={Infinity}
                                defaultValue="1"
                                className={cx('cart-td-quantity')}
                            />
                        </td>
                        <td>250.000₫</td>
                        <td>
                            <FontAwesomeIcon icon={faTrashCan} />
                        </td>
                    </tr>
                </tbody>
            </Table>
            <div className={cx('cart-btn-wrap')}>
                <div>
                    <button className={cx('cart-btn', 'btn-subcolor')}>Mua hàng tiếp</button>
                    <button className={cx('cart-btn', 'btn-primarycolor')}>Cập nhật</button>
                </div>
                <div className={cx('cart-total-wrap')}>
                    <div className={cx('cart-total')}>Tổng tiền</div>
                    <div className={cx('cart-total')}>250.000đ</div>
                </div>
            </div>
            <div className={cx('cart-btn-buy-wrap')}>
                <Link to="/pay">
                    <button className={cx('cart-btn-buy', 'btn-primarycolor')}>Thanh toán</button>
                </Link>
            </div>
        </Container>
    );
}

export default Cart;
