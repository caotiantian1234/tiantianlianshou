import VueCookies from 'vue-cookies'
const routerName = 'routerName'

export function getRouterName() {
  return VueCookies.get(routerName)
}

export function setRouterName(router) {
  return VueCookies.set(routerName, router)
}

export function removeRouterName() {
  return VueCookies.remove(routerName)
}