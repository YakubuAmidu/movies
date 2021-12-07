import React, { useState } from 'react';
import { PlayArrow, Add, ThumbUpOutlined, ThumbDownOutlined } from '@material-ui/icons';
import Img from '../../img/profile.png';
import './ListItem.scss';

const ListItem = ({ index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="ListItem" style={{ left: isHovered && index * 225 - 50}} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img src={Img} className="img" alt="img" />
            <div className="itemInfo">
                <div className="icons">
                    <PlayArrow />
                    <Add />
                    <ThumbUpOutlined />
                    <ThumbDownOutlined />
                </div>
                
                <div className="itemIfoTop">
                    <span>1 hour 14 min</span>
                    <span className="limit">+16</span>
                    <span>1999</span>
                </div>

                <div className="des">
                    Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Saepe vitae quod culpa alias, possimus est 
                    reprehenderit dolore sit vero suscipit. Optio 
                </div>

                <div className="genre">
                    Action
                </div>

            </div>
        </div>
    )
}

export default ListItem;