import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Signin.module.scss';

const cx = classNames.bind(styles);

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(email, password);
    };

    return (
        <Container className={cx('signin')}>
            <h1 className={cx('signin-title')}>Đăng nhập</h1>
            <h3 className={cx('signin-desc')}>Nếu bạn có một tài khoản, xin vui lòng đăng nhập</h3>
            <form className={cx('signin-form')}>
                <div className={cx('signin-form-input-wrap')}>
                    <span className={cx('signin-form-lable')}>Email</span>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        className={cx('signin-form-input')}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={cx('signin-form-input-wrap')}>
                    <span className={cx('signin-form-lable')}>Password</span>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        className={cx('signin-form-input')}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className={cx('signin-btn-login')} onClick={(e) => handleLogin(e)}>
                    Đăng nhập
                </button>
            </form>
        </Container>
    );
}

export default Login;
