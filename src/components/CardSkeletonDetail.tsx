import { 
    Box, 
    Button, 
    Card, 
    CardBody, 
    CardHeader, 
    Container, 
    Divider, 
    HStack, 
    Skeleton, 
    SkeletonText, 
    Stack 
} from "@chakra-ui/react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function CardSkeletonDetail() {

    const navigate = useNavigate();

    return (
        <Container
            display='flex'
            flexDirection='column'
            maxW={{ base: "80%", md: "80%", lg: "800px", xl: "1000px" }}
            gap='20px'
            padding='0px'
            marginBottom='40px'
        >
            <Box margin='20px 0'>
                <Button onClick={() => navigate(-1)} bg='primary.default' size='xs' gap='10px'>
                    <FaLongArrowAltLeft /> Volver
                </Button>
            </Box>
            <Card boxShadow='0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)' >
                <CardHeader>
                    <Skeleton height='30px' />
                </CardHeader>
            </Card>
            <Card boxShadow='0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)' >
                <CardHeader>
                    <Skeleton height='20px' />
                    <Divider orientation='horizontal' marginTop='10px' />
                </CardHeader>
                <CardBody>
                    <Box>
                        <Skeleton height='15px' width='200px' />
                    </Box>
                    <Box marginTop='10px'>
                        <SkeletonText noOfLines={3} spacing="3" />
                    </Box>
                </CardBody>
            </Card>
            <Card boxShadow='0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'>
                <CardHeader>
                    <HStack spacing={2} align='center' justify='space-between'>
                        <Skeleton height='15px' width='200px' />
                        <Box>
                            <Skeleton height='15px' width='200px' />
                        </Box>
                    </HStack>
                    <Divider orientation='horizontal' marginTop='10px' />
                </CardHeader>
                <CardBody>
                    <Box>
                        <Skeleton height='15px' width='300px' />
                    </Box>
                    <Box>
                        <Skeleton height='15px' width='300px' />
                    </Box>
                </CardBody>
            </Card>
            <Card boxShadow='0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'>
                <CardHeader>
                    <Skeleton height='15px' width='200px' />
                    <Divider orientation='horizontal' marginTop='10px' />
                </CardHeader>
                <CardBody>
                    <Stack>
                        <Skeleton height='15px' width='300px' />
                    </Stack>
                </CardBody>
            </Card>
        </Container>
    )
}
