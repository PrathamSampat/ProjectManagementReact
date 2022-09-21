import './App.css';
import { Routes, Route } from 'react-router-dom'
import React, {useState} from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { ChakraProvider, ColorModeProvider, Flex } from '@chakra-ui/react'
import Sidebar from './components/Sidebar';
import Files from './components/Files';

function App() {
  const adminUser = {
    name: "hi",
    password: "123"
  }
  
  const [user, setUser] = useState({name: "", password: ""});
  const [error, setError] = useState("");

  const login = details => {
    console.log(details);

    if (details.name == adminUser.name && details.password == adminUser.password){
      console.log("logged in");
      setUser({
        name: details.name
      })
    }
    else {
      console.log("Details dont match");
      setError("Wrong username or password!")
    }
  }

  const logout = () => {
    setUser({name: "",password:""});
  }
  
  return (
    <ChakraProvider>
      <ColorModeProvider>
          {(user.password != "") ? (
            <div className='welcome'>
              <Flex flexDirection='row'>
              <Sidebar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/files" element={<Files />} />
                  
              </Routes>
              </Flex>
              <button onClick={logout}>Logout</button>
              
            </div>
          ) : (
            <Login Login={login} error={error}/>
          )}
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
