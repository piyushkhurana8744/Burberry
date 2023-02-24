import React from "react";
import { FaUserAlt } from "react-icons/fa";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Text,
  Icon,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaUserPlus } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { userLogout } from "../redux/AuthReducer/action";
const Menubar = ({ item1, item2 }) => {
  const { name, token } = useSelector((store) => store.auth);
  console.log(token, name);
  const dispatch = useDispatch();
  return (
    <div>
      <Menu>
        <MenuButton as={Button}>
          <Link to="/login">
            {name ? (
              <Text fontWeight={"500"} fontSize="20px">
                {name}
              </Text>
            ) : (
              <Icon as={FaUserAlt} fontSize={"20px"} fontWeight="500" />
            )}
          </Link>
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link to="/signup">
              <Flex gap="20px" alignItems={"center"}>
                <Icon as={FaUserPlus} fontSize={"20px"} fontWeight="500" />
                <Text fontSize={"20px"} fontWeight="500">
                  Signup
                </Text>
              </Flex>
            </Link>
          </MenuItem>
          <MenuItem>
            {token ? (
              <Flex
                gap="20px"
                alignItems={"center"}
                onClick={() => dispatch(userLogout())}
              >
                <Icon as={FaUserPlus} fontSize={"20px"} fontWeight="500" />
                <Text fontSize={"20px"} fontWeight="500">
                  Logout
                </Text>
              </Flex>
            ) : (
              <Link to="/login">
                <Flex gap="20px" alignItems={"center"}>
                  <Icon as={FaUserPlus} fontSize={"20px"} fontWeight="500" />
                  <Text fontSize={"20px"} fontWeight="500">
                    Login
                  </Text>
                </Flex>
              </Link>
            )}
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default Menubar;
