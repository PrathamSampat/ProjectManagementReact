import React from 'react'
import '../styles/Files.scss'
import {
  Flex,
  Box,
  Text,
  useColorMode,
  useColorModeValue,
  Input,
  InputGroup,
  InputRightAddon,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { RiMoonFill } from "react-icons/ri"
import { FaUserCircle } from "react-icons/fa"

function Files() {const {toggleColorMode} = useColorMode()

const bg = useColorModeValue("#f3f6fd", "#111827")
const borderColor = useColorModeValue("#252525", "#fff")
const textColor = useColorModeValue("#252525", "#fff")
const projectBg = useColorModeValue("#fff","#1f2937")
const fileBox = useColorModeValue("#252525","#fff")
document.body.style.backgroundColor = bg;

return (
  <div className='app'>
    <Flex className='header' mt="1%" flexDirection="row">
      <Flex className='header-left'>
        <Text className="header-name" ml="1rem" w="20%">[company name]</Text>
        <InputGroup className='search-wrapper' backgroundColor={projectBg} variant='unstyled'>
          <Input type="search" ml="1rem" placeholder='Click here to search'/>
          <InputRightAddon children={<SearchIcon />} p="0 10px"/>
        </InputGroup>
      </Flex>
      <Flex className='header-right'>
        <RiMoonFill className='icons' id='moon-icon' onClick={toggleColorMode} size="1.5rem"/>
        <FaUserCircle className='icons' id='user-icon' size='1.5rem' />
        <Text className='user-text'>user</Text>
      </Flex>
    </Flex>
    <Flex className='app-content' flexDirection='row'>
      <Box className='home-section' bgColor={projectBg}>
        <Flex className='home-header'>
          <Text className='header-text'>Folders</Text>
          <Text className='time'>December, 28</Text>
        </Flex>
        <Grid className='project-boxes grid-view'>
          <GridItem className='project-box-wrapper'>
            <Flex h="3.5rem" border='1px solid' borderColor={borderColor} borderRadius="10px">
              <Box className="fileBox" w="14%" borderRight='1px solid black' backgroundColor={fileBox}></Box>
              <Box className='fileBox-text' color={textColor}>File 1</Box>
            </Flex>
          </GridItem>
          <GridItem className='project-box-wrapper'>
            <Flex h="3.5rem" border='1px solid' borderColor={borderColor} borderRadius="10px">
              <Box className="fileBox" w="14%" borderRight='1px solid black' backgroundColor={fileBox}></Box>
              <Box className='fileBox-text' color={textColor}>File 2</Box>
            </Flex>
          </GridItem>
          <GridItem className='project-box-wrapper'>
            <Flex h="3.5rem" border='1px solid' borderColor={borderColor} borderRadius="10px">
              <Box className="fileBox" w="14%" borderRight='1px solid black' backgroundColor={fileBox}></Box>
              <Box className='fileBox-text' color={textColor}>File 3</Box>
            </Flex>
          </GridItem>
          <GridItem className='project-box-wrapper'>
            <Flex h="3.5rem" border='1px solid' borderColor={borderColor} borderRadius="10px">
              <Box className="fileBox" w="14%" borderRight='1px solid black' backgroundColor={fileBox}></Box>
              <Box className='fileBox-text' color={textColor}>File 4</Box>
            </Flex>
          </GridItem>
          <GridItem className='project-box-wrapper'>
            <Flex h="3.5rem" border='1px solid' borderColor={borderColor} borderRadius="10px">
              <Box className="fileBox" w="14%" borderRight='1px solid black' backgroundColor={fileBox}></Box>
              <Box className='fileBox-text' color={textColor}>File 5</Box>
            </Flex>
          </GridItem>
          <GridItem className='project-box-wrapper'>
            <Flex h="3.5rem" border='1px solid' borderColor={borderColor} borderRadius="10px">
              <Box className="fileBox" w="14%" borderRight='1px solid black' backgroundColor={fileBox}></Box>
              <Box className='fileBox-text' color={textColor}>File 6</Box>
            </Flex>
          </GridItem>
          <GridItem className='project-box-wrapper'>
            <Flex h="3.5rem" border='1px solid' borderColor={borderColor} borderRadius="10px">
              <Box className="fileBox" w="14%" borderRight='1px solid black' backgroundColor={fileBox}></Box>
              <Box className='fileBox-text' color={textColor}>File 7</Box>
            </Flex>
          </GridItem>
          <GridItem className='project-box-wrapper'>
            <Flex h="3.5rem" border='1px solid' borderColor={borderColor} borderRadius="10px">
              <Box className="fileBox" w="14%" borderRight='1px solid black' backgroundColor={fileBox}></Box>
              <Box className='fileBox-text' color={textColor}>File 8</Box>
            </Flex>
          </GridItem>
          <GridItem className='project-box-wrapper'>
            <Flex h="3.5rem" border='1px solid' borderColor={borderColor} borderRadius="10px">
              <Box className="fileBox" w="14%" borderRight='1px solid black' backgroundColor={fileBox}></Box>
              <Box className='fileBox-text' color={textColor}>File 9</Box>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </Flex>
  </div>


  
)
}

export default Files
