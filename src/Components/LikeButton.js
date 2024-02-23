
import React, { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <button
      onClick={handleLike}
      style={{ color: liked ? "red" : "black" }}
    >
      Like
    </button>
  );
};

export default LikeButton;
