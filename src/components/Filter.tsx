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
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

export default function Filter() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Button leftIcon={<FaSearch />} my={6} onClick={onOpen}>
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
          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cerrar
            </Button>
            <Button leftIcon={<FaSearch />}>Buscar</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      
    </Box>
  );
}
