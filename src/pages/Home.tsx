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
// console.log(data?.data)
  if (isLoading) return <div>Cargando productos...</div>;
  if (error) return <div>Error al cargar productos</div>;

  return (
    <Box maxW={{ base: "90%", md: "768px", lg: "992px", xl: "1600" }} m="20px auto">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1200: 3 }}>
        <Masonry gutter="15px">
          {data?.data.map((data) => (
            <Box display="flex" justifyContent="space-around" >
              <Card key={data.id} data={data} />
            </Box>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </Box>
  );
};

export default Home;
