'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

function Item({route}){
  return(
    <NavigationMenuItem>
      <Link href={route.href} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {route.title}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  )
}


export default function NavBar({routes}){
  return(
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          {routes.map((route, index)  => (
            <Item key={index} route={route}/>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}