import React from 'react';
import { Box, Image, Text, Button, Link, Icon, useBreakpointValue, Flex } from '@chakra-ui/react';
import { products } from './data/productdata';
import { FaBackward } from 'react-icons/fa';

const EVScanner = () => {
  const filteredProducts = products.filter((product) => product.function === 'scanner');
  
  const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });

  return (
    <Box dir='rtl'>
      <title>أفضل أجهزة فحص للسيارات الكهربائية</title>
      <meta name="description" content="يتوفر أجهزة فحص سيارات كهربائية لمختلف أنواع السيارات. أجهزة فحص سيارات فوكس واجن، أجهزة فحص سيارات تسلا الكهربائية"/>
      <Button colorScheme='green' m={2}>
        <Link href="/home">
          <Icon as={FaBackward} m={1}/>
        </Link>
      </Button>

      {filteredProducts.map((product) => (
        <Box display="flex" flexDirection={flexDirection} alignItems="center" key={product.id} mb={5}>
            <Link href={`/products/${product.id}`}> 
          <Image src={product.imageSource} alt={product.name} boxSize="300px" objectFit="cover" />
          </Link>
          <Box ml={4}>
            <Text fontWeight="bold">{product.name}</Text>
            {product.salePrice ? (
          <Flex>
            <Text as="s">{`${product.price} درهم`}</Text>
            <Text pr={4}>{`${product.salePrice} درهمًا`}</Text>
          </Flex>
        ) : (
          `${product.price} درهمًا`
        )}
           
            <Text>{product.description}</Text>
            <Link href="https://wa.me/971501679410">
              <Button colorScheme="green" width="half">
                اطلب عبر الواتساب
              </Button>
            </Link>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default EVScanner;
