import { Box, Image } from "@chakra-ui/react";

const images = [
  "assets/banner.jpg",
];

const Banner = () => {
  return (
    <Box
      overflow="hidden"
      w="full"
      h={{ base: "180px", md: "200px" }}
    >
      <Box
        flex="none"
        w="full"
        h="full"
        borderRadius="10px"
      >
        <Image
          src={images[0]}
          alt="banner"
          objectFit="cover"
          w="100%"
          h="100%"
        />
      </Box>
    </Box>
  );
};

export default Banner;