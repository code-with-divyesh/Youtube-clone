import React from "react";
import "./PlayVideo.css";
import { assets } from "../../assets";
const PlayVideo = () => {
  return (
    <div className="playvideo">
      <video src={assets.video} controls autoPlay muted></video>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem!</h3>
      <div className="play-video-info">
        <p>1525 views &bull; 2 Days ago</p>
        <div>
          <span>
            <img src={assets.like} alt="" />
            125
          </span>
          <span>
            <img src={assets.dislike} alt="" />2
          </span>
          <span>
            <img src={assets.share} alt="" />
            share
          </span>
          <span>
            <img src={assets.save} alt="" />
            125
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={assets.jack} alt="" />
        <div>
          <p>Divyesh Gandhi</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="video-des">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aut
          veniam et.
        </p>
        <hr />
        <h4>130 Comments</h4>
        <div className="Comments">
          <img src={assets.userprofile} alt="" />
          <div>
            <h3>
              Divyesh Gandhi <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              saepe ratione vel corporis, maiores beatae nemo cum natus cumque
              neque quaerat rem, minus eius incidunt velit voluptatum. Vitae,
              eos? Necessitatibus!
            </p>
            <div className="comment-action">
              <img src={assets.like} alt="" />
              <span>255</span>
              <img src={assets.dislike} alt="" />
              <span>2</span>
            </div>
          </div>
        </div>
        <div className="Comments">
          <img src={assets.userprofile} alt="" />
          <div>
            <h3>
              Divyesh Gandhi <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              saepe ratione vel corporis, maiores beatae nemo cum natus cumque
              neque quaerat rem, minus eius incidunt velit voluptatum. Vitae,
              eos? Necessitatibus!
            </p>
            <div className="comment-action">
              <img src={assets.like} alt="" />
              <span>255</span>
              <img src={assets.dislike} alt="" />
              <span>2</span>
            </div>
          </div>
        </div>
        <div className="Comments">
          <img src={assets.userprofile} alt="" />
          <div>
            <h3>
              Divyesh Gandhi <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              saepe ratione vel corporis, maiores beatae nemo cum natus cumque
              neque quaerat rem, minus eius incidunt velit voluptatum. Vitae,
              eos? Necessitatibus!
            </p>
            <div className="comment-action">
              <img src={assets.like} alt="" />
              <span>255</span>
              <img src={assets.dislike} alt="" />
              <span>2</span>
            </div>
          </div>
        </div>
        <div className="Comments">
          <img src={assets.userprofile} alt="" />
          <div>
            <h3>
              Divyesh Gandhi <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              saepe ratione vel corporis, maiores beatae nemo cum natus cumque
              neque quaerat rem, minus eius incidunt velit voluptatum. Vitae,
              eos? Necessitatibus!
            </p>
            <div className="comment-action">
              <img src={assets.like} alt="" />
              <span>255</span>
              <img src={assets.dislike} alt="" />
              <span>2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
