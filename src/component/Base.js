import React from 'react';

const Base = ({
  title = "My Title",
  description = "My desription",
  className = " text-white p-4",
  children
}) => (
  <div>
    <div className="container-fluid">
      <div className="jumbotron  text-white text-center">
        <h5 className="display-4">{title}</h5>
        <p className="lead">{description}</p>
        <div className="container-fluid bg-success text-white text-center py-1">
        
        </div>
      </div>
      <div className={className}>{children}</div>
      
    </div>
    
    <footer className="footer py-3">
      <div className="container-fluid bg-success text-white text-center py-1">
        
      </div>
      <div className="container">
        <span className="text-muted">
          An Amazing <span className="text-white">MATHEMATIC</span> site
        </span>
      </div>
    </footer>
  </div>
);


export default Base;