import { Box } from "@chakra-ui/react";
import { ResponsiveMasonry } from "react-responsive-masonry";
import Masonry from "react-responsive-masonry";
import Card from "../components/Card";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/service/product.service";

const Home = () => {

const { data, isLoading, error } = useQuery({
    queryKey: ['catalogs'],
    queryFn: fetchData,
  });

  if (isLoading) return <div>Cargando productos...</div>;
  if (error) return <div>Error al cargar productos</div>;

  return (
    <Box maxW={{ base: "80%", md: "80%", lg: "800px", xl: "1000px"}} m="20px auto">
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
