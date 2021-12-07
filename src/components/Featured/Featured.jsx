import React from 'react';
import Netflix from '../../img/Netflix1.png';
import Matrix from '../../img/matrix.png';
import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import './Featured.scss';

const Featured = ({type}) => {
    return (
        <div className="featured">
           {type && (
               <div className="category">
                   <span>{type === "Movie" ? "Movies" : "Series"}</span>
                   <select name="genre" id="genre">
                       <option>Genre</option>
                       <option value="adventure">Adventure</option>
                       <option value="comedy">Comedy</option>
                       <option value="crime">Crime</option>
                       <option value="fantasy">Fantasy</option>
                       <option value="historical">Historical</option>
                       <option value="Horror">Horror</option>
                       <option value="romantic">Romantic</option>
                       <option value="sci-fi">Sci-fi</option>
                       <option value="thriller">Thriller</option>
                       <option value="western">Western</option>
                       <option value="animation">Animation</option>
                       <option value="drama">Drama</option>
                       <option value="documentary">Documentary</option>
                   </select>
               </div>
           )}
            <img src={Netflix} alt="img" className="featuredImg" />
            <div className="info">
                <img src={Matrix} alt="img" className="featuredInfo" />
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