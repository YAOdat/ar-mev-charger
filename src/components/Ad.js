import { chakra, Stack, useColorModeValue, Container, Link, Box, Button } from '@chakra-ui/react';

const Index = () => {
  return (
    <Container maxW="5xl" p="6">
      <Banner />
    </Container>
  );
};

const Banner = () => {
  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      spacing={5}
      alignItems={{ base: 'flex-start', md: 'center' }}
      justifyContent="space-between"
      rounded="lg"
      boxShadow="md"
      bg={useColorModeValue('gray.100', 'gray.700')}
      p={{ base: 8, md: 16 }}
      dir='rtl'
    >

      <Box>
        <chakra.h2 fontSize="4xl" lineHeight={1.2} fontWeight="bold"> أجهزة فحص للسيارات الكهربائية</chakra.h2>
        <chakra.h3
          fontSize="2xl"
          lineHeight={1.2}
          fontWeight="bold"
          bgGradient="linear(to-l, #0ee948,#2563eb)"
          bgClip="text"
        >
يتوفر أجهزة فحص سيارات تسلا  ID4 و ID6        </chakra.h3>
      </Box>
      <Stack
        direction={{ base: 'column', sm: 'row' }}
        spacing={{ base: 0, sm: 3 }}
        w={{ base: '100%', sm: 'auto' }}
      >
        <Button
          as={Link}
          href="products/ev-scanners"
          color="white"
          variant="solid"
          size="lg"
          rounded="md"
          mb={{ base: 2, sm: 0 }}
          lineHeight={1}
          bgGradient="linear(to-l, #74db97,#38A169)"
          _hover={{ bgGradient: 'linear(to-l, #38A169,#74db97)' }}
        >
استكشف المنتجات       </Button>
        <Button
          size="lg"
          rounded="md"
          mb={{ base: 2, sm: 0 }}
          bg={useColorModeValue('gray.200', 'gray.600')}
          _hover={{ bg: useColorModeValue('gray.300', 'gray.500') }}
          lineHeight={1}
          onClick={() => {
            window.open('https://www.teslascanner.com', '_blank');
          }
          }
        >
          تعلم أكثر
        </Button>
      </Stack>
    </Stack>
  );
};

export default Index;