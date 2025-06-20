import { Box, Container, HStack, Image, Link } from "@chakra-ui/react"


const Header = () => {
    return (
        <>
            <HStack
                background='primary.default'
                height='20px'
                width='100%'
            ></HStack>
            <HStack
                height="97px"
                boxShadow='rgba(0, 0, 0, 0.1) 0px 4px 4px'
            >
                <Container
                    display='flex'
                    justifyContent='space-between'
                    padding='0'
                    maxW={{ base: "80%", md: "80%", lg: "800px", xl: "1000px" }}
                >
                    <Box
                        w={{ base: "100%", lg: "auto" }}
                        display='flex'
                        alignItems='center'
                        justifyContent={{ base: 'space-between' }}
                        gap='20px'
                    >
                        <Link href="https://comprasocial.fonselp.org/" isExternal>
                            <Image height="40px" src="/logo.png" alt="Fonselp" />
                        </Link>
                        <Link
                            color="secondary.default"
                            href="https://www.fundacion-viva.org/" isExternal
                            fontSize={{ base: 'xs', md: 'md' }}
                        >
                            Sitio institucional
                        </Link>
                    </Box>
                    <Box
                        display={{ base: "none", lg: "flex" }}
                        alignItems='center'
                        gap='20px'
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
                            href="https://fonselp.org/registro/" isExternal
                            fontSize={{ md: 'md' }}
                        >
                            Registrate
                        </Link>
                        <Link
                            color="secondary.default"
                            href="https://app.fonselp.com/login" isExternal
                            fontSize={{ md: 'md' }}
                        >
                            Iniciar Sesión
                        </Link>
                    </Box>
                </Container>
            </HStack>
        </>
    )
}

export default Header
