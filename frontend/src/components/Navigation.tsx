import { Link as RouterLink } from 'react-router-dom'
import { LogIn, Menu, Plus } from 'lucide-react'
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
      <nav className="hidden items-center gap-4 md:flex">
        {menuItems.map((item) => (
          <RouterLink
            key={item.label}
            to={item.to}
            className="text-sm text-black no-underline transition-colors hover:text-black"
          >
            {item.label}
          </RouterLink>
        ))}
      </nav>

      <div className="block md:hidden">
        <DrawerComponent
          trigger={{
            customElement: (actions) => (
              <button
                type="button"
                onClick={() =>
                  actions.toggleDrawer?.(Boolean(actions.isOpenDrawer))
                }
                aria-label="Открыть меню"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-gray-700 transition-colors hover:bg-gray-100"
              >
                <Menu size={22} />
              </button>
            ),
          }}
          menu={{
            items: menuItems,
            bottomSection: (actions) => (
              <div className="flex flex-col items-stretch gap-2 pt-2">
                <RouterLink
                  to="/login"
                  className="button button--tertiary"
                  onClick={() =>
                    actions.toggleDrawer?.(Boolean(actions.isOpenDrawer))
                  }
                >
                  <LogIn size={16} />
                  Вход и регистрация
                </RouterLink>
                <RouterLink
                  to="/create"
                  className="button button--primary"
                  onClick={() =>
                    actions.toggleDrawer?.(Boolean(actions.isOpenDrawer))
                  }
                >
                  <Plus size={16} />
                  Создать объявление
                </RouterLink>
              </div>
            ),
          }}
        />
      </div>
    </>
  )
}
