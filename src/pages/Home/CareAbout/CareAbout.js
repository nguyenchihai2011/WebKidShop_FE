import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

import NormalProduct from '../Product/NormalProduct/NormalProduct';
import classNames from 'classnames/bind';
import styles from './CareAbout.module.scss';

const cx = classNames.bind(styles);

function CareAbout() {
    return (
        <Container>
            <h2 className={cx('careabout-lable')}>Có thể bạn quan tâm</h2>
            <h4 className={cx('careabout-desc')}>
                Bạn có thể tìm thấy những phẩm tốt và chi phí được giảm tới 70% với những mẫu mã đa dạng và phù hợp với
                hầu bao cả các bà mẹ. Chúng tôi cam kết luôn mang đến cho các mẹ và bé những sản phẩm tốt nhất, chất
                lượng nhất.
            </h4>

            <Row className={cx('careabout-row')}>
                <NormalProduct
                    src="https://bizweb.dktcdn.net/thumb/large/100/117/632/products/aovay9.jpg?v=1473603722567"
                    price="250.000đ"
                    title="Váy liên thân KIDS - KF5"
                />
                <NormalProduct
                    src="https://bizweb.dktcdn.net/thumb/large/100/117/632/products/aovay9.jpg?v=1473603722567"
                    price="250.000đ"
                    title="Váy liên thân KIDS - KF5"
                />
                <NormalProduct
                    src="https://bizweb.dktcdn.net/thumb/large/100/117/632/products/aovay9.jpg?v=1473603722567"
                    price="250.000đ"
                    title="Váy liên thân KIDS - KF5"
                />
                <NormalProduct
                    src="https://bizweb.dktcdn.net/thumb/large/100/117/632/products/aovay9.jpg?v=1473603722567"
                    price="250.000đ"
                    title="Váy liên thân KIDS - KF5"
                />
                <NormalProduct
                    src="https://bizweb.dktcdn.net/thumb/large/100/117/632/products/aovay9.jpg?v=1473603722567"
                    price="250.000đ"
                    title="Váy liên thân KIDS - KF5"
                />
            </Row>
        </Container>
    );
}

export default CareAbout;
