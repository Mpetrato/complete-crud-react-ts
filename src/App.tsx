import { AppRoutes } from "./routes"
import { MenuLateral } from "./shared/components/menu-lateral/MenuLateral"

export const App = () => {
  return (
    <>
      <MenuLateral>
        <AppRoutes />
      </MenuLateral>
    </>
  )
}