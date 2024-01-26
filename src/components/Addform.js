import "./Addform.css";
export default function Addform(props) {
  const { title, setTitle, savetask, edit } = props;

  return (
    <>
      <h2> Task Management Form </h2>{" "}
      <form className="form" onSubmit={savetask}>
        <input
          type="text"
          className="text-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />{" "}
        <button type="submit" className="submit-btn">
          {" "}
          {edit ? "Update" : "Submit"}{" "}
        </button>{" "}
      </form>{" "}
    </>
  );
}
