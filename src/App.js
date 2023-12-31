import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import { auth } from "./firebase";
import { Helmet } from "react-helmet";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email,
      };
      if (userAuth) {
        console.log(userAuth);
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Image Gallery App</title>
        <link rel="canonical" href="" />
        <meta name="description" content="A movie discovery application" />
      </Helmet>
      {user ? <Home /> : <Login />}
    </div>
  );
}

export default App;
