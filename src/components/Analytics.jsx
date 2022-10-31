import React from "react";
import "../styles/Analytics.scss";
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
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { RiMoonFill } from "react-icons/ri";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaUserCircle, FaList } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";
import useCollapse from "react-collapsed";

function Analytics() {
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#f3f6fd", "#111827");
  const projectBg = useColorModeValue("#fff", "#1f2937");
  const progress1 = useColorModeValue("orange", "orange");
  const progress2 = useColorModeValue("purple", "purple");
  const progress3 = useColorModeValue("teal", "teal");
  const progress4 = useColorModeValue("pink", "pink");
  const progress5 = useColorModeValue("green", "green");
  const progress6 = useColorModeValue("blue", "blue");

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  document.body.style.backgroundColor = bg;

  return (
    <div className="app">
      <Flex className="header" mt="1%" flexDirection="row">
        <Flex className="header-left">
          <Text className="header-name" ml="1rem" w="20%">
            [company name]
          </Text>
          <InputGroup
            className="search-wrapper"
            backgroundColor={projectBg}
            variant="unstyled"
          >
            <Input type="search" ml="1rem" placeholder="Click here to search" />
            <InputRightAddon children={<SearchIcon />} p="0 10px" />
          </InputGroup>
        </Flex>
        <Flex className="header-right">
          <RiMoonFill
            className="icons"
            id="moon-icon"
            onClick={toggleColorMode}
            size="1.5rem"
          />
          <FaUserCircle className="icons" id="user-icon" size="1.5rem" />
          <Text className="user-text">user</Text>
        </Flex>
      </Flex>
      <Flex className="app-content" flexDirection="row">
        <Box className="home-section">
          <Flex className="home-header">
            <Text className="header-text">Analytics</Text>
            <Text className="time">December, 28</Text>
          </Flex>
          <Grid className="project-boxes grid-view">
            <GridItem className="project-box-wrapper">
              <Box
                className={
                  isExpanded ? "project-box-expanded" : "project-box-collapsed"
                }
                backgroundColor="#fee4cb"
                {...getToggleProps()}
              >
                <Container className="project-box-content-header">
                  <Text className="box-content-header">Cost Table</Text>
                  {/* <Container {...getCollapseProps()}> */}
                  <Container
                    {...getCollapseProps()}
                    className="table-container"
                  >
                    <table>
                      <tr>
                        <th>Company Name</th>
                        <th>Service</th>
                        <th>Status</th>
                        <th>Execution Duration(sec.)</th>
                        <th>Execution Time</th>
                      </tr>
                      <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                      </tr>
                      <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                      </tr>
                    </table>
                  </Container>
                  {/* </Container> */}
                </Container>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Flex>
    </div>
  );
}

export default Analytics;
