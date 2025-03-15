import myImg from "../../public/mobile.jpeg";

const Example = () => {
  const name = "saikrishna";
  function greet(user) {
    if (user) {
      return <h1>hello {name}</h1>;
    } else {
      return <h1>hello guest</h1>;
    }
  }
  return (
    <div>
      <h1 className="myclass">welcome to react {greet(name)}</h1>
      <h1 style={{ color: name ? "white" : "red", backgroundColor: "black" }}>
        {name ? <h1>welecome {name} </h1> : <h1>hello guest</h1>}
      </h1>
      <br />
      {name && <h1>welecome {name}</h1>}
      <img src="../public/mobile.jpeg" alt="mobile" />
      <img src={myImg} alt="mobile" />
    </div>
  );
};

export default Example;
