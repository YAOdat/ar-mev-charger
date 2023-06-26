import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Box textAlign="center" py={20} px={10}>
    <Heading
      display="inline-block"
      as="h2"
      size="4xl"
      bgGradient="linear(to-r, green.400, green.600)"
      backgroundClip="text"
      fontSize="4xl">
      404
    </Heading>
    <Text fontSize="24px" mt={6} mb={4}>
      الصفحة غير موجودة
    </Text>
    <Text color={'gray.500'} fontSize="20px" mb={8}>
لم يتم العثور على الصفحة المطلوبة    </Text>
    <Link to="/">
      <Button
        colorScheme="teal"
        bgGradient="linear(to-r, green.400, green.500, green.600)"
        color="white"
        variant="solid"
        fontSize="20px">
        عُد للصفحة الرئيسية
      </Button>
    </Link>
  </Box>
  
  );
}