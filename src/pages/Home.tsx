import { Box, Button, HStack, Skeleton, Text } from "@chakra-ui/react";
import { ResponsiveMasonry } from "react-responsive-masonry";
import Masonry from "react-responsive-masonry";
import Card from "../components/Card";
import { useQuery } from "@tanstack/react-query";
import { fetchProductsByParams } from "@/service/product.service";
import { useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Banner from "@/components/Banner";
import { useSearchParams } from "react-router-dom";
import Map from "@/components/map/Map";
import Filter from "@/components/Filter";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const paramsObj = Object.fromEntries(searchParams.entries());
  const page = parseInt(paramsObj["pagina"] || "1");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page, searchParams.toString()]);

  const { data, isLoading, error, isFetching } = useQuery({
    queryKey: ["catalogs", paramsObj],
    queryFn: () => fetchProductsByParams(paramsObj),
    refetchOnWindowFocus: false,
  });

  if (error) return <Box>Error al cargar productos</Box>;

  const products = data?.data || [];
  const hasProducts = products && products.length > 0;

  const hasNext = Boolean(data?.links?.next);
  const hasPrev = Boolean(data?.links?.prev);

  const productsEntities = products
    .filter((p: any) => p.entity?.location_lat && p.entity?.location_lng)
    .map((product: any) => ({
      id: product.entity.id,
      bussinessName: product.entity.bussiness_name,
      fantasyName: product.entity.fantasy_name,
      lat: product.entity.location_lat,
      lng: product.entity.location_lng,
    }));

  const goToPage = (newPage: number) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("pagina", String(newPage));
    setSearchParams(newParams);
  };

  const hasSearchParams = Object.keys(paramsObj).length > 0;
  const skeletonCount = 9;

  return (
    <Box
      maxW={{ base: "80%", md: "80%", lg: "800px", xl: "1000px" }}
      m="20px auto"
    >
      {isLoading || isFetching ? (
        <>
          <Box mb={6}>
            <Skeleton height="200px" borderRadius="xl" />
          </Box>
          <Box mb={6}>
            <Skeleton height="200px" borderRadius="xl" />
          </Box>
        </>
      ) : (
        <>
          <Banner />
          <Box borderRadius="xl" overflow="hidden" my={6}>
            <Map markers={productsEntities} />
          </Box>
        </>
      )}

      <Box display="flex" justifyContent="right" mb={6}>
        {isLoading || isFetching ? (
          <HStack spacing={4}>
            <Skeleton height="40px" width="250px" borderRadius="md" />
            {hasSearchParams && (
              <Skeleton height="40px" width="250px" borderRadius="md" />
            )}
          </HStack>
        ) : (
          <Filter />
        )}
      </Box>

      {isLoading || isFetching ? (
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
      ) : hasProducts ? (
        <>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 1200: 3 }}
          >
            <Masonry gutter="15px">
              {products.map((product: any) => (
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

          <HStack mt={6} spacing={4} justify="center" margin="70px 0px">
            <Button
              onClick={() => goToPage(page - 1)}
              isDisabled={!hasPrev || page <= 1}
            >
              <FaArrowLeft />
            </Button>
            <Box>{page}</Box>
            <Button onClick={() => goToPage(page + 1)} isDisabled={!hasNext}>
              <FaArrowRight />
            </Button>
          </HStack>
        </>
      ) : (
        <Text textAlign="center" mt={10}>
          No se encontraron productos para mostrar
        </Text>
      )}
    </Box>
  );
};

export default Home;
