import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Box,
  Button,
  useDisclosure,
  DrawerCloseButton,
  FormLabel,
  Select,
  Input,
  DrawerFooter,
  Text,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Filter() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w="100%" display='flex' justifyContent='end'>
      <Button
        rightIcon={<FaSearch />}
        onClick={onOpen}
        w={{ base: "100%", md: "250px" }}
      >
        Búsqueda avanzada
      </Button>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Búsqueda avanzada</DrawerHeader>
          <DrawerBody>
            <Box>
              <FormLabel htmlFor="owner">Select Owner</FormLabel>
              <Select id="owner" defaultValue="segun">
                <option value="segun">Segun Adebayo</option>
                <option value="kola">Kola Tioluwani</option>
              </Select>
            </Box>
            <Box>
              <FormLabel htmlFor="owner">Select Owner</FormLabel>
              <Select id="owner" defaultValue="segun">
                <option value="segun">Segun Adebayo</option>
                <option value="kola">Kola Tioluwani</option>
              </Select>
            </Box>
            <Box>
              <FormLabel htmlFor="owner">Select Owner</FormLabel>
              <Input placeholder="Type here..." />
            </Box>
            <Box>
              <FormLabel htmlFor="owner">Select Owner</FormLabel>
              <Input placeholder="Type here..." />
            </Box>
          </DrawerBody>
          <DrawerFooter justifyContent='space-between'>
            <Button
              variant='outline'
              mr={3}
              onClick={onClose}
              w='50%'
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap="2"
            >
              <Text>Cerrar</Text>
              <IoMdClose />

            </Button>
            <Button w='50%' rightIcon={<FaSearch />}>Buscar</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
