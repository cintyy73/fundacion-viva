import { Box, Button, HStack } from "@chakra-ui/react";
import { ResponsiveMasonry } from "react-responsive-masonry";
import Masonry from "react-responsive-masonry";
import Card from "../components/Card";
import { useQuery } from "@tanstack/react-query";
import { fetchData, fetchProductsByPage } from "@/service/product.service";
import { useState } from "react";

const Home = () => {

  const [page, setPage] = useState(1);

  // const { data, isLoading, error } = useQuery({
  //   queryKey: ['catalogs'],
  //   queryFn: fetchData,
  // });

  const { data, isLoading, error, isFetching } = useQuery({
    queryKey: ['catalogs', page],
    queryFn: () => fetchProductsByPage(page),
    keepPreviousData: true,
  });

  if (error) return <div>Error al cargar productos</div>;

  const products = data?.data || [];
  const skeletonCount = 9;

  const hasNext = Boolean(data?.links?.next);
  const hasPrev = Boolean(data?.links?.prev);

  console.log('data', data);

  return (
    <Box maxW={{ base: "80%", md: "80%", lg: "800px", xl: "1000px" }} m="20px auto">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1200: 3 }}>
        <Masonry gutter="15px">
          {isLoading || isFetching
            ? Array.from({ length: skeletonCount }).map((_, i) => (
              <Box key={i} display="flex" justifyContent="space-around">
                <Card isLoading />
              </Box>
            ))
            : products.map((product) => (
              <Box key={product.id} display="flex" justifyContent="space-around">
                <Card data={product} />
              </Box>
            ))}
        </Masonry>
      </ResponsiveMasonry>
      
      
      <HStack mt={6} spacing={4} justify="center">
        <Button
          onClick={() => setPage((prev) => prev - 1)}
          isDisabled={!hasPrev || page === 1}
        >
          Página anterior
        </Button>
        <Box>Página {data?.meta?.current_page}</Box>
        <Button
          onClick={() => setPage((prev) => prev + 1)}
          isDisabled={!hasNext}
        >
          Página siguiente
        </Button>
      </HStack>


    </Box>
  );
};

export default Home;
