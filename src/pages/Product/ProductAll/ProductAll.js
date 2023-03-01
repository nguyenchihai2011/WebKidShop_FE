import classNames from 'classnames/bind';
import styles from './ProductAll.module.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';

import Breadcrumb from '../../../layouts/components/Breadcrumb/Breadcrumb';
import NormalProduct from '../../Home/Product/NormalProduct/NormalProduct';
import Pagination from '../PaginationProduct/PaginationProduct';

const cx = classNames.bind(styles);

function ProductAll() {
    return (
        <div>
            <Breadcrumb page="Tất cả sản phẩm" />
            <img
                src="//bizweb.dktcdn.net/100/117/632/themes/157694/assets/collection_banner_top.jpg?1564585558451"
                alt=""
            />
            <h2 className={cx('product-lable')}>Tất cả sản phẩm</h2>
            <Dropdown className={cx('dropdown')}>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" className={cx('dropdown-btn')}>
                    Mặc định
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                    <Dropdown.Item className={cx('dropdown-btn-item')} href="#/action-1">
                        Mặc định
                    </Dropdown.Item>
                    <Dropdown.Item className={cx('dropdown-btn-item')} href="#/action-2" active>
                        Giá tăng dần
                    </Dropdown.Item>
                    <Dropdown.Item className={cx('dropdown-btn-item')} href="#/action-3">
                        Giá giảm dần
                    </Dropdown.Item>
                    <Dropdown.Item className={cx('dropdown-btn-item')} href="#/action-4">
                        Từ A-Z
                    </Dropdown.Item>
                    <Dropdown.Item className={cx('dropdown-btn-item')} href="#/action-4">
                        Từ Z-A
                    </Dropdown.Item>
                    <Dropdown.Item className={cx('dropdown-btn-item')} href="#/action-4">
                        Cũ đến mới
                    </Dropdown.Item>
                    <Dropdown.Item className={cx('dropdown-btn-item')} href="#/action-4">
                        Mới đến cũ
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Row>
                <NormalProduct
                    src="https://bizweb.dktcdn.net/thumb/large/100/117/632/products/giay5-6ad05ccc-be71-4eca-83f8-3e73a5570372-42da6097-d9b3-437a-afe5-66c1be4352b4-8a365fca-ef0a-415a-838e-f172e148cb7c.jpg?v=1473603367790"
                    price="450.000đ"
                    title="Giày Thể Thao Buộc Dây - F56"
                />
                <NormalProduct
                    src="https://bizweb.dktcdn.net/thumb/large/100/117/632/products/giay5-6ad05ccc-be71-4eca-83f8-3e73a5570372-42da6097-d9b3-437a-afe5-66c1be4352b4-8a365fca-ef0a-415a-838e-f172e148cb7c.jpg?v=1473603367790"
                    price="450.000đ"
                    title="Giày Thể Thao Buộc Dây - F56"
                />
                <NormalProduct
                    src="https://bizweb.dktcdn.net/thumb/large/100/117/632/products/giay5-6ad05ccc-be71-4eca-83f8-3e73a5570372-42da6097-d9b3-437a-afe5-66c1be4352b4-8a365fca-ef0a-415a-838e-f172e148cb7c.jpg?v=1473603367790"
                    price="450.000đ"
                    title="Giày Thể Thao Buộc Dây - F56"
                />
                <NormalProduct
                    src="https://bizweb.dktcdn.net/thumb/large/100/117/632/products/giay5-6ad05ccc-be71-4eca-83f8-3e73a5570372-42da6097-d9b3-437a-afe5-66c1be4352b4-8a365fca-ef0a-415a-838e-f172e148cb7c.jpg?v=1473603367790"
                    price="450.000đ"
                    title="Giày Thể Thao Buộc Dây - F56"
                />
            </Row>
            <Row>
                <NormalProduct
                    src="https://bizweb.dktcdn.net/thumb/large/100/117/632/products/giay5-6ad05ccc-be71-4eca-83f8-3e73a5570372-42da6097-d9b3-437a-afe5-66c1be4352b4-8a365fca-ef0a-415a-838e-f172e148cb7c.jpg?v=1473603367790"
                    price="450.000đ"
                    title="Giày Thể Thao Buộc Dây - F56"
                />
                <NormalProduct
                    src="https://bizweb.dktcdn.net/thumb/large/100/117/632/products/giay5-6ad05ccc-be71-4eca-83f8-3e73a5570372-42da6097-d9b3-437a-afe5-66c1be4352b4-8a365fca-ef0a-415a-838e-f172e148cb7c.jpg?v=1473603367790"
                    price="450.000đ"
                    title="Giày Thể Thao Buộc Dây - F56"
                />
                <NormalProduct
                    src="https://bizweb.dktcdn.net/thumb/large/100/117/632/products/giay5-6ad05ccc-be71-4eca-83f8-3e73a5570372-42da6097-d9b3-437a-afe5-66c1be4352b4-8a365fca-ef0a-415a-838e-f172e148cb7c.jpg?v=1473603367790"
                    price="450.000đ"
                    title="Giày Thể Thao Buộc Dây - F56"
                />
                <NormalProduct
                    src="https://bizweb.dktcdn.net/thumb/large/100/117/632/products/giay5-6ad05ccc-be71-4eca-83f8-3e73a5570372-42da6097-d9b3-437a-afe5-66c1be4352b4-8a365fca-ef0a-415a-838e-f172e148cb7c.jpg?v=1473603367790"
                    price="450.000đ"
                    title="Giày Thể Thao Buộc Dây - F56"
                />
            </Row>
            <Row>
                <NormalProduct
                    src="https://bizweb.dktcdn.net/thumb/large/100/117/632/products/giay5-6ad05ccc-be71-4eca-83f8-3e73a5570372-42da6097-d9b3-437a-afe5-66c1be4352b4-8a365fca-ef0a-415a-838e-f172e148cb7c.jpg?v=1473603367790"
                    price="450.000đ"
                    title="Giày Thể Thao Buộc Dây - F56"
                />
                <NormalProduct
                    src="https://bizweb.dktcdn.net/thumb/large/100/117/632/products/giay5-6ad05ccc-be71-4eca-83f8-3e73a5570372-42da6097-d9b3-437a-afe5-66c1be4352b4-8a365fca-ef0a-415a-838e-f172e148cb7c.jpg?v=1473603367790"
                    price="450.000đ"
                    title="Giày Thể Thao Buộc Dây - F56"
                />
                <NormalProduct
                    src="https://bizweb.dktcdn.net/thumb/large/100/117/632/products/giay5-6ad05ccc-be71-4eca-83f8-3e73a5570372-42da6097-d9b3-437a-afe5-66c1be4352b4-8a365fca-ef0a-415a-838e-f172e148cb7c.jpg?v=1473603367790"
                    price="450.000đ"
                    title="Giày Thể Thao Buộc Dây - F56"
                />
                <NormalProduct
                    src="https://bizweb.dktcdn.net/thumb/large/100/117/632/products/giay5-6ad05ccc-be71-4eca-83f8-3e73a5570372-42da6097-d9b3-437a-afe5-66c1be4352b4-8a365fca-ef0a-415a-838e-f172e148cb7c.jpg?v=1473603367790"
                    price="450.000đ"
                    title="Giày Thể Thao Buộc Dây - F56"
                />
            </Row>
            <Pagination />
        </div>
    );
}

export default ProductAll;
