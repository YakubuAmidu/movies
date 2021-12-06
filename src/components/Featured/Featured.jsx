import React from 'react';
import Netflix from '../../img/Netflix1.png';
import InfoImg from '../../img/Featured.png';
import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import './Featured.scss';

const Featured = () => {
    return (
        <div className="featured">
            <img src={Netflix} alt="img" className="featuredImg" />
            <div className="info">
                <img src={InfoImg} alt="img" className="featuredInfo" />
                <span className="desc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod,
                     deserunt. Odio incidunt magnam earum, enim debitis rerum ducimus 
                     repellendus expedita animi voluptatem, ut nostrum. 
                     Recusandae nostrum quia possimus odit commodi!
                </span>
                <div className="buttons">
                    <button className="Play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured;