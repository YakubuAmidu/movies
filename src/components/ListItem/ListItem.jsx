import React, { useState } from 'react';
import { PlayArrow, Add, ThumbUpOutlined, ThumbDownOutlined } from '@material-ui/icons';
import Img from '../../img/profile.png';
import './ListItem.scss';

const ListItem = ({ index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = 'https://ak.picdn.net/shutterstock/videos/1028009684/preview/stock-footage-active-young-mom-babysiter-and-cute-little-kid-daughter-jumping-dancing-in-modern-house-living-room.webm';

    return (
        <div className="ListItem" style={{ left: isHovered && index * 225 - 50 + index * 2.5}} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img src={Img} className="img" alt="img" />
            {isHovered && (
            <>
            <video src={trailer} autoPlay={true} loop />
            <div className="itemInfo">
                <div className="icons">
                    <PlayArrow className="icon"/>
                    <Add className="icon"/>
                    <ThumbUpOutlined className="icon"/>
                    <ThumbDownOutlined className="icon"/>
                </div>
                
                <div className="itemInfoTop">
                    <span>1 hour 14 min</span>
                    <span className="limit">+16</span>
                    <span>1999</span>
                </div>

                <div className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Saepe vitae quod culpa alias, possimus est 
                    reprehenderit dolore sit vero suscipit. Optio 
                </div>

                <div className="genre">
                    Action
                </div>

            </div>
            </>
            )}
        </div>
    )
}

export default ListItem;