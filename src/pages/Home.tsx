import { Box, Button, HStack, Skeleton } from "@chakra-ui/react";
import { ResponsiveMasonry } from "react-responsive-masonry";
import Masonry from "react-responsive-masonry";
import Card from "../components/Card";
import { useQuery } from "@tanstack/react-query";
import { fetchProductsByPage } from "@/service/product.service";
import { useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Product } from "@/types";
import Banner from "@/components/Banner";
import { useSearchParams } from "react-router-dom";
import Map from "@/components/map/Map";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("pagina") || "1");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const { data, isLoading, error, isFetching } = useQuery({
    queryKey: ["catalogs", page],
    queryFn: () => fetchProductsByPage(page),
    refetchOnWindowFocus: false,
  });

  if (error) return <div>Error al cargar productos</div>;

  const products = data?.data || [];
  const skeletonCount = 9;

  const hasNext = Boolean(data?.links?.next);
  const hasPrev = Boolean(data?.links?.prev);

  const productsEntities = products?.map((product: Product) => ({
    id: product.entity.id,
    bussinessName: product.entity.bussiness_name,
    fantasyName: product.entity.fantasy_name,
    lat: product.entity.location_lat,
    lng: product.entity.location_lng,
  }));

  return (
    <Box
      maxW={{ base: "80%", md: "80%", lg: "800px", xl: "1000px" }}
      m="20px auto"
    >
      {isLoading || isFetching ? (
        <>
          <Box mb={6}>
            <Skeleton height="200px" borderRadius="xl" mb={4} />
            <Skeleton height="200px" borderRadius="xl" mb={6} />
          </Box>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 1200: 3 }}
          >
            <Masonry gutter="15px">
              {Array.from({ length: skeletonCount }).map((_, i) => (
                <Box key={i} display="flex" justifyContent="space-around">
                  <Card isLoading />
                </Box>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </>
      ) : (
        <>
          <Banner />
          {productsEntities.length > 0 && (
            <Box borderRadius="xl" overflow="hidden" my={6}>
              <Map markers={productsEntities} />
            </Box>
          )}
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 1200: 3 }}
          >
            <Masonry gutter="15px">
              {products.map((product) => (
                <Box
                  key={product.id}
                  display="flex"
                  justifyContent="space-around"
                >
                  <Card data={product} />
                </Box>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </>
      )}
      <HStack mt={6} spacing={4} justify="center" margin="70px 0px">
        <Button
          onClick={() => setSearchParams({ pagina: String(page - 1) })}
          isDisabled={!hasPrev || page === 1}
        >
          <FaArrowLeft />
        </Button>
        <Box>{page}</Box>
        <Button
          onClick={() => setSearchParams({ pagina: String(page + 1) })}
          isDisabled={!hasNext}
        >
          <FaArrowRight />
        </Button>
      </HStack>
    </Box>
  );
};

export default Home;
