import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Item from './Item/Item';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Pay.module.scss';

const cx = classNames.bind(styles);

function Pay() {
    return (
        <Container>
            <Row>
                <Col xl={8}>
                    <h1>
                        <Link to="/" className={cx('pay-home')}>
                            Kidshop
                        </Link>
                    </h1>
                    <Row>
                        <Col>
                            <h3 className={cx('pay-lable')}>Thông tin nhận hàng</h3>
                            <FloatingLabel controlId="floatingInput" label="Email" className={cx('pay-input')}>
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    className={cx('pay-input-text')}
                                />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="Họ và tên" className={cx('pay-input')}>
                                <Form.Control
                                    type="text"
                                    placeholder="name@example.com"
                                    className={cx('pay-input-text')}
                                />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="Số điện thoại" className={cx('pay-input')}>
                                <Form.Control
                                    type="tel"
                                    placeholder="name@example.com"
                                    className={cx('pay-input-text')}
                                />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="Địa chỉ" className={cx('pay-input')}>
                                <Form.Control
                                    type="text"
                                    placeholder="name@example.com"
                                    className={cx('pay-input-text')}
                                />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingSelect" label="Tỉnh thành" className={cx('pay-input')}>
                                <Form.Select
                                    aria-label="Floating label select example"
                                    className={cx('pay-input-text')}
                                >
                                    <option>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingSelect" label="Quận huyện" className={cx('pay-input')}>
                                <Form.Select
                                    aria-label="Floating label select example"
                                    className={cx('pay-input-text')}
                                >
                                    <option>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingTextarea2" label="Ghi chú" className={cx('pay-input')}>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    className={cx('pay-input-textarea')}
                                />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <h3 className={cx('pay-lable')}>Vận chuyển</h3>
                            <Form.Check
                                type="radio"
                                id="default-radio"
                                label="Giao hàng tận nơi"
                                className={cx('pay-radio')}
                                checked
                            />
                            <h3 className={cx('pay-lable', 'mt-30')}>Thanh toán</h3>
                            <div className="mb-3">
                                <Form.Check
                                    type="radio"
                                    name="default-radio"
                                    label="Thanh toán khi giao hàng (COD)"
                                    className={cx('pay-radio')}
                                />
                                <Form.Check
                                    type="radio"
                                    name="default-radio"
                                    label="Thanh toán qua Paypal"
                                    className={cx('pay-radio')}
                                />
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col xl={4} className={cx('pay-order')}>
                    <h3 className={cx('pay-lable', 'mt-30')}>Đơn hàng</h3>
                    <Item />

                    <div className={cx('display-flex')}>
                        <p>Tạm tính</p>
                        <p>250.000đ</p>
                    </div>
                    <div className={cx('display-flex')}>
                        <p>Phí vận chuyển</p>
                        <p>40.000đ</p>
                    </div>

                    <div className={cx('display-flex')}>
                        <p>Tổng cộng</p>
                        <p>290.000đ</p>
                    </div>
                    <div className={cx('display-flex')}>
                        <Link to="/cart">
                            <button className={cx('pay-btn-back')}>
                                <FontAwesomeIcon icon={faAngleLeft} /> Quay về giỏ hàng
                            </button>
                        </Link>
                        <Link to="">
                            <button className={cx('pay-btn-buy')}>Đặt hàng</button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Pay;
