import { Link as RouterLink } from 'react-router-dom'
import { LogIn, Package, Plus } from 'lucide-react'
import { Navigation } from './Navigation'

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white px-4 py-3 md:px-6 lg:px-8">
      <div className="flex items-center justify-between max-w-[1400px] mx-auto">
        <div className="flex w-full items-center justify-between gap-6 md:w-auto md:justify-start">
          <RouterLink to="/" className="no-underline hover:no-underline">
            <div className="flex items-center gap-2">
              <Package size={20} color="#1d4ed8" strokeWidth={2.5} />
              <span className="text-xl font-bold text-gray-900">Abito</span>
            </div>
          </RouterLink>

          <Navigation />
        </div>

        <div className="hidden gap-4 md:flex">
          <RouterLink to="/create" className="button button--tertiary">
            <LogIn size={16} />
            Вход и регистрация
          </RouterLink>
          <RouterLink to="/create" className="button button--primary">
            <Plus size={16} />
            Подать объявление
          </RouterLink>
        </div>
      </div>
    </header>
  )
}
