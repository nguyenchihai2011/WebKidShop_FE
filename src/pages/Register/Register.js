import Container from 'react-bootstrap/esm/Container';

import classNames from 'classnames/bind';
import styles from './Register.module.scss';
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
            <Container>
                <h1 className={cx('title')}>ĐĂNG KÝ TÀI KHOẢN</h1>
                <h3 className={cx('desc')}>Nếu bạn có một tài khoản, xin vui lòng chuyển qua trang ĐĂNG NHẬP</h3>
                <form className={cx('form')}>
                    <div className={cx('input-container')}>
                        <span className={cx('lable')}>First Name</span>
                        <input
                            type="text"
                            name="first-name"
                            value={firstName}
                            className={cx('input')}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className={cx('input-container')}>
                        <span className={cx('lable')}>Last Name</span>
                        <input
                            type="text"
                            name="last-name"
                            value={lastName}
                            className={cx('input')}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className={cx('input-container')}>
                        <span className={cx('lable')}>Email</span>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            className={cx('input')}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={cx('input-container')}>
                        <span className={cx('lable')}>Mật khẩu</span>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            className={cx('input')}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className={cx('input-container')}>
                        <span className={cx('lable')}>Nhập lại mật khẩu</span>
                        <input
                            type="password"
                            name="confirmpassword"
                            value={confirmPassword}
                            className={cx('input')}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <button className={cx('btn-login')} onClick={(e) => handleSubmit(e)}>
                        Đăng ký
                    </button>
                </form>
            </Container>
        </div>
    );
}

export default Register;
