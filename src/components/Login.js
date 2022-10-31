import React, {useState} from 'react'
import '../styles/login.css';
import { IoLockClosedOutline, IoPersonOutline } from "react-icons/io5";
import {
    Stack,
    Button,
    Flex,
    Box,
    Text,
    useColorMode,
    useColorModeValue
  } from '@chakra-ui/react'
import {MoonIcon} from '@chakra-ui/icons'
import axios from 'axios';

// useColorMode is a chakra ui component prop to switch between themes, first we need to set the color in light mode and then in dark mode



function Login({Login, error}) {
    const {toggleColorMode} = useColorMode()
    const textIconColor = useColorModeValue("input-light", "input-dark")
    const iconColor = useColorModeValue("black", "#fff")
    const bg = useColorModeValue("#fff", "rgba(0,0,0,.3)")
    const bg2 = useColorModeValue("#f3f6fd", "#111827")
    const btnColor = useColorModeValue("#2C3333","#f2f2f2")
    const btnFontColor = useColorModeValue("#fff","black")
    const btnColorHover = useColorModeValue("#121717","#ffffff")

    const [details, setDetails] = useState({name: "", password: ""});
    
    const submitHandler = e => {
        e.preventDefault();
        Login(details);
        let res = axios.post("http://127.0.0.1:8000/login/");
        console.log("post req", res);
    }
  
    document.body.style.backgroundColor = bg2;
  
    return (
    <form onSubmit={submitHandler} className='form-full' >
        <MoonIcon onClick={toggleColorMode} align="right" position="relative" left="90%" mt="1rem" _hover={{cursor:"pointer"}}/>
        <div className='form-inner'>
            
            {(error != "") ? <div className='error'>{error}</div> : ""}
            <div className='form-group'>
            
            <Stack 
                className='stack'
                backgroundColor={bg}
                spacing={4} 
                marginLeft="auto" 
                marginRight="auto" 
                marginTop="10%" 
                h="auto"
            >
            <Text className='login-text' backgroundColor={textIconColor}>Welcome!</Text>

                <Flex>
                    <Box marginTop="5%" h='10%' position='relative' alignContent='center' borderColor="red" w="9%"><IoPersonOutline color={iconColor}  /></Box>
                    <input 
                        className={textIconColor} 
                        type='text' 
                        placeholder='Enter your username'
                        name='username'
                        onChange={e => setDetails({...details, name: e.target.value})} 
                        value={details.name}
                    />
                </Flex>

                <Flex>
                    <Box marginTop="5%" h='10%' position='relative' alignContent='center' borderColor={textIconColor} w="9%"><IoLockClosedOutline color={iconColor}  /></Box>
                    <input 
                        className={textIconColor} 
                        type='password' 
                        name='password'
                        placeholder='Enter your password here' 
                        onChange={e => setDetails({...details, password: e.target.value})} 
                        value={details.password} 
                    />
                </Flex>
            <Button 
                className='login-btn' 
                type="submit" 
                variant="outline"
                backgroundColor={btnColor}
                fontSize="lg" 
                w="50%" 
                alignSelf="center" 
                borderColor="transparent"
                color={btnFontColor}
                _hover={
                    {backgroundColor:btnColorHover}
                }
            >
                Login
            </Button>
            </Stack>
            </div>
        </div>
    </form>
  )
}

export default Login
