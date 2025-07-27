import React from "react";
import "./Feed.css";
import { assets } from "../../assets";
import { Link } from "react-router-dom";
const Feed = ({category}) => {
  return (
    <div className="feed">
      <Link to={`video/20/4251`} className="card">
        <img src={assets.thumb1} alt="" />
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi!
        </h2>
        <h3>code-with-divyesh</h3>
        <p>15k views &bull;2 days ago</p>
      </Link>
      <div className="card">
        <img src={assets.thumb2} alt="" />
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi!
        </h2>
        <h3>code-with-divyesh</h3>
        <p>15k views &bull;2 days ago</p>
      </div>
      <div className="card">
        <img src={assets.thumb3} alt="" />
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi!
        </h2>
        <h3>code-with-divyesh</h3>
        <p>15k views &bull;2 days ago</p>
      </div>
      <div className="card">
        <img src={assets.thumb4} alt="" />
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi!
        </h2>
        <h3>code-with-divyesh</h3>
        <p>15k views &bull;2 days ago</p>
      </div>
      <div className="card">
        <img src={assets.thumb5} alt="" />
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi!
        </h2>
        <h3>code-with-divyesh</h3>
        <p>15k views &bull;2 days ago</p>
      </div>
      <div className="card">
        <img src={assets.thumb6} alt="" />
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi!
        </h2>
        <h3>code-with-divyesh</h3>
        <p>15k views &bull;2 days ago</p>
      </div>
      <div className="card">
        <img src={assets.thumb7} alt="" />
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi!
        </h2>
        <h3>code-with-divyesh</h3>
        <p>15k views &bull;2 days ago</p>
      </div>
      <div className="card">
        <img src={assets.thumb8} alt="" />
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi!
        </h2>
        <h3>code-with-divyesh</h3>
        <p>15k views &bull;2 days ago</p>
      </div>
      <div className="card">
        <img src={assets.thumb1} alt="" />
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi!
        </h2>
        <h3>code-with-divyesh</h3>
        <p>15k views &bull;2 days ago</p>
      </div>
      <div className="card">
        <img src={assets.thumb2} alt="" />
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi!
        </h2>
        <h3>code-with-divyesh</h3>
        <p>15k views &bull;2 days ago</p>
      </div>
      <div className="card">
        <img src={assets.thumb3} alt="" />
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi!
        </h2>
        <h3>code-with-divyesh</h3>
        <p>15k views &bull;2 days ago</p>
      </div>
      <div className="card">
        <img src={assets.thumb4} alt="" />
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi!
        </h2>
        <h3>code-with-divyesh</h3>
        <p>15k views &bull;2 days ago</p>
      </div>
      <div className="card">
        <img src={assets.thumb5} alt="" />
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi!
        </h2>
        <h3>code-with-divyesh</h3>
        <p>15k views &bull;2 days ago</p>
      </div>
      <div className="card">
        <img src={assets.thumb6} alt="" />
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi!
        </h2>
        <h3>code-with-divyesh</h3>
        <p>15k views &bull;2 days ago</p>
      </div>
      <div className="card">
        <img src={assets.thumb7} alt="" />
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi!
        </h2>
        <h3>code-with-divyesh</h3>
        <p>15k views &bull;2 days ago</p>
      </div>
      <div className="card">
        <img src={assets.thumb8} alt="" />
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi!
        </h2>
        <h3>code-with-divyesh</h3>
        <p>15k views &bull;2 days ago</p>
      </div>
    </div>
  );
};

export default Feed;
