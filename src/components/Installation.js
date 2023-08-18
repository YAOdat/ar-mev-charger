import React, { useState } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Img,
  RadioGroup,
  Stack,
  Alert,
  AlertIcon,
  Input,
  Text
} from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

import UAE from '../components/images/Icon Images/united-arab-emirates.png';
import Earth from '../components/images/Icon Images/earth.png';

const BeforeForm = ({onNext}) => {

  return (
    <>
    <Helmet>
  <title>تركيب شواحن سيارات كهربائية في الإمارات - اطلب الخدمة الآن</title>
  <meta name="description" content="خدمة تركيب شاحن سيارة كهربائية في الإمارات" />
  <meta name="keywords" content="تركيب سيارات كهربائية في أبو ظبي" />
  <meta name="keywords" content="تركيب شواحن سيارات كهربائية في دبي" />
  <meta name="keywords" content="تركيب شواحن سيارات كهربائية في الشارقة" />
  <meta name="keywords" content="تركيب شواحن سيارات كهربائية في الإمارات" />
  <meta name="keywords" content="تركيب شاحن سيارات كهربائية"/>
  <meta name="keywords" content="تركيب شاحن تسلا"/>
</Helmet>
      <Heading as='h1' w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        خدمة تركيب شاحن سيارة كهربائية
      </Heading>
<Text dir='rtl'>
تعتبر خدمة تركيب شواحن السيارات الكهربائية خدمة مهمة ومريحة لأصحاب السيارات الكهربائية. تهدف هذه الخدمة إلى تسهيل عملية شحن السيارة وتوفير الراحة والسلامة لمستخدمي السيارات الكهربائية.
من خلال خدمة تركيب شاحن السيارة الكهربائية، يقوم فريق من الفنيين المهرة بتركيب شاحن السيارة في مكان مناسب وملائم، سواء في المنزل أو موقف السيارات الخاص بك أو حتى في مكان العمل. يتم اختيار الموقع الأمثل لتركيب الشاحن بناءً على احتياجاتك الشخصية وظروفك الفردية.

  </Text>  
  <br/>
  <Text dir='rtl'>
  يتم اتخاذ جميع التدابير اللازمة لضمان تركيب الشاحن بشكل آمن وفقًا للمعايير واللوائح القياسية. يتم تقديم الخدمة بواسطة فريق فني متخصص يتمتع بالخبرة والمهارة اللازمة لتنفيذ عملية التركيب بشكل صحيح وفعال.
قبل تركيب الشاحن، يقوم الفنيون بتقييم الأسلاك الكهربائية ونظام التوزيع الحالي للتأكد من قدرته على التعامل مع متطلبات الشاحن الكهربائي. سيقوم الفريق أيضًا بتوصيل الشاحن بالشبكة الكهربائية وضمان وجود تيار كهربائي آمن ومستقر للشحن.
  </Text>
  <br/>
  <Text dir='rtl' mb={2}>
  بعد تركيب الشاحن، يتم اختباره وتشغيله للتأكد من أنه يعمل بشكل صحيح. سيوفر لك الفريق أيضًا التوجيه والتدريب اللازم لاستخدام الشاحن بفعالية وسهولة.
</Text>
      <Button
        onClick={() =>  onNext()}
        variant="outline" 
        colorScheme="teal"
        size="lg"
        w="100%"
        mt="2%"
      >
        اطلب الخدمة الآن  
      </Button>
      </>
    );
  };

