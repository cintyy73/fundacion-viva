import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Box,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'

export default function Filter() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box>
      <Button leftIcon={<FaSearch />} my={6} onClick={onOpen}>
        Búsqueda avanzada
      </Button>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Búsqueda avanzada</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
