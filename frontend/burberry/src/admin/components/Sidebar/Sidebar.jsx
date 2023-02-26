import React from 'react';
import Styles from "./Sidebar.module.css"
import {
    Box,
    CloseButton,
    Flex,
    Icon,
    useColorModeValue,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiPackage,
    FiUsers,
    FiTruck,
    FiPlus,
    FiPower,
    FiHeadphones,
} from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const { onClose } = useDisclosure();
    const LinkItems = [
        { name: 'Home', path: "/", icon: FiHome },
        { name: 'Trending', path: "/trending", icon: FiTrendingUp },
        { name: 'Explore', path: "/explore", icon: FiCompass },
        { name: 'Orders', path: "/orders", icon: FiTruck },
        { name: 'Products', path: "/products", icon: FiPackage },
        { name: 'Customers', path: "/customers", icon: FiUsers },
        { name: 'Favourites', path: "/favorites", icon: FiStar },
        { name: 'Add Product', path: "/addproduct", icon: FiPlus },
        { name: 'Support', path: "/support", icon: FiHeadphones },
        { name: 'Settings', path: "/settings", icon: FiSettings },
        { name: 'Logout', path: "/logout", icon: FiPower },
    ];
    return (
        <>
            <SidebarContent
                onClose={() => onClose}
                display={{ base: 'none', md: 'block' }}
                LinkItems={LinkItems}
            />
        </>
    )
}

export default Sidebar

const SidebarContent = ({ onClose, LinkItems, ...rest }) => {

    return (
        <Box
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{base:"full", md:60}}
            pos="fixed"
            h="full"
            overflow="hidden"
            whiteSpace="nowrap"
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text  fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                  BurBerry
                </Text>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onclose} />
            </Flex>
            {LinkItems.map((link) => (
                <NavItem key={link.name} path={link.path} icon={link.icon}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );
};


const NavItem = ({ path, icon, children, ...rest }) => {
    return (
        <NavLink to={path} className={({ isActive }) => isActive ? Styles.active_link : ""} >
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: '#dbae52',
                    color: 'white',
                }}
                {...rest}>
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </NavLink>
    );
};
