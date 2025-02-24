import React from "react";

import { useState } from "react";

export const Card3D = ({ heading, linkUrl, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const centerX = (rect.left + rect.right) / 2;
    const centerY = (rect.top + rect.bottom) / 2;
    const posX = e.clientX - centerX;
    const posY = e.clientY - centerY;

    setRotateX(posY * -0.1);
    setRotateY(posX * 0.1);
  };

  const resetRotation = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <div
      className="card-container"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={resetRotation}
      style={{
        perspective: "1000px",
        transition: "transform 0.3s",
        cursor: "pointer",
      }}
    >
      <div
        className="card-content"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: "transform 0.3s",
          position: "relative",
          width: "300px",
          height: "400px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "15px",
          padding: "20px",
          boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.1)",
          overflow: "hidden",
        }}
      >
        <img
          src={imageUrl}
          alt="Card content"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "8px",
            marginBottom: "15px",
            border: "2px solid rgba(255,255,255,0.1)",
          }}
        />

        <h2
          style={{
            color: "white",
            margin: "0 0 15px 0",
            textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
          }}
        >
          {heading}
        </h2>

        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
            padding: "10px 20px",
            backgroundColor: "rgba(255,255,255,0.2)",
            borderRadius: "8px",
            color: "white",
            textDecoration: "none",
            transition: "all 0.3s",
            opacity: isHovered ? 1 : 0,
            transform: `translateY(${isHovered ? "0" : "10px"})`,
            pointerEvents: isHovered ? "auto" : "none",
          }}
        >
          Open Link
        </a>
      </div>

      <style jsx>{`
        .card-container {
          perspective: 1000px;
        }
        .card-content {
          transform-style: preserve-3d;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .card-content:hover {
          box-shadow: 0 35px 60px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
};


