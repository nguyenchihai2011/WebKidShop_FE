import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { useEffect, useState } from 'react';
import axios from 'axios';

import NormalProduct from '../Product/NormalProduct/NormalProduct';
import classNames from 'classnames/bind';
import styles from './CareAbout.module.scss';

const cx = classNames.bind(styles);

function CareAbout() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(`https://jsonplaceholder.typicode.com/photos`);
                setProducts(res.data.slice(0, 4));
            } catch (e) {
                console.log(e);
            }
        };
        getProducts();
    }, []);

    return (
        <Container>
            <h2 className={cx('careabout-lable')}>Có thể bạn quan tâm</h2>
            <h4 className={cx('careabout-desc')}>
                Bạn có thể tìm thấy những phẩm tốt và chi phí được giảm tới 70% với những mẫu mã đa dạng và phù hợp với
                hầu bao cả các bà mẹ. Chúng tôi cam kết luôn mang đến cho các mẹ và bé những sản phẩm tốt nhất, chất
                lượng nhất.
            </h4>

            <Row className={cx('careabout-row')}>
                {products.map((product) => {
                    return (
                        <Col xl={3} md={3} xs={6}>
                            <NormalProduct src={product.url} price={product.id} title={product.title} />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}

export default CareAbout;
