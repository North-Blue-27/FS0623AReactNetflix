import React from 'react';

const MyFooter = () => {
  return (
    <footer className="text-white text-center py-4" style={{ backgroundColor: '#221f1f' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h5>Audio and Subtitles</h5>
            {/* Aggiungi altri link o informazioni */}
          </div>
          <div className="col-lg-4 mb-4">
            <h5>Audio Description</h5>
            {/* Aggiungi altri link o informazioni */}
          </div>
          <div className="col-lg-4 mb-4">
            <h5>Help Center</h5>
            {/* Aggiungi altri link o informazioni */}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p>&copy; 1997-2023 Netflix, Inc.</p>
            {/* Aggiungi altri link o informazioni */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MyFooter;