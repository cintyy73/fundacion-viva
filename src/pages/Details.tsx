import {
    Box,
    Card,
    CardBody,
    CardHeader,
    Divider,
    Heading,
    HStack,
    Image,
    Stack,
    Text,
    VStack
} from '@chakra-ui/react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoLocationSharp } from 'react-icons/io5'
import { LuHeartHandshake } from 'react-icons/lu'

const Details = () => {
    return (
        <VStack>
            <Card>
                <CardHeader>
                    <Heading size='md'>FUNDACIÓN VIVA</Heading>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size='md'>Descripción</Heading>
                    <Divider orientation='horizontal' marginTop='10px' />
                </CardHeader>
                <CardBody>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Sobre nosotros:
                        </Heading>
                    </Box>
                    <Text pt='2' fontSize='sm'>
                        La Fundación Viva, establecida en 2008 por la Junta de Accionistas de la empresa Nuevatel PCS de Bolivia (VIVA), refleja el compromiso de la compañía con la Responsabilidad Social Empresarial. Está legalmente establecida como Fundación Estás Vivo, pero es más conocida como Fundación VIVA y su alcance es nacional.
                        La Telefónica VIVA ha permitido el funcionamiento de la Fundación Viva durante estos 16 años, aportando un presupuesto anual para financiar su trabajo en áreas como la educación, tecnología, medio ambiente, igualdad de género, lucha contra la violencia y apoyo cultural en Bolivia.
                    </Text>
                </CardBody>
            </Card>\
            <Card>
                <CardHeader>
                    <HStack spacing={2} align='center' justify='space-between'>
                        <Heading size='md'>Fundaviva</Heading>
                        <Box display='flex' gap='10px'>
                            <FaFacebookF />
                            <FaInstagram />
                            <FaXTwitter />
                            <FaLinkedinIn />
                            <FaYoutube />
                        </Box>
                    </HStack>
                    <Divider orientation='horizontal' marginTop='10px' />
                </CardHeader>
                <CardBody>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Sobre nosotros:
                        </Heading>
                    </Box>
                    <Text pt='2' fontSize='sm' display='flex' alignItems='center'>
                        <IoLocationSharp /> Bolivia
                    </Text>
                    <Text pt='2' fontSize='sm' display='flex' alignItems='center'>
                        <LuHeartHandshake /> Tipo de organización: Organización de la Sociedad Civil / ONG
                    </Text>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size='md'>Objetivos de desarrollo sustentable</Heading>
                    <Divider orientation='horizontal' marginTop='10px' />
                </CardHeader>
                <CardBody>
                    <Stack direction='row'>
                        <Image
                            boxSize='100px'
                            borderRadius='10px'
                            objectFit='cover'
                            src='public/1.png'
                            alt='Desarrollo sostenible'
                        />
                        <Image
                            boxSize='100px'
                            borderRadius='10px'
                            objectFit='cover'
                            src='public/2.png'
                            alt='Desarrollo sostenible'
                        />
                        <Image
                            boxSize='100px'
                            borderRadius='10px'
                            objectFit='cover'
                            src='public/3.png'
                            alt='Desarrollo sostenible'
                        />
                        <Image
                            boxSize='100px'
                            borderRadius='10px'
                            objectFit='cover'
                            src='public/4.png'
                            alt='Desarrollo sostenible'
                        />
                        <Image
                            boxSize='100px'
                            borderRadius='10px'
                            objectFit='cover'
                            src='public/6.png'
                            alt='Desarrollo sostenible'
                        />
                        <Image
                            boxSize='100px'
                            borderRadius='10px'
                            objectFit='cover'
                            src='public/7.png'
                            alt='Desarrollo sostenible'
                        />
                    </Stack>
                </CardBody>
            </Card>
        </VStack>
    )
}

export default Details
