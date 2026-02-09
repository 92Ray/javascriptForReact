const Viewer = ({ count }) => {
  return (
    <div className='viewer'>
      <h2>계산 결과</h2>
      <h1 style={{ fontSize: "40px", color: "#ffffff" }}>{count}</h1>
    </div>
  );
};

export default Viewer;