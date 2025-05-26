import { Box, HStack, Image, Link } from "@chakra-ui/react"


const Header = () => {
    return (
        <HStack
            justifyContent={{ base: "center", md: "space-around" }}
            height="125px"
            gap="0"
            boxShadow='rgba(0, 0, 0, 0.1) 0px 4px 4px'
        >
            <Box
                display='flex'
                alignItems='center'
                gap='20px'
            >
                <Image height="40px" src="./public/logo.png" alt="Fundación Viva" />
                <Link
                    color="accent.500"
                    href="#"
                    fontSize={{base: 'xs', md: 'md'}}
                >
                    Sitio institucional
                </Link>
            </Box>
            <Box
                display='flex'
                alignItems='center'
                gap='20px'
            >
                <Image
                    height="40px"
                    src="./public/fonselp-logo.png"
                    alt="Fonselp"
                    display={{ base: "none", sm: "block" }}
                />
                <Link
                    color="accent.500"
                    href="#"
                    display={{ base: "none", sm: "inline" }}
                    fontSize={{md: 'md'}}
                >
                    Registrate
                </Link>
                <Link
                    color="accent.500"
                    href="#"
                    display={{ base: "none", sm: "inline" }}
                    fontSize={{md: 'md'}}
                >
                    Iniciar Sesión
                </Link>
            </Box>
        </HStack>
    )
}

export default Header
