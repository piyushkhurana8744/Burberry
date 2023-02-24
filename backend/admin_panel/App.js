import { Flex, Box, CloseButton} from "@chakra-ui/react";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./components/AllRoutes";
import { useEffect } from "react";

function App() {

  const setTitle = () => {
    document.title = "Home"
  }
  useEffect(() => {
    setTitle();
  }, [])
  return (
    <>
      <Flex>
        <Box w="15%" position="relative"  transition="1s ease" overflow="hidden" border="1px solid #e4e4e4" minHeight="100vh">
          <Sidebar />
        </Box>
        <Box flex="1" minHeight="100vh">
          <Navbar />
          <Box minHeight="89vh">
            <AllRoutes />
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export default App;
