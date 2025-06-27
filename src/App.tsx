import Header from "./components/Header"
import Footer from "./components/Footer"
import Routing from "./routes/Routing"
import { Box, Flex } from "@chakra-ui/react"

function App() {

  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Box flex="1">
        <Routing />
      </Box>
      <Footer />
    </Flex>
  )
}

export default App
