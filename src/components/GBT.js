import React from 'react';
import { Box, Image, Text, Button, Link, Icon, useBreakpointValue } from '@chakra-ui/react';
import { products } from './data/productdata';
import { FaBackward } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const GBT = () => {
  const filteredProducts = products.filter((product) => product.portType === 'gbt' || product.portType2 === 'gbt');
  
  const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });

  return (
    <Box dir='rtl'>
      <Helmet>
      <title>شواحن سيارات فولكس واجن Volkswagen ID4 and ID6</title>
      <meta name='description' content='اطلب أفضل شاحن لسيارة فولكس واجن ID4, ID6 الخاصة بك بأفضل سعر في الإمارات ودبي'/>
      <meta name='keywords' content='شاحن سيارة ID4, شاحن سيارة كهربائية, شاحن سيارة, شاحن شانجان, شاحن changan'/>
      <link rel='canonical' href='https://ar.mevcharger.com/products/gbt' />

      </Helmet>
      <Button colorScheme='green' m={2}>
        <Link href="/pick">
          <Icon as={FaBackward} m={1}/>
        </Link>
      </Button>

      {filteredProducts.map((product) => (
        <Box display="flex" flexDirection={flexDirection} alignItems="center" key={product.id} mb={5}>
          <Link to={`./products/${product.id}`}> 
          <Image src={product.imageUrl} alt={product.name} boxSize="300px" objectFit="cover" ml={10} />
          </Link>
          <Box ml={4}>
            <Text fontWeight="bold">{product.name}</Text>
            <Text> {product.price} درهم</Text>
            {product.salePrice && (
              <Text as="s" color="gray.500" ml={2}>
                 {product.salePrice} درهم
              </Text>
            )}
            <Text>{product.description}</Text>
            <Link href="https://wa.me/971501679410">
              <Button colorScheme="green" width="half" mt={2}>
اطلب عبر واتساب              </Button>
            </Link>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default GBT;
