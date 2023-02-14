import Carousel from 'react-bootstrap/Carousel';

import classNames from 'classnames/bind';
import styles from './Banner.module.scss';

import banner_img1 from '../../../assets/img/banner/slideshow_image_1.png';

const cx = classNames.bind(styles);

function Banner() {
    return (
        <div className={cx('wrapper')}>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={banner_img1} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={banner_img1} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={banner_img1} alt="First slide" />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Banner;
