import React from 'react';
import { Box, Image, Text, Button, Link, Icon, useBreakpointValue } from '@chakra-ui/react';
import { products } from './data/productdata';
import { FaBackward } from 'react-icons/fa';

const Tesla = () => {
  const filteredProducts = products.filter((product) => product.portType === 'tesla' || product.portType2 === 'tesla');
  
  const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });

  return (
    <Box dir='rtl'>
      <title> شواحن سيارات تسلا الأمريكية - شاحن تسلا</title>
      <meta name='description' content='اطلب أفضل شاحن لسيارة تسلا الخاصة بك بأفضل سعر في الإمارات ودبي'/> 
      <Button colorScheme='green' m={2}>
        <Link href="/pick">
          <Icon as={FaBackward} m={1}/>
        </Link>
      </Button>

      {filteredProducts.map((product) => (
        <Box display="flex" flexDirection={flexDirection} alignItems="center" key={product.id} mb={5}>
          <Image src={product.imageUrl} alt={product.name} boxSize="300px" objectFit="cover" />
          <Box ml={4}>
            <Text fontWeight="bold">{product.name}</Text>
            <Text> {product.price} درهم</Text>
            {product.salePrice && (
              <Text as="s" color="gray.500" ml={2}>
                 {product.salePrice} درهم
              </Text>
            )}
            <Text>{product.description}</Text>
            <Link href="https://wa.me/971501679410" >
              <Button colorScheme="green" width="half" mt={3}>
                Order on WhatsApp
              </Button>
            </Link>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Tesla;
