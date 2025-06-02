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
                <Link href="https://comprasocial.fonselp.org/" isExternal>
                    <Image height="40px" src="/logo.png" alt="Fonselp" />
                </Link>
                <Link
                    color="secondary.default"
                    href="https://comprasocial.fonselp.org/"
                    fontSize={{ base: 'xs', md: 'md' }}
                >
                    Sitio institucional
                </Link>
            </Box>
            <Box
                display={{ base: "none", customMd: "flex" }}
                alignItems='center'
                gap='20px'
                // display={{ base: "none", lg: "flex" }}
            >
                <Link href="https://comprasocial.fonselp.org/" isExternal>
                    <Image
                        height="40px"
                        src="/fonselp-logo.png"
                        alt="Fonselp"
                    />
                </Link>
                <Link
                    color="secondary.default"
                    href="https://fonselp.org/registro/"
                    fontSize={{ md: 'md' }}
                >
                    Registrate
                </Link>
                <Link
                    color="secondary.default"
                    href="https://app.fonselp.com/login"
                    fontSize={{ md: 'md' }}
                >
                    Iniciar Sesión
                </Link>
            </Box>
        </HStack>
    )
}

export default Header
