import { Link } from "react-router-dom";

const Instructors = () => {
  return (
    <div className="p-3">
      <h1>Instructors</h1>
      <Link to="1">Instructor-1</Link><br></br>
      <Link to="2">Instructor-2</Link><br></br>
      <Link to="3">Instructor-3</Link>
    </div>
    
  );
};

export default Instructors;
