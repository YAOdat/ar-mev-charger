import React, { useState } from 'react';
import { Box, Select, List, ListItem, Image, Text, Button, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const ProductFilter = ({ products, onFilterChange }) => {
  const [selectedPortType, setSelectedPortType] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handlePortTypeChange = (event) => {
    const { value } = event.target;
    setSelectedPortType(value);

    if (value === '') {
      // If no port type is selected, show all products
      setFilteredProducts(products);
    } else {
      // Filter products based on selected port type
      const filtered = products.filter(
        (product) =>
          product.portType === value ||
          product.portType2 === value ||
          product.portType3 === value
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <Box dir='rtl'>
      <label htmlFor="portTypeFilter">أظهر المنتجات بحسب منطقة التصنيع:</label>
      <Select id="portTypeFilter" value={selectedPortType} onChange={handlePortTypeChange} dir='rtl'>
        <option value="">الجميع</option>
        <option value="gbt">الصين</option>
        <option value="type2">أوروبا</option>
        <option value="type1">أمريكا (باستثناء سيارات تسلا الأمريكية)</option>
        <option value="chademo">آسيا</option>
        <option value="tesla">تسلا الأمريكية</option>
      </Select>

      <List>
        {filteredProducts.map((product) => (
          <ListItem key={product.id}>
            <Box display="flex" flexDirection={['column', 'row']} alignItems={['start', 'center']} mr={4}>
              <Link as={RouterLink} to={`/products/${product.id}`}>
                <Image dir='rtl' src={product.imageUrl? product.imageUrl : product.imageSource} alt={product.name} boxSize="280px" objectFit="cover" />
              </Link>
              <Box mr={[0, 4]} mt={[4, 0]}>
                <Text fontWeight="bold" as='h1' size='sm'>{product.name}</Text>
                <Text>AED {product.salePrice? product.salePrice : product.price}</Text>
                {product.salePrice && (
                  <Text as="s" color="gray.500" mr={2}>
                    AED {product.price}
                  </Text>
                )}
                <Text>{product.description}</Text>
                <Link href={`https://wa.me/971501679410?text=Hi,%20I%20would%20like%20to%20order%20${encodeURIComponent(product.name)}%20for%20AED%20${product.price}`} isExternal>
                  <Button colorScheme="green" width="half" my={2}>
                    اطلبه عبر واتساب
                  </Button>
                </Link>
              </Box>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ProductFilter;
