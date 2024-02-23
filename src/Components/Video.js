
import React, { useState, useEffect, useRef } from "react";
import LikeButton from "./LikeButton";


const Video = ({ src, title }) => {
  const vRef = useRef(null);

  useEffect(() => {
    const videoEle = vRef.current;

    const handleInter = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        videoEle.play();
      } else {
        videoEle.pause();
      }
    };

    const obs = new IntersectionObserver(handleInter, {
      threshold: 0.5,
    });
    obs.observe(videoEle);

    return () => {
      obs.unobserve(videoEle);
    };
  }, []);

  return (
    <div className="video-player">
      <video ref={vRef} controls>
        <source src={src} type="video/mp4" />
      </video>
      <h3>{title}</h3>
      <LikeButton />
    </div>
  );
};

export default Video;
