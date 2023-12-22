import React from "react";

const MyFooter = () => {
  return (
    <footer
      className="text-white text-center py-4"
      style={{ backgroundColor: "#221f1f" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h5 style={{ color: "#d81f26" }}>Audio and Subtitles</h5>
          </div>
          <div className="col-lg-4 mb-4">
            <h5 style={{ color: "#d81f26" }}>Audio Description</h5>
          </div>
          <div className="col-lg-4 mb-4">
            <h5 style={{ color: "#d81f26" }}>Help Center</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p style={{ color: "#d81f26" }}>&copy; 1997-2023 Netflix, Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
