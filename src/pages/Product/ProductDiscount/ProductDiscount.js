import classNames from 'classnames/bind';
import styles from './ProductFemale.module.scss';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Col from 'react-bootstrap/esm/Col';
import { useEffect, useState } from 'react';

import NormalProduct from '../../Home/Product/NormalProduct/NormalProduct';

const cx = classNames.bind(styles);

function ProductDiscount() {
    const [products, setProducts] = useState([]);
    const [currentProducts, setCurrentProducts] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    // const [productOffset, setProductOffset] = useState(0);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(`https://jsonplaceholder.typicode.com/photos`);
                const product = res.data.filter((pro) => pro.albumId === 2);
                setProducts(product);
                setCurrentProducts(product.slice(0, 12));
                setPageCount(Math.ceil(product.length / 12));
            } catch (e) {
                console.log(e);
            }
        };
        getProducts();
    }, []);

    const handlePageClick = (e) => {
        const newOffset = (e.selected * 12) % products.length;
        // setProductOffset(newOffset);
        // const endOffset = productOffset + 12;
        const endOffset = newOffset + 12;
        setCurrentProducts(products.slice(newOffset, endOffset));
        setPageCount(Math.ceil(products.length / 12));
    };

    return (
        <div>
            <img
                className={cx('product-banner')}
                src="//bizweb.dktcdn.net/100/117/632/themes/157694/assets/collection_banner_top.jpg?1564585558451"
                alt=""
            />
            <h2 className={cx('product-lable')}>Tất cả sản phẩm</h2>

            <Row>
                <Col xl={9} md={0}></Col>
                <Col xl={3} md={6}>
                    <Form.Select aria-label="Default select example" className={cx('select')} size="lg" responsive>
                        <option className={cx('select-item')}>Mặc định</option>
                        <option className={cx('select-item')} value="1">
                            Váy
                        </option>
                        <option className={cx('select-item')} value="2">
                            Quần
                        </option>
                        <option className={cx('select-item')} value="2">
                            Giày
                        </option>
                        <option className={cx('select-item')} value="2">
                            Phụ kiện
                        </option>
                    </Form.Select>
                </Col>
            </Row>

            <Row>
                {currentProducts.map((product) => {
                    return (
                        <Col xl={3} md={6}>
                            <NormalProduct
                                src="https://bizweb.dktcdn.net/thumb/large/100/117/632/products/giay5-6ad05ccc-be71-4eca-83f8-3e73a5570372-42da6097-d9b3-437a-afe5-66c1be4352b4-8a365fca-ef0a-415a-838e-f172e148cb7c.jpg?v=1473603367790"
                                oldPrice="450.000"
                                newPrice="450.000"
                                discount="0"
                                title="giầy thể thao buộc dây - f56"
                            />
                        </Col>
                    );
                })}
            </Row>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName={cx('pagination')}
                pageLinkClassName={cx('page-num')}
                previousLinkClassName={cx('page-num')}
                nextLinkClassName={cx('page-num')}
                activeLinkClassName={cx('active')}
            />
        </div>
    );
}

export default ProductDiscount;
