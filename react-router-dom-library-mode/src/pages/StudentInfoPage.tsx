import { Link, useParams } from "react-router";

const StudentInfoPage = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>Student info Page - {name}</h1>
      {/* <Link to={"/"}>Back Home</Link> */}
    </div>
  );
};

export default StudentInfoPage;