const Form1 = ({ onNext }) => {
    const handleClick = (value) => {
      if (value === 'UAE') {
        onNext();
      } else {
        alert('عذرًا، لا يمكننا تقديم الخدمة لك خارج الإمارات.');
      }
    };
  
    return (
      <>
      <Helmet>
  <title>تركيب شواحن سيارات كهربائية في الإمارات - اطلب الخدمة الآن</title>
  <meta name="description" content="خدمة تركيب شواحن سيارات كهربائية في الإمارات" />
  <meta name="keywords" content="تركيب شواحن سيارات كهربائية في أبو ظبي" />
  <meta name="keywords" content="تركيب شواحن سيارات كهربائية في دبي" />
  <meta name="keywords" content="تركيب شواحن سيارات كهربائية في الإمارات" />
  <meta name="keywords" content="تركيب شاحن سيارات كهربائية"/>
  <meta name="keywords" content="تركيب شاحن سيارة كهربائية"/>
  <meta name="keywords" content="تركيب شاحن تسلا"/>
  <meta name="keywords" content="محطة شواحن متنقلة"/>
</Helmet>
        <Heading as='h1' w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
          هل أنت متواجد داخل الإمارات؟
        </Heading>
        <RadioGroup mb={8} name="Step1" sx={{ mt: 8 }}>
          <Stack spacing={10} direction="row" justify="center">
            <Stack direction="column" align="center">
              <Img
                width="100px"
                src={UAE}
                alt="تركيب شواحن سيارات كهربائية"
                value="UAE"
                onClick={() => handleClick('UAE')}
                _hover={{ transform: 'scale(1.15)' }}
                transition={'0.2s ease-in-out'}
                cursor={'pointer'}
              />
              <FormLabel htmlFor="first-name" fontWeight={'normal'}>
                نعم.
              </FormLabel>
            </Stack>
  
            <Stack direction="column" align="center">
              <Img
                width="90px"
                src={Earth}
                alt="Charger Icon"
                value="Earth"
                onClick={() => handleClick('Earth')}
                _hover={{ transform: 'scale(1.15)' }}
                transition={'0.2s ease-in-out'}
                cursor={'pointer'}
              />
              <FormLabel htmlFor="first-name" fontWeight={'normal'}>
                لا.
              </FormLabel>
            </Stack>
          </Stack>
        </RadioGroup>
      </>
    );
  };
  
  
  const Form2 = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [location, setLocation] = useState('');
    const [showNotFoundAlert, setShowNotFoundAlert] = useState(false);
  
    const handleSendLocation = () => {
      if (!location) {
        setShowNotFoundAlert(true);
        return;
      }
  
      const message = `السلام عليكم، أنا متواجد في ${location} وأريد تركيب شاحن سيارة كهربائية.`;
      const whatsappLink = `https://wa.me/+971505968453?text=${encodeURIComponent(
        message
      )}`;
  
      window.open(whatsappLink, '_blank');
    };
  
    return (
      <>
        <Button
          leftIcon={<FaWhatsapp />}
          colorScheme="green"
          onClick={onOpen}
          dir='rtl'
        >
أرسل موقعك عبر واتساب        </Button>
        {showNotFoundAlert && (
          <Alert status="warning">
            <AlertIcon />
            الرجاء كتابة العنوان قبل الإرسال.
          </Alert>
        )}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent dir="rtl">
            <ModalHeader>اكتب موقعك</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                placeholder="ادخل موقعك أو عنوانك هنا"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="green" onClick={handleSendLocation}>
                إرسال
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };

const Form3 = () => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Ask an expert
      </Heading>
    </>
  );
};

export default function Multistep() {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);

  const handleNext = () => {
    setStep(step + 1);
    setProgress(progress + 33.33);
  };

  const handleBack = () => {
    setStep(step - 1);
    setProgress(progress - 33.33);
  };

  return (
    <>
        <Helmet>
        <meta name="keywords" content="تركيب شواحن سيارات كهربائية في أبو ظبي" />
        <meta name="keywords" content="تركيب شواحن سيارات كهربائية في دبي" />
        <meta name="description" content="خدمة تركيب شواحن سيارات كهربائية في الإمارات" />
      </Helmet>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
        dir='rtl' 
      >
        <Progress colorScheme="green" hasStripe value={progress} mb="5%" mx="5%" isAnimated />
        {step === 1 && <BeforeForm onNext={handleNext} /> }
        {step === 2 && <Form1 onNext={handleNext} />}
        {step === 3 && <Form2 />}
        {step === 4 && <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={handleBack}
                isDisabled={step === 1}
                colorScheme="green"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                السابق
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={handleNext}
                colorScheme="green"
                variant="outline"
                mx={2}
              >
                التالي
              </Button>
            </Flex>
            {step === 3 && (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => alert('I will message you later.')}
              >
                Help pls
              </Button>
            )}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
