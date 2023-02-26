import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import Button from '../../../components/Button/Button';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('quicklinks')}>
                <Container>
                    <Row>
                        <Col xl={4}>
                            <Button className={cx('quicklinks-title')} small>
                                Liên hệ với chúng tôi
                            </Button>
                            <Button className={cx('quicklinks-text')} small>
                                Số 442 Đội Cấn, P. Cống Vị, Q. Ba Đình, Hà Nội
                            </Button>
                            <Button className={cx('quicklinks-text')} small>
                                (04) 6674 2332 - (04) 6674 2332
                            </Button>
                            <Button className={cx('quicklinks-text')} small>
                                Trực 8h00 - 20h00 từ thứ 2 đến thứ 6
                            </Button>
                        </Col>
                        <Col xl={2}>
                            <Button className={cx('quicklinks-title')} small>
                                Thông tin
                            </Button>
                            <Button className={cx('quicklinks-btn')} small>
                                Tài khoản của bạn
                            </Button>
                            <Button className={cx('quicklinks-btn')} small>
                                Lịch sử mua hàng
                            </Button>
                            <Button className={cx('quicklinks-btn')} small>
                                Chính sách mua bán
                            </Button>
                            <Button className={cx('quicklinks-btn')} small>
                                Hướng dẫn mua online
                            </Button>
                            <Button className={cx('quicklinks-btn')} small>
                                Liên hệ
                            </Button>
                        </Col>
                        <Col xl={2}>
                            <Button className={cx('quicklinks-title')} small>
                                Sản phẩm
                            </Button>
                            <Button className={cx('quicklinks-btn')} small>
                                Tất cả sản phẩm
                            </Button>
                            <Button className={cx('quicklinks-btn')} small>
                                Góc bé trai
                            </Button>
                            <Button className={cx('quicklinks-btn')} small>
                                Góc bé gái
                            </Button>
                            <Button className={cx('quicklinks-btn')} small>
                                Phụ kiện
                            </Button>
                            <Button className={cx('quicklinks-btn')} small>
                                Khuyễn mãi
                            </Button>
                            <Button className={cx('quicklinks-btn')} small>
                                Danh mục trống
                            </Button>
                        </Col>
                        <Col xl={2}>
                            <Button className={cx('quicklinks-title')} small>
                                LIÊN KẾT BLOG
                            </Button>
                            <Button className={cx('quicklinks-btn')} small>
                                Cẩm nang cho mẹ
                            </Button>
                            <Button className={cx('quicklinks-btn')} small>
                                Chương trình ưu đãi
                            </Button>
                            <Button className={cx('quicklinks-btn')} small>
                                TIn thời trang
                            </Button>
                            <Button className={cx('quicklinks-btn')} small>
                                Góc chia sẻ
                            </Button>
                            <Button className={cx('quicklinks-btn')} small>
                                Ảnh chia sẻ
                            </Button>
                        </Col>
                        <Col xl={2}>
                            <Button className={cx('quicklinks-title')} small>
                                Chính sách
                            </Button>
                            <Button className={cx('quicklinks-btn')} small>
                                Tất cả sản phẩm
                            </Button>
                            <Button className={cx('quicklinks-btn')} small>
                                Góc bé trai
                            </Button>
                            <Button className={cx('quicklinks-btn')} small>
                                Góc bé gái
                            </Button>
                            <Button className={cx('quicklinks-btn')} small>
                                Phụ kiện
                            </Button>
                            <Button className={cx('quicklinks-btn')} small>
                                Khuyễn mãi
                            </Button>
                            <Button className={cx('quicklinks-btn')} small>
                                Danh mục trống
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={cx('footer')}>
                <h3 className={cx('footer-text')}>&copy; Bản quyền thuộc về MyTeam</h3>
            </div>
        </div>
    );
}

export default Footer;
