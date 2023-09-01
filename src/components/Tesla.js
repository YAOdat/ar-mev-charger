import React from 'react';
import { Box, Image, Text, Button, Link, Icon, useBreakpointValue } from '@chakra-ui/react';
import { products } from './data/productdata';
import { FaBackward } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const Tesla = () => {
  const filteredProducts = products.filter((product) => product.portType === 'tesla' || product.portType2 === 'tesla');
  
  const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });

  return (
    <Box dir='rtl'>
      <Helmet> 
      <title> شواحن سيارات تسلا الأمريكية - شاحن تسلا</title>
      <meta name='description' content='اطلب أفضل شاحن لسيارة تسلا الخاصة بك بأفضل سعر في الإمارات ودبي'/> 
      <meta name='keywords' content='شاحن سيارة تسلا, شاحن سيارة كهربائية, شاحن سيارة, شاحن تسلا, شاحن تسلا الامريكية'/>
      <link rel='canonical' href='https://ar.mevcharger.com/products/tesla_charger' />
      </Helmet>
      <Button colorScheme='green' m={2}>
        <Link href="/pick">
          <Icon as={FaBackward} m={1}/>
        </Link>
      </Button>
      <Text my={2}>
        يتوفر شواحن سيارات كهربائية لمختلف موديلات تسلا. يتوفر شاحن تسلا موديل Y, شاحن تسلا موديل X, وتسلا موديل 3. اطلب شاحن تسلا الخاص بك الآن بأفضل سعر في الإمارات ودبي.
      </Text>
      <Text>
        يوجد شواحن تسلا الأمريكية، وشواحن تسلا الخليجية. يتوفر خدمة توصيل لجميع الإمارات بما في ذلك دبي، الشارقة، أبو ظبي، عجمان، رأس الخيمة، الفجيرة. اطلب شاحن تسلا الخاص بك الآن.
      </Text>
      {filteredProducts.map((product) => (
        <Box display="flex" flexDirection={flexDirection} alignItems="center" key={product.id} mb={5}>
          <Image src={product.imageSource} alt={product.name} boxSize="300px" objectFit="cover" />
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
