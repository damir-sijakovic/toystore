import "./loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading-box">
        <div className="loading-container">
          <span className="loading-circle"></span>
          <span className="loading-circle"></span>
          <span className="loading-circle"></span>
          <span className="loading-circle"></span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
