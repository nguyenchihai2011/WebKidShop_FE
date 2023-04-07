import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
            <Row>
                <Col xl={6}>
                    <h1 className={cx('signin-title')}>Đăng nhập</h1>
                    <h3 className={cx('signin-desc')}>Nếu bạn có một tài khoản, xin vui lòng đăng nhập</h3>
                    <form className={cx('signin-form')}>
                        <p>
                            <span className={cx('signin-form-lable')}>Email</span>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                className={cx('signin-form-input')}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </p>
                        <p>
                            <span className={cx('signin-form-lable')}>Mật khẩu</span>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                className={cx('signin-form-input')}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </p>
                        <button className={cx('signin-btn-login')} onClick={(e) => handleLogin(e)}>
                            Đăng nhập
                        </button>
                    </form>
                </Col>
                <Col xl={6}>
                    <img
                        className={cx('signin-img')}
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        alt=""
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
