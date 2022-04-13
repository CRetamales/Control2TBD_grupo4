import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7641cfc5 = () => interopDefault(import('..\\pages\\acerca-de.vue' /* webpackChunkName: "pages/acerca-de" */))
const _4872d108 = () => interopDefault(import('..\\pages\\actualizar.vue' /* webpackChunkName: "pages/actualizar" */))
const _48ceba26 = () => interopDefault(import('..\\pages\\eliminar.vue' /* webpackChunkName: "pages/eliminar" */))
const _b6fd9a32 = () => interopDefault(import('..\\pages\\lista.vue' /* webpackChunkName: "pages/lista" */))
const _15b6c0ea = () => interopDefault(import('..\\pages\\nosotros.vue' /* webpackChunkName: "pages/nosotros" */))
const _69a02fca = () => interopDefault(import('..\\pages\\nuevo.vue' /* webpackChunkName: "pages/nuevo" */))
const _79994992 = () => interopDefault(import('..\\pages\\delete\\id.vue' /* webpackChunkName: "pages/delete/id" */))
const _4b922342 = () => interopDefault(import('..\\pages\\delete\\name.vue' /* webpackChunkName: "pages/delete/name" */))
const _27d4feb0 = () => interopDefault(import('..\\pages\\update\\id.vue' /* webpackChunkName: "pages/update/id" */))
const _59b508e0 = () => interopDefault(import('..\\pages\\update\\name.vue' /* webpackChunkName: "pages/update/name" */))
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
    path: "/actualizar",
    component: _4872d108,
    name: "actualizar"
  }, {
    path: "/eliminar",
    component: _48ceba26,
    name: "eliminar"
  }, {
    path: "/lista",
    component: _b6fd9a32,
    name: "lista"
  }, {
    path: "/nosotros",
    component: _15b6c0ea,
    name: "nosotros"
  }, {
    path: "/nuevo",
    component: _69a02fca,
    name: "nuevo"
  }, {
    path: "/delete/id",
    component: _79994992,
    name: "delete-id"
  }, {
    path: "/delete/name",
    component: _4b922342,
    name: "delete-name"
  }, {
    path: "/update/id",
    component: _27d4feb0,
    name: "update-id"
  }, {
    path: "/update/name",
    component: _59b508e0,
    name: "update-name"
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
