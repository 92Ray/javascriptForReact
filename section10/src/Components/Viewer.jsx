const Viewer = ({calculate}) => {


  return <>
    <div className="viewer">
      <h1>계산결과</h1>
      <h1>{calculate}</h1>
    </div>
  </>
}

export default Viewer;