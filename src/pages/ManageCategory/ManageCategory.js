import classNames from 'classnames/bind';
import styles from './ManageCategory.module.scss';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faFilePen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ManageCategory() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <h1 className={cx('category-header')}>Quản lý sản phẩm</h1>
            <div className={cx('category-func')}>
                <div className={cx('category-search')}>
                    <input type="text" className={cx('category-search-input')} />
                    <button className={cx('category-search-btn')}>Tìm kiếm</button>
                </div>
                <>
                    <Button variant="primary" onClick={handleShow} className={cx('category-add-product')}>
                        Thêm sản phẩm
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            </div>
            <Table striped bordered hover responsive className={cx('category-table')}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên sản phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Giày thể thao buộc dây - F56</td>
                        <td>
                            <img
                                className={cx('category-table-img')}
                                src="https://bizweb.dktcdn.net/thumb/large/100/117/632/products/giay5-6ad05ccc-be71-4eca-83f8-3e73a5570372-42da6097-d9b3-437a-afe5-66c1be4352b4-8a365fca-ef0a-415a-838e-f172e148cb7c.jpg?v=1473603367790"
                                alt=""
                            />
                        </td>
                        <td>450.000đ</td>
                        <td>100</td>
                        <td className="category-table-actions">
                            <Link to="">
                                <FontAwesomeIcon icon={faCircleInfo} className={cx('category-table-action')} />
                            </Link>
                            <Link to="">
                                <FontAwesomeIcon icon={faFilePen} className={cx('category-table-action', 'bg-blue')} />
                            </Link>
                            <Link to="">
                                <FontAwesomeIcon icon={faTrashCan} className={cx('category-table-action')} />
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default ManageCategory;
