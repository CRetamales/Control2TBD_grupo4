import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7641cfc5 = () => interopDefault(import('..\\pages\\acerca-de.vue' /* webpackChunkName: "pages/acerca-de" */))
const _b6fd9a32 = () => interopDefault(import('..\\pages\\lista.vue' /* webpackChunkName: "pages/lista" */))
const _b568b144 = () => interopDefault(import('..\\pages\\lista-componente.vue' /* webpackChunkName: "pages/lista-componente" */))
const _15b6c0ea = () => interopDefault(import('..\\pages\\nosotros.vue' /* webpackChunkName: "pages/nosotros" */))
const _69a02fca = () => interopDefault(import('..\\pages\\nuevo.vue' /* webpackChunkName: "pages/nuevo" */))
const _85708e94 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/acerca-de",
    component: _7641cfc5,
    name: "acerca-de"
  }, {
    path: "/lista",
    component: _b6fd9a32,
    name: "lista"
  }, {
    path: "/lista-componente",
    component: _b568b144,
    name: "lista-componente"
  }, {
    path: "/nosotros",
    component: _15b6c0ea,
    name: "nosotros"
  }, {
    path: "/nuevo",
    component: _69a02fca,
    name: "nuevo"
  }, {
    path: "/",
    component: _85708e94,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
