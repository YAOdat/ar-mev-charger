import React from 'react';
import { Box, Image, Text, Button, Link, Icon, useBreakpointValue } from '@chakra-ui/react';
import { products } from './data/productdata';
import { FaBackward } from 'react-icons/fa';

const Type2 = () => {
  const filteredProducts = products.filter((product) => product.portType === 'type2');
  
  const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });

  return (
    <Box dir='rtl'>
      <Button colorScheme='green' m={2}>
        <Link href="/pick">
          <Icon as={FaBackward} m={1}/>
        </Link>
      </Button>

      {filteredProducts.map((product) => (
        <Box display="flex" flexDirection={flexDirection} alignItems="center" key={product.id} mb={5}>
           <Link to={`/product/${product.id}`}>
          <Image src={product.imageSource} alt={product.name} boxSize="300px" objectFit="cover" ml={5}/>
          </Link>
          <Box ml={4}>
            <Text fontWeight="bold" mr={3}>{product.name}</Text>
            <Text mr={3}> {product.price} درهم</Text>
            {product.salePrice && (
              <Text as="s" color="gray.500" mx={2} mr={3}>
                 {product.salePrice} درهم
              </Text>
            )}
            <Text mr={3}>{product.description}</Text>
            <Link href="https://wa.me/971501679410">
              <Button colorScheme="green" width="half" mt={2} ml={2}>
                اطلب عبر الواتساب
              </Button>
            </Link>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Type2;
