import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import React from 'react';
import Select from 'react-select';
import axios from 'axios';

import classNames from 'classnames/bind';
import styles from './Info.module.scss';

const cx = classNames.bind(styles);

function Info() {
    const [show, setShow] = useState(false);
    const [provinces, setProvinces] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState(0);
    const [districts, setDistricts] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState(0);
    const [wards, setWards] = useState([]);
    const [selectedWard, setSelectedWard] = useState(0);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        axios
            .get('https://provinces.open-api.vn/api/p/')
            .then((res) => setProvinces(res.data))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        axios
            .get('https://provinces.open-api.vn/api/d/')
            .then((res) => {
                let data = res.data;
                data = data.filter((dis) => dis.province_code === selectedProvince);
                setDistricts(data);
            })
            .catch((err) => console.log(err));
    }, [selectedProvince]);

    useEffect(() => {
        axios
            .get('https://provinces.open-api.vn/api/w/')
            .then((res) => {
                let data = res.data;
                data = data.filter((w) => w.district_code === selectedDistrict);
                setWards(data);
            })
            .catch((err) => console.log(err));
    }, [selectedDistrict]);

    return (
        <Container className={cx('info')}>
            <Row>
                <Col xl={3}></Col>
                <Col xl={6}>
                    <h1 className={cx('info-title')}>Thông tin cá nhân</h1>
                    <Row className={cx('info-row')}>
                        <Col>
                            <p className={cx('info-lable')}>Họ</p>
                            <input className={cx('info-input')} type="text" placeholder="Họ" />
                        </Col>
                        <Col>
                            <p className={cx('info-lable')}>Tên</p>
                            <input className={cx('info-input')} type="text" placeholder="Tên" />
                        </Col>
                    </Row>

                    <Row className={cx('info-row')}>
                        <Col>
                            <p className={cx('info-lable')}>Địa chỉ</p>
                            <Form.Select aria-label="Default select example" className={cx('info-input')}>
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row>
                        <button className={cx('add-address-btn')} onClick={handleShow}>
                            Thêm địa chỉ mới
                        </button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Address</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form.Group
                                    as={Row}
                                    className={cx('info-form-group')}
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <p className={cx('info-form-row')}>
                                        <Form.Label column xs={3}>
                                            Tỉnh thành
                                        </Form.Label>
                                        <Col xs={9}>
                                            <Select
                                                options={provinces}
                                                getOptionLabel={(option) => option.name}
                                                getOptionValue={(option) => option.code}
                                                onChange={(provinces) => setSelectedProvince(provinces.code)}
                                                className={cx('info-form-input')}
                                            />
                                        </Col>
                                    </p>
                                    <p className={cx('info-form-row')}>
                                        <Form.Label column xs={3}>
                                            Quận/huyện
                                        </Form.Label>
                                        <Col xs={9}>
                                            <Select
                                                options={districts}
                                                getOptionLabel={(option) => option.name}
                                                getOptionValue={(option) => option.code}
                                                onChange={(districts) => setSelectedDistrict(districts.code)}
                                                className={cx('info-form-input')}
                                            />
                                        </Col>
                                    </p>
                                    <p className={cx('info-form-row')}>
                                        <Form.Label column xs={3}>
                                            Phường/Xã
                                        </Form.Label>
                                        <Col xs={9}>
                                            <Select
                                                options={wards}
                                                getOptionLabel={(option) => option.name}
                                                getOptionValue={(option) => option.code}
                                                onChange={(wards) => setSelectedWard(wards.code)}
                                                className={cx('info-form-input')}
                                            />
                                        </Col>
                                    </p>
                                    <p className={cx('category-form-row')}>
                                        <Form.Label column xs={3}>
                                            Số nhà, đường
                                        </Form.Label>
                                        <Col xs={9}>
                                            <Form.Control type="text" name="street" className={cx('info-input')} />
                                        </Col>
                                    </p>
                                </Form.Group>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" className={cx('info-form-btn')} onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" className={cx('info-form-btn')} onClick={handleClose}>
                                    Save
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Row>
                    <Row className={cx('info-row')}>
                        <Col>
                            <p className={cx('info-lable')}>Điện thoại</p>
                            <input className={cx('info-input')} type="tel" readOnly placeholder="Tel" />
                        </Col>
                    </Row>
                    <Row className={cx('info-row')}>
                        <Col>
                            <p className={cx('info-lable')}>Email</p>
                            <input className={cx('info-input')} type="email" readOnly placeholder="Email" />
                        </Col>
                    </Row>
                    <Row className={cx('info-wrap-btn')}>
                        <button className={cx('info-btn')}>Huỷ</button>
                        <button className={cx('info-btn')}>Lưu</button>
                    </Row>
                </Col>
                <Col xl={3}>
                    <initMap />
                </Col>
            </Row>
        </Container>
    );
}

export default Info;
