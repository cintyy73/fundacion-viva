import { Box } from "@chakra-ui/react";
import { ResponsiveMasonry } from "react-responsive-masonry";
import Masonry from "react-responsive-masonry";
import { createArray } from "../utils/createArray";
import Card from "../components/Card";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/service/product.service";

const Home = () => {

const { data, isLoading, error } = useQuery({
    queryKey: ['catalogs'],
    queryFn: fetchData,
  });
console.log(data)
  if (isLoading) return <div>Cargando productos...</div>;
  if (error) return <div>Error al cargar productos</div>;

  return (
    <Box maxW={{ base: "90%", md: "600px", xl: "900px" }} m="20px auto">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1200: 3 }}>
        <Masonry gutter="15px">
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
