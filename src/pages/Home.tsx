import { Box } from "@chakra-ui/react";
import { ResponsiveMasonry } from "react-responsive-masonry";
import Masonry from "react-responsive-masonry";
import { createArray } from "../utils/createArray";
import Card from "../components/Card";

const Home = () => {
  return (
    <Box maxW="1200px" m="20px auto">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1200: 3 }}>
        <Masonry>
          {createArray(9).map((id) => (
            <Box display="flex" justifyContent="center" key={id}>
              <Card />
            </Box>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </Box>
  );
};

export default Home;
