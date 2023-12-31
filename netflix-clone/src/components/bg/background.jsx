import React from "react";
import berlin from "../../assets/berlin.jpeg";
import "./Background.css"; // Import a CSS file for styling

function Background() {
  const backgroundStyle = {
    width: '100%', // Set the image width to 100% of the container
    height: '100vh', // Set the image height to 100% of the viewport height
    objectFit: 'cover', // Make sure the image covers the container without distortion
  };

  return (
    <div className="background-container">
      <img src={berlin} alt="" style={backgroundStyle} />
    </div>
  );
}

export default Background;
