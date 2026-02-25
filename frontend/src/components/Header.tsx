import { Link as RouterLink } from 'react-router-dom'
import { Box, Flex, HStack, Text, Link } from '@chakra-ui/react'
import { Package } from 'lucide-react'
import { Navigation } from './Navigation'

export function Header() {
  return (
    <Box
      as="header"
      bg="white"
      borderBottomWidth="1px"
      borderColor="gray.200"
      px={6}
      py={3}
    >
      <Flex align="center" justify="space-between" maxW="1400px" mx="auto">
        <HStack gap={6}>
          <Link asChild _hover={{ textDecoration: 'none' }}>
            <RouterLink to="/">
              <HStack gap={2}>
                <Package size={20} color="#1d4ed8" strokeWidth={2.5} />
                <Text fontWeight="bold" fontSize="xl" color="gray.900">
                  Abito
                </Text>
              </HStack>
            </RouterLink>
          </Link>

          <Navigation />
        </HStack>

        <HStack gap={4} display={{ base: 'none', md: 'flex' }}>
          <RouterLink to="/create" className="button button--tertiary">
            Вход и регистрация
          </RouterLink>
          <RouterLink to="/create" className="button button--primary">
            Подать объявление
          </RouterLink>
        </HStack>
      </Flex>
    </Box>
  )
}
