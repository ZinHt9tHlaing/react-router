import { Link, NavLink, Outlet } from "react-router";

const HomePage = () => {
  const students = ["John", "Jane", "Bob", "Alice", "Charlie"];
  return (
    <div>
      <h1>HomePage</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et perferendis
        asperiores quaerat, explicabo ullam alias doloremque tenetur odit velit
        quas repellat beatae, vel nemo, pariatur assumenda iste atque molestiae
        autem.
      </p>
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
          marginBottom: "10px",
        }}
      >
        {students.map((student, index) => (
          <Link to={`/students/${student}`} key={index}>
            {student}
          </Link>
        ))}
      </div>
      <NavLink className={({ isActive }) => isActive && "isActive"} to="/about">
        Go to about page
      </NavLink>
      <Outlet />
    </div>
  );
};

export default HomePage;
