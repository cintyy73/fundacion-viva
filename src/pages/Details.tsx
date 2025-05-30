import {
    Box,
    Card,
    CardBody,
    CardHeader,
    Container,
    Divider,
    Heading,
    HStack,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoLocationSharp } from 'react-icons/io5'
import { LuHeartHandshake } from 'react-icons/lu'

const Details = () => {
    return (
        <Container
            display='flex'
            flexDirection='column'
            maxWidth='1200px'
            gap='20px'
            padding='20px'
        >
            <Card boxShadow='0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)' >
                <CardHeader>
                    <Heading fontSize='xl' color="secondary.default">FUNDACIÓN VIVA</Heading>
                </CardHeader>
            </Card>
            <Card boxShadow='0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)' >
                <CardHeader>
                    <Heading fontSize='xl' color="secondary.default">Descripción</Heading>
                    <Divider orientation='horizontal' marginTop='10px' />
                </CardHeader>
                <CardBody>
                    <Box>
                        <Heading fontSize='xl' color='primary.default'>
                            Sobre nosotros:
                        </Heading>
                    </Box>
                    <Text pt='2' fontSize='sm'>
                        La Fundación Viva, establecida en 2008 por la Junta de Accionistas de la empresa Nuevatel PCS de Bolivia (VIVA), refleja el compromiso de la compañía con la Responsabilidad Social Empresarial. Está legalmente establecida como Fundación Estás Vivo, pero es más conocida como Fundación VIVA y su alcance es nacional.
                        La Telefónica VIVA ha permitido el funcionamiento de la Fundación Viva durante estos 16 años, aportando un presupuesto anual para financiar su trabajo en áreas como la educación, tecnología, medio ambiente, igualdad de género, lucha contra la violencia y apoyo cultural en Bolivia.
                    </Text>
                </CardBody>
            </Card>
            <Card boxShadow='0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'>
                <CardHeader>
                    <HStack spacing={2} align='center' justify='space-between'>
                        <Heading fontSize='xl' color="secondary.default" >Fundaviva</Heading>
                        <Box display='flex' gap='10px' color="primary.default">
                            <FaFacebookF fontSize='2rem' color="primary.default" />
                            <FaInstagram fontSize='2rem' color="primary.default" />
                            <FaXTwitter fontSize='2rem' color="primary.default" />
                            <FaLinkedinIn fontSize='2rem' color="primary.default" />
                            <FaYoutube fontSize='2rem' color="primary.default" />
                        </Box>
                    </HStack>
                    <Divider orientation='horizontal' marginTop='10px' />
                </CardHeader>
                <CardBody>
                    <Text pt='2' fontSize='sm' display='flex' alignItems='center' gap='15px'>
                        <IoLocationSharp fontSize='2rem' color="primary.default" /> Bolivia
                    </Text>
                    <Text pt='2' fontSize='sm' display='flex' alignItems='center' gap='15px' >
                        <LuHeartHandshake fontSize='2rem' color="primary.default" /> Tipo de organización: Organización de la Sociedad Civil / ONG
                    </Text>
                </CardBody>
            </Card>
            <Card boxShadow='0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'>
                <CardHeader>
                    <Heading fontSize='xl' color="secondary.default" >Objetivos de desarrollo sustentable</Heading>
                    <Divider orientation='horizontal' marginTop='10px' />
                </CardHeader>
                <CardBody>
                    <Stack flexFlow='wrap' >
                        <Image
                            boxSize='100px'
                            width='48px'
                            height='48px'
                            borderRadius='10px'
                            objectFit='cover'
                            src='/1.png'
                            alt='Desarrollo sostenible'
                        />
                        <Image
                            boxSize='100px'
                            width='48px'
                            height='48px'
                            borderRadius='10px'
                            objectFit='cover'
                            src='/2.png'
                            alt='Desarrollo sostenible'
                        />
                        <Image
                            boxSize='100px'
                            width='48px'
                            height='48px'
                            borderRadius='10px'
                            objectFit='cover'
                            src='/3.png'
                            alt='Desarrollo sostenible'
                        />
                        <Image
                            boxSize='100px'
                            width='48px'
                            height='48px'
                            borderRadius='10px'
                            objectFit='cover'
                            src='/4.png'
                            alt='Desarrollo sostenible'
                        />
                        <Image
                            boxSize='100px'
                            width='48px'
                            height='48px'
                            borderRadius='10px'
                            objectFit='cover'
                            src='/6.png'
                            alt='Desarrollo sostenible'
                        />
                        <Image
                            boxSize='100px'
                            width='48px'
                            height='48px'
                            borderRadius='10px'
                            objectFit='cover'
                            src='/7.png'
                            alt='Desarrollo sostenible'
                        />
                    </Stack>
                </CardBody>
            </Card>
        </Container>
    )
}

export default Details
