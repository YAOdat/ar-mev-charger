import React from 'react';
import { Box, Image, Text, Button, Link, Icon } from '@chakra-ui/react';
import { products } from './data/productdata';
import { FaBackward } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const Adapters = () => {
  const filteredProducts = products.filter((product) => product.function === 'adapter');

  return (
    <Box dir='rtl'>
      <Helmet> 
      <title>ادابتر السيارات الكهربائية - محولات سيارة كهربائية</title>
      <meta name='keywords' content='ادابتر سيارة كهربائية، ادابترات السيارات الكهربائية، ادابتر تسلا، ادابتر التسلا، ادابتر id4, ادابتر id6,'/>
      </Helmet>
      <Button colorScheme="green" m={2}>
        <Link href="/pick">
          <Icon as={FaBackward} m={1} />
        </Link>
      </Button>

      {filteredProducts.map((product) => (
        <Box m={4} display="flex" flexDirection={['column', 'row']} alignItems={['start', 'center']} key={product.id} mb={5}>
          <Link href={`/products/${product.id}`}>
          <Image ml={3} src={product.imageSource} alt={product.name} boxSize="300px" objectFit="cover" />
          </Link>
          <Box ml={[0, 4]} mt={[4, 0]}>
            <Text fontWeight="bold">{product.name}</Text>
            <Text>  {product.price} درهم</Text>
            {product.salePrice && (
              <Text as="s" color="gray.500" ml={2}>
                درهم {product.salePrice} 
              </Text>
            )}
            <Text>{product.description}</Text>
            <Link href="https://wa.me/971501679410">
              <Button m={3} colorScheme="green" width="half">
اطلب عبر واتساب              </Button>
            </Link>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Adapters;
