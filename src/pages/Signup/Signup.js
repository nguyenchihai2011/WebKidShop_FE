import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

import classNames from 'classnames/bind';
import styles from './Signup.module.scss';
import { useState } from 'react';

import axios from '../../api/axios';

const cx = classNames.bind(styles);

function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [users, setUsers] = useState([]);

    const addUsers = (firstName, lastName, email, password) => {
        axios
            .post('/user', {
                firstName,
                lastName,
                email,
                password,
            })
            .then((response) => {
                setUsers([response.data, ...users]);
            });
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('pwd no matched');
        } else {
            addUsers(firstName, lastName, email, password);
            alert('Success');
        }
    };

    return (
        <Container className={cx('signup')}>
            <Row>
                <Col xl={6}>
                    <h1 className={cx('signup-title')}>ĐĂNG KÝ TÀI KHOẢN</h1>
                    <h3 className={cx('signup-desc')}>
                        Nếu bạn có một tài khoản, xin vui lòng chuyển qua trang ĐĂNG NHẬP
                    </h3>
                    <form className={cx('signup-form')}>
                        <p>
                            <span className={cx('signup-form-lable')}>Họ</span>
                            <input
                                type="text"
                                name="first-name"
                                value={firstName}
                                className={cx('signup-form-input')}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </p>
                        <p>
                            <span className={cx('signup-form-lable')}>Tên</span>
                            <input
                                type="text"
                                name="last-name"
                                value={lastName}
                                className={cx('signup-form-input')}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </p>
                        <p>
                            <span className={cx('signup-form-lable')}>Email</span>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                className={cx('signup-form-input')}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </p>
                        <p>
                            <span className={cx('signup-form-lable')}>Mật khẩu</span>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                className={cx('signup-form-input')}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </p>
                        <p>
                            <span className={cx('signup-form-lable')}>Nhập lại</span>
                            <input
                                type="password"
                                name="confirmpassword"
                                value={confirmPassword}
                                className={cx('signup-form-input')}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </p>
                        <button className={cx('signup-form-btn')} onClick={(e) => handleSubmit(e)}>
                            Đăng ký
                        </button>
                    </form>
                </Col>
                <Col xl={6}>
                    <img
                        className={cx('signup-img')}
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        alt=""
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Register;
