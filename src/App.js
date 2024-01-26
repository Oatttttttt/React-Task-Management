import Addform from "./components/Addform";
import Header from "./components/header";
import Item from "./components/item";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [task, settask] = useState(
    JSON.parse(localStorage.getItem("Tasks")) || []
  );
  const [title, setTitle] = useState("");
  const [edit, setedit] = useState(null);
  const [theme, settheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(task));
  }, [task]);

  function Delete(id) {
    const result = task.filter((item) => item.id !== id);
    settask(result);
  }

  function savetask(e) {
    console.log(e);
    e.preventDefault();
    if (!title) {
      alert("Input please");
    } else if (edit) {
      console.log("Update data");
      const updatetask = task.map((item) => {
        if (item.id === edit) {
          return { ...item, title: title };
        }
        return item;
      });
      console.log(updatetask);
      settask(updatetask);
      setedit(null);
      setTitle("");
    } else {
      const newTask = {
        // id: Math.floor(Math.random() * 1000),
        id: task.length + 1,
        title: title,
      };
      settask([...task, newTask]);
      setTitle("");
    }
  }

  function Edit(id) {
    setedit(id);
    const result = task.find((item) => item.id === id);
    console.log(result);
    setTitle(result.title);
  }

  return (
    <>
      {" "}
      <div className={"App " + theme}>
        <Header theme={theme} settheme={settheme} />{" "}
        <div className="Container">
          <Addform
            title={title}
            setTitle={setTitle}
            savetask={savetask}
            edit={edit}
          />{" "}
          <section>
            {" "}
            {task.map((data) => (
              <Item key={data.id} data={data} Delete={Delete} Edit={Edit} />
            ))}{" "}
          </section>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}

export default App;
