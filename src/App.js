import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { ChakraProvider, ColorModeProvider, Flex } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import Files from "./components/Files";
import Analytics from "./components/Analytics";
import axios from "axios";

function App() {

  const [user, setUser] = useState({ name: "", password: "" });
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const loginUser = async () => {
    try {
      let res = await axios.get("http://127.0.0.1:8000/employees");
      let result = res.data;
      setResult(result);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loginUser();
  }, []);

  const login = (details) => {
    console.log(details);

    result.map((item) => {
      if (details.name == item.email_id && details.password == item.password) {
        console.log("logged in");
        setUser({
          name: details.name,
        });
      } else {
        const myError = async () => {
          let res = await axios.get("http://127.0.0.1:8000/employees");
          console.log("res",res);
        }
        myError();
      }
    });
  };

  const logout = () => {
    setUser({ name: "", password: "" });
  };

  return (
    <ChakraProvider>
      <ColorModeProvider>
        {user.password != "" ? (
          <div className="welcome">
            <Flex flexDirection="row">
              <Sidebar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/files" element={<Files />} />
                <Route path="/analytics" element={<Analytics />} />
              </Routes>
            </Flex>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <Login Login={login} error={error} />
        )}
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
