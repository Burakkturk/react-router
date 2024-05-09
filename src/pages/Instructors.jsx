import { Link } from "react-router-dom";

const Instructors = () => {
  return (
    <div className="p-3">
      <h1>Instructors</h1>
      <div className="d-flex flex-column">
      <Link to="1" state={{name:"xyz"}}>Instructor-1</Link><br></br>
      <Link to="2" state={{name:"xyz"}}>Instructor-2</Link><br></br>
      <Link to="3" state={{name:"xyz"}}>Instructor-3</Link>
      </div>
    </div>
    
  );
};

export default Instructors;
