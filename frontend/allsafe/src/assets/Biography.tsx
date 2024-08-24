import React from "react";

const Biography = ({
  heading = "Heading",
  subheading = "Subheading",
  description = "Biography",
}) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      background: "linear-gradient(0deg, #E3E3E3 0%, #E3E3E3 100%)",
      backgroundImage: "url(https://via.placeholder.com/1200x2874)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    }}
  >
    <div
      style={{
        width: "100%",
        maxWidth: 1200,
        padding: 64,
        opacity: 0.8,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 48,
      }}
    >
      <img
        style={{
          width: 300,
          height: 200,
          background: "linear-gradient(0deg, #E3E3E3 0%, #E3E3E3 100%)",
        }}
        src="https://via.placeholder.com/484x350"
        alt="Placeholder"
      />
      <div
        style={{
          width: 484,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 24,
        }}
      >
        <div
          style={{
            width: "100%",
            height: 61,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
          }}
        >
          <h2
            style={{
              color: "#1E1E1E",
              fontSize: 24,
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              lineHeight: "28.8px",
              wordWrap: "break-word",
            }}
          >
            {heading}
          </h2>
          <h3
            style={{
              color: "#757575",
              fontSize: 20,
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              lineHeight: "24px",
              wordWrap: "break-word",
            }}
          >
            {subheading}
          </h3>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <p
            style={{
              flex: "1 1 0",
              color: "#1E1E1E",
              fontSize: 16,
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              lineHeight: "22.4px",
              wordWrap: "break-word",
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Biography;
