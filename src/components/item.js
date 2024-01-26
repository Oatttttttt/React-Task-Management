import "./item.css";
import { BsTrashFill } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
export default function Item(props) {
  const { data, Delete, Edit } = props;
  return (
    <>
      <p>
        {" "}
        <div className="list">
          {" "}
          <p className="title">
            {" "}
            {data.id}. {data.title}{" "}
          </p>{" "}
          <div className="button-container">
            <BsTrashFill
              className="btn"
              style={{ color: "black" }}
              onClick={() => Delete(data.id)}
            />{" "}
            <BiEditAlt
              className="btn"
              style={{ color: "black" }}
              onClick={() => Edit(data.id)}
            />{" "}
          </div>{" "}
        </div>{" "}
      </p>{" "}
    </>
  );
}
