import React from 'react'
import '../styles/sidebar.scss'
import {
    Flex,
    Box,
    Tooltip,
    useColorMode,
    useColorModeValue
  } from '@chakra-ui/react'
import { FiSettings } from "react-icons/fi"
import {  AiOutlinePieChart, AiOutlineControl } from "react-icons/ai"
import { VscHome } from "react-icons/vsc"
import { BsFolder } from "react-icons/bs"
import { NavLink } from 'react-router-dom'

function Sidebar() {

    const {toggleColorMode} = useColorMode()
    const iconColor = useColorModeValue("black", "#fff")

  return (
    <div className='sidebar'>
        <Flex flexDirection="column" p="40px 16px" alignItems="center" >
            <Tooltip label='Home' placement='left'>
                <Box>
                    <NavLink to="/">
                        <VscHome  size="2rem" className='nav-icons' color={iconColor}/>
                    </NavLink>
                </Box>
            </Tooltip>
            <Tooltip label='Analytics' placement='left'>
                <Box>
                    <AiOutlinePieChart className='nav-icons' id='analytics-icon' size="2rem" color={iconColor}/>
                </Box>
            </Tooltip>
            <Tooltip label='Control Centre' placement='left'>
                <Box>
                    <AiOutlineControl className='nav-icons' id='control-icon' size="2rem" color={iconColor}/>
                </Box>
            </Tooltip>
            <Tooltip label='Folders' placement='left'>
                <Box>
                    <NavLink to="/files">
                        <BsFolder className='nav-icons' id='folder-icon' size="2rem" color={iconColor}/>
                    </NavLink>
                </Box>
            </Tooltip>
            <Tooltip label='Settings' placement='left'>
                <Box>
                    <FiSettings className='nav-icons' id='settings-icon' size="2rem" color={iconColor}/>
                </Box>
            </Tooltip>
        </Flex>
    </div>
  )
}

export default Sidebar
