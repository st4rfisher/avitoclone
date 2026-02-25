import { Link as RouterLink } from 'react-router-dom'
import { HStack, Link, Box, Button, VStack } from '@chakra-ui/react'
import { Menu } from 'lucide-react'
import DrawerComponent from './Drawer/Drawer'

export function Navigation() {
  const menuItems = [
    { label: 'Авто', to: '/' },
    { label: 'Недвижимость', to: '/' },
    { label: 'Работа', to: '/' },
    { label: 'Услуги', to: '/' },
  ]

  return (
    <>
      <HStack as="nav" gap={4} display={{ base: 'none', md: 'flex' }}>
        {menuItems.map((item) => (
          <Link
            key={item.label}
            asChild
            fontSize="sm"
            color="gray.700"
            _hover={{ color: 'blue.600', textDecoration: 'none' }}
          >
            <RouterLink to={item.to}>{item.label}</RouterLink>
          </Link>
        ))}
      </HStack>

      <Box display={{ base: 'block', md: 'none' }}>
        <DrawerComponent
          trigger={{
            customElement: (actions) => (
              <Button
                variant="ghost"
                onClick={() =>
                  actions.toggleDrawer?.(Boolean(actions.isOpenDrawer))
                }
                aria-label="Открыть меню"
              >
                <Menu size={22} />
              </Button>
            ),
          }}
          menu={{
            items: menuItems,
            bottomSection: (actions) => (
              <VStack align="stretch" gap={2} pt={2}>
                <RouterLink
                  to="/login"
                  className="button button--tertiary"
                  onClick={() =>
                    actions.toggleDrawer?.(Boolean(actions.isOpenDrawer))
                  }
                >
                  Вход и регистрация
                </RouterLink>
                <RouterLink
                  to="/create"
                  className="button button--primary"
                  onClick={() =>
                    actions.toggleDrawer?.(Boolean(actions.isOpenDrawer))
                  }
                >
                  Подать объявление
                </RouterLink>
              </VStack>
            ),
          }}
        />
      </Box>
    </>
  )
}
