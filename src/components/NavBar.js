import React from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
  useColorMode,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  MoonIcon,
} from '@chakra-ui/icons';
import { useLocation } from 'react-router-dom';
import { BsWhatsapp } from 'react-icons/bs';
import Logo from './images/mevchargerslogo.png';
import Arabic2English from './images/Icon Images/ArabicToEnglish.png';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation(); 

  const handleLanguageSwitch = () => {
    const currentUrl = window.location.href;
    const newUrl = currentUrl.replace('https://ar.', 'https://en.'); // Replace www with ar in the URL
    window.location.href = newUrl;
  };
  
  
  return (
    <Box dir='rtl'>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >

          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex
          flex={{ base: 2 }}
          justify={{ base: 'center', md: 'start' }}
          alignItems="center"
        >
    <Link href="/">
            <img src={Logo} alt="MEV Charger" width={80} title='MEV Charger logo' />
          </Link>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
     
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
         
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            href={'https://api.whatsapp.com/send/?phone=971501679410&text=mevcharger.com'}
            bg={'green.400'}
            _hover={{
              bg: 'green.300',
            }}
            dir='ltr'
          >
            <Icon as={BsWhatsapp} w={5} h={5} />
          </Button>

          <Button onClick={handleLanguageSwitch}>
          <Image src={Arabic2English} alt="Arabic to English" width={10} title='Arabic to English EV Chargers Translation' loading="eager"/>
          </Button>


          <Button onClick={toggleColorMode} aria-label="Toggle color mode">
            <MoonIcon />
          </Button>

        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel, subChildren }) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('green.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'green.400' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'green.400'} w={5} h={5} as={ChevronLeftIcon} />
        </Flex>
      </Stack>

      {subChildren && (
        <Stack pl={4} mt={2}>
          {subChildren.map((subChild) => (
            <Link key={subChild.label} py={2} href={subChild.href}>
              {subChild.label}
            </Link>
          ))}
        </Stack>
      )}
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();


  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <React.Fragment key={child.label}>
                <Link py={2} href={child.href}>
                  {child.label}
                </Link>
                {child.subChildren &&
                  child.subChildren.map((subChild) => (
                    <Link key={subChild.label} py={2} fontSize={13} href={subChild.href}>
                      {subChild.label}
                    </Link>
                  ))}
              </React.Fragment>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};


const NAV_ITEMS = [
  {
    label: 'الرئيسية',
    href: '/',
  },
  {
    label: 'المنتجات',
    href: '#',
    children: [
      {
        label: 'الشواحن',
        subLabel: 'أفضل شواحن السيارات الكهربائية',
        href: '/products/chargers',
        subChildren: [
          {
            label: 'شواحن AC',
            subLabel: 'احصل على أفضل شواحن التيار المتردد AC',
            href: '/products/chargers/ac-chargers',
          },
          {
            label: 'شواحن DC',
            subLabel: 'احصل على أفضل شواحن السيارات الكهربائية ثابت التيار DC',
            href: '/products/11',
          },
        ],
      },
      {
        label: 'المحولات',
        subLabel: 'تحويلات لشاحن السيارات الكهربائية',
        href: '/products/adapters',
        subChildren: [
          {
            label: 'تحويلات AC',
            subLabel: 'أفضل محولات لشاحن السيارة الكهربائية متردد التيار AC ',
            href: '/products/adapters',
          },
          {
            label: 'تحويلات DC',
            subLabel: 'أفضل محولات لشاحن السيارة الكهربائية ثابت التيار DC',
            href: '/products/11',
          },
        ],
      },
      {
        label: 'أجهزة فحص السيارات الكهربائية',
        href: '/products/ev-scanners',

      },
    ],

  },

  {
    label: 'خدمات',
    href: '#',
    children: [
      {
        label: 'تركيب الشواحن',
        subLabel: 'نقوم بتركيب الشواحن في المنازل والمجمعات التجارية',
        href: '/services/ev-charger-installation',
      },
      {
        label: 'خدمة الشحن المتنقل',
        subLabel: 'إذا نفذت بطارية سيارتك الكهربائية في الطريق، نحن نقوم بشحنها.',
        href: '/services/roadside-charging-service',
      },
    ],
  },
  {
    label: 'المدونة',
    href: '/blog',
  },
  {
    label: 'عنا',
    children: [
      {
        label: 'عنا',
        subLabel: 'اعرف المزيد عن شواحن ميجا',
        href: '/about',
      },
      {
        label: 'جد مكاننا',
        subLabel: 'لزيارتنا، اضغط هنا',
        href: 'https://goo.gl/maps/W6EiN6uQAGyH4BTj8',
      },
    ],
  },
];
