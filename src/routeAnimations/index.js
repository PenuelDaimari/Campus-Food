import {Homepage, Login, Register, Cart, Menupage} from '../components'
import {RouteAnimation} from "./RouteAnimation";

export const AnimatedHomepage = () => {
  return (
    <RouteAnimation><Homepage /></RouteAnimation>
  )
}

export const AnimatedCartPage = () => {
  return(
    <RouteAnimation><Cart/></RouteAnimation>
  )
}

export const AnimatedMenuPage = () => {
  return (
    <RouteAnimation><Menupage/></RouteAnimation>
  )
}

export const AnimatedLoginPage = () => (
  <RouteAnimation><Login/></RouteAnimation>
)

export const AnimatedRegisterPage = () => (
  <RouteAnimation><Register/></RouteAnimation>
)
