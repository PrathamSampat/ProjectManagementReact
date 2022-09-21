import {React, useState} from 'react'
import '../styles/Dashboard.scss'
import {
    Flex,
    Box,
    Text,
    useColorMode,
    useColorModeValue,
    Input,
    InputGroup,
    InputRightAddon,
    Container,
    Grid,
    GridItem,
    Progress,
  } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { RiMoonFill } from "react-icons/ri"
import { IoAddCircleOutline } from "react-icons/io5"
import { FaUserCircle, FaList } from "react-icons/fa"
import { FiMoreVertical } from "react-icons/fi"
import { AiOutlineAppstore } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import Sidebar from './Sidebar'

function Dashboard() {
  const {toggleColorMode} = useColorMode()
  const bg = useColorModeValue("#f3f6fd", "#111827")
  const projectBg = useColorModeValue("#fff","#1f2937")
  const progress1 = useColorModeValue("orange","orange")
  const progress2 = useColorModeValue("purple","purple")
  const progress3 = useColorModeValue("teal","teal")
  const progress4 = useColorModeValue("pink","pink")
  const progress5 = useColorModeValue("green","green")
  const progress6 = useColorModeValue("blue","blue")
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
        {/* <Sidebar /> */}
        <Box className='home-section' bgColor={projectBg}>
          <Flex className='home-header'>
            <Text className='header-text'>Home</Text>
            <Text className='time'>December, 28</Text>
          </Flex>
          <Flex className='home-status' >
            <Flex className='item-status' flexDirection='column'>
              <Text className="status-number">45</Text>
              <Text className="status-type">Metric 1</Text>
            </Flex>
            <Flex className='item-status' flexDirection='column'>
              <Text className="status-number">45</Text>
              <Text className="status-type">Metric 2</Text>
            </Flex>
            <Flex className='item-status' flexDirection='column'>
              <Text className="status-number">45</Text>
              <Text className="status-type">Metric 3</Text>
            </Flex>
            <Flex className='view-actions' flexDirection='row' >
              <FaList className='view-btn list-view' size='2.1rem'/>
              <AiOutlineAppstore className='view-btn grid-view' size='2.3rem'/>
            </Flex>
          </Flex>
          <Grid className='project-boxes grid-view'>
            <GridItem className='project-box-wrapper'>
              <Box className='project-box' backgroundColor='#fee4cb'>
                <Flex className='project-box-header'>
                  <Text className='project-box-text header' >December 10, 2020</Text>
                  <FiMoreVertical className='project-box-icon' size="2rem"/>
                </Flex>
                <Container class="project-box-content-header">
                  <Text className='box-content-header'>
                    Web Designing
                  </Text>
                  <Text className='box-content-subheader'>
                    Prototyping
                  </Text>
                </Container>
                <Container className='box-progress-wrapper'>
                  <Text className='box-progress-header'>Progress</Text>
                  <Progress value={60} size='xs' colorScheme={progress1} backgroundColor='#fff' borderRadius='5px' m="8px 0"/>
                  <Text className='box-progress-percentage'>60%</Text>
                </Container>
                <Flex className='project-box-footer'>
                  <Flex className='participants'>
                    <BiUserCircle size='1.5rem'/>
                    <IoAddCircleOutline size='1.5rem'/>
                  </Flex>
                  <Flex>
                    <Text className='days-left'>2 Days Left</Text>
                  </Flex>
                </Flex>
              </Box>
            </GridItem>
            <GridItem className='project-box-wrapper'>
              <Box className='project-box' backgroundColor='#e9e7fd'>
                <Flex className='project-box-header'>
                  <Text className='project-box-text header' >December 10, 2020</Text>
                  <FiMoreVertical className='project-box-icon' size="2rem"/>
                </Flex>
                <Container class="project-box-content-header">
                  <Text className='box-content-header'>
                    Testing
                  </Text>
                  <Text className='box-content-subheader'>
                    Prototyping
                  </Text>
                </Container>
                <Container className='box-progress-wrapper'>
                  <Text className='box-progress-header'>Progress</Text>
                  <Progress value={50} size='xs' colorScheme={progress2} backgroundColor="#fff" borderRadius='5px' m="8px 0"/>
                  <Text className='box-progress-percentage'>50%</Text>
                </Container>
                <Flex className='project-box-footer'>
                  <Flex className='participants'>
                    <BiUserCircle size='1.5rem'/>
                    <IoAddCircleOutline size='1.5rem'/>
                  </Flex>
                  <Flex>
                    <Text className='days-left' color='#4f3ff0'>2 Days Left</Text>
                  </Flex>
                </Flex>
              </Box>
            </GridItem>
            <GridItem className='project-box-wrapper'>
              <Box className='project-box' backgroundColor='#dbf6fd'>
                <Flex className='project-box-header'>
                  <Text className='project-box-text header' >December 10, 2020</Text>
                  <FiMoreVertical className='project-box-icon' size="2rem"/>
                </Flex>
                <Container class="project-box-content-header">
                  <Text className='box-content-header'>
                    SVG Animations
                  </Text>
                  <Text className='box-content-subheader'>
                    Prototyping
                  </Text>
                </Container>
                <Container className='box-progress-wrapper'>
                  <Text className='box-progress-header'>Progress</Text>
                  <Progress value={80} size='xs' colorScheme={progress3} backgroundColor='#fff' borderRadius='5px' m="8px 0"/>
                  <Text className='box-progress-percentage'>80%</Text>
                </Container>
                <Flex className='project-box-footer'>
                  <Flex className='participants'>
                    <BiUserCircle size='1.5rem'/>
                    <IoAddCircleOutline size='1.5rem'/>
                  </Flex>
                  <Flex>
                    <Text className='days-left' color='#096c86'>2 Days Left</Text>
                  </Flex>
                </Flex>
              </Box>
            </GridItem>
            <GridItem className='project-box-wrapper'>
              <Box className='project-box' backgroundColor='#ffd3e2'>
                <Flex className='project-box-header'>
                  <Text className='project-box-text header' >December 10, 2020</Text>
                  <FiMoreVertical className='project-box-icon' size="2rem"/>
                </Flex>
                <Container class="project-box-content-header">
                  <Text className='box-content-header'>
                    UI Development
                  </Text>
                  <Text className='box-content-subheader'>
                    Prototyping
                  </Text>
                </Container>
                <Container className='box-progress-wrapper'>
                  <Text className='box-progress-header'>Progress</Text>
                  <Progress value={20} size='xs' colorScheme={progress4} backgroundColor='#fff' borderRadius='5px' m="8px 0"/>
                  <Text className='box-progress-percentage'>20%</Text>
                </Container>
                <Flex className='project-box-footer'>
                  <Flex className='participants'>
                    <BiUserCircle size='1.5rem'/>
                    <IoAddCircleOutline size='1.5rem'/>
                  </Flex>
                  <Flex>
                    <Text className='days-left' color='#df3670'>2 Days Left</Text>
                  </Flex>
                </Flex>
              </Box>
            </GridItem>
            <GridItem className='project-box-wrapper'>
              <Box className='project-box' backgroundColor='#c8f7dc'>
                <Flex className='project-box-header'>
                  <Text className='project-box-text header' >December 10, 2020</Text>
                  <FiMoreVertical className='project-box-icon' size="2rem"/>
                </Flex>
                <Container class="project-box-content-header">
                  <Text className='box-content-header'>
                    Data Analysis
                  </Text>
                  <Text className='box-content-subheader'>
                    Prototyping
                  </Text>
                </Container>
                <Container className='box-progress-wrapper'>
                  <Text className='box-progress-header'>Progress</Text>
                  <Progress value={60} size='xs' colorScheme={progress5} backgroundColor='#fff' borderRadius='5px' m="8px 0"/>
                  <Text className='box-progress-percentage'>60%</Text>
                </Container>
                <Flex className='project-box-footer'>
                  <Flex className='participants'>
                    <BiUserCircle size='1.5rem'/>
                    <IoAddCircleOutline size='1.5rem'/>
                  </Flex>
                  <Flex>
                    <Text className='days-left' color='#34c471'>2 Days Left</Text>
                  </Flex>
                </Flex>
              </Box>
            </GridItem>
            <GridItem className='project-box-wrapper'>
              <Box className='project-box' backgroundColor='#d5deff'>
                <Flex className='project-box-header'>
                  <Text className='project-box-text header' >December 10, 2020</Text>
                  <FiMoreVertical className='project-box-icon' size="2rem"/>
                </Flex>
                <Container class="project-box-content-header">
                  <Text className='box-content-header'>
                    Web Designing
                  </Text>
                  <Text className='box-content-subheader'>
                    Prototyping
                  </Text>
                </Container>
                <Container className='box-progress-wrapper'>
                  <Text className='box-progress-header'>Progress</Text>
                  <Progress value={40} size='xs' colorScheme={progress6} backgroundColor='#fff' borderRadius='5px' m="8px 0"/>
                  <Text className='box-progress-percentage'>40%</Text>
                </Container>
                <Flex className='project-box-footer'>
                  <Flex className='participants'>
                    <BiUserCircle size='1.5rem'/>
                    <IoAddCircleOutline size='1.5rem'/>
                  </Flex>
                  <Flex>
                    <Text className='days-left' color='#4067f9'>2 Days Left</Text>
                  </Flex>
                </Flex>
              </Box>
            </GridItem>
            
          </Grid>
        </Box>
      </Flex>
    </div>


    
  )
}

export default Dashboard
