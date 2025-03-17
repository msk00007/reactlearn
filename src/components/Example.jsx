import { useState, useEffect } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userData, setUserData] = useState({
    username: "sai",
    age: 20,
    location: "hyderabad",
    followers: 100,
  });

  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
    console.log(`Count updated: ${count}`);
  }, [count]);

  useEffect(() => {
    console.log(`User is now ${isLoggedIn ? "logged in" : "logged out"}`);
  }, [isLoggedIn]);

  return (
    <>
      <br />

      {isLoggedIn ? (
        <div>
          <h1>Welcome {userData.username}</h1>
          <h2>Age: {userData.age}</h2>
          <h2>Location: {userData.location}</h2>
          <h2>Followers: {userData.followers}</h2>
          <button
            onClick={() =>
              setUserData((prev) => ({
                ...prev,
                followers: prev.followers + 1,
              }))
            }
          >
            Increase Followers
          </button>
        </div>
      ) : (
        <div>
          <h2>Please log in</h2>
        </div>
      )}

      <br />
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
};

export default Example;
