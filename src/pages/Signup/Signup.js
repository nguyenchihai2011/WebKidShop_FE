import Container from 'react-bootstrap/esm/Container';

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
        <div>
            <Container className={cx('signup')}>
                <h1 className={cx('signup-title')}>ĐĂNG KÝ TÀI KHOẢN</h1>
                <h3 className={cx('signup-desc')}>Nếu bạn có một tài khoản, xin vui lòng chuyển qua trang ĐĂNG NHẬP</h3>
                <form className={cx('signup-form')}>
                    <div className={cx('signup-form-input-wrap')}>
                        <span className={cx('signup-form-lable')}>First Name</span>
                        <input
                            type="text"
                            name="first-name"
                            value={firstName}
                            className={cx('signup-form-input')}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className={cx('signup-form-input-wrap')}>
                        <span className={cx('signup-form-lable')}>Last Name</span>
                        <input
                            type="text"
                            name="last-name"
                            value={lastName}
                            className={cx('signup-form-input')}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className={cx('signup-form-input-wrap')}>
                        <span className={cx('signup-form-lable')}>Email</span>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            className={cx('signup-form-input')}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={cx('signup-form-input-wrap')}>
                        <span className={cx('signup-form-lable')}>Mật khẩu</span>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            className={cx('signup-form-input')}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className={cx('signup-form-input-wrap')}>
                        <span className={cx('signup-form-lable')}>Nhập lại mật khẩu</span>
                        <input
                            type="password"
                            name="confirmpassword"
                            value={confirmPassword}
                            className={cx('signup-form-input')}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <button className={cx('signup-form-btn')} onClick={(e) => handleSubmit(e)}>
                        Đăng ký
                    </button>
                </form>
            </Container>
        </div>
    );
}

export default Register;
