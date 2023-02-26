import { Flex, Box} from "@chakra-ui/react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import AdminRoutes from "../AdminRoutes";

function AdminHomePage() {

  return (
    <>
      <Flex>
        <Box w="15%" position="relative"  transition="1s ease" overflow="hidden" border="1px solid #e4e4e4" minHeight="100vh">
          <Sidebar />
        </Box>
        <Box flex="1" minHeight="100vh">
          <Navbar />
          <Box minHeight="89vh">
            <AdminRoutes />
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export default AdminHomePage;
