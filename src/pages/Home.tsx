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

  if (error) return <div>Error al cargar productos</div>;

  const skeletonCount = 9;

  return (
    <Box maxW={{ base: "80%", md: "80%", lg: "800px", xl: "1000px" }} m="20px auto">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1200: 3 }}>
        <Masonry gutter="15px">
          {isLoading
            ? Array.from({ length: skeletonCount }).map((_, i) => (
                <Box key={i} display="flex" justifyContent="space-around">
                  <Card isLoading />
                </Box>
              ))
            : data?.data.map((product) => (
                <Box key={product.id} display="flex" justifyContent="space-around">
                  <Card data={product} />
                </Box>
              ))}
        </Masonry>
      </ResponsiveMasonry>
    </Box>
  );
};

export default Home;
