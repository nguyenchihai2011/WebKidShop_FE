import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(email, password);
    };

    return (
        <div>
            <Container>
                <h1 className={cx('title')}>Đăng nhập</h1>
                <h3 className={cx('desc')}>Nếu bạn có một tài khoản, xin vui lòng đăng nhập</h3>
                <form className={cx('form')}>
                    <div>
                        <span className={cx('lable')}>Email</span>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            className={cx('input')}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <span className={cx('lable')}>Password</span>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            className={cx('input')}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className={cx('btn-login')} onClick={(e) => handleLogin(e)}>
                        Đăng nhập
                    </button>
                </form>
            </Container>
        </div>
    );
}

export default Login;
