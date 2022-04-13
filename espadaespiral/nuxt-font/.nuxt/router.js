import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _71adba0e = () => interopDefault(import('..\\pages\\acerca-de.vue' /* webpackChunkName: "pages/acerca-de" */))
const _b06caa70 = () => interopDefault(import('..\\pages\\actualizar.vue' /* webpackChunkName: "pages/actualizar" */))
const _e8bfcd8e = () => interopDefault(import('..\\pages\\eliminar.vue' /* webpackChunkName: "pages/eliminar" */))
const _e04b7fca = () => interopDefault(import('..\\pages\\lista.vue' /* webpackChunkName: "pages/lista" */))
const _b5a7d452 = () => interopDefault(import('..\\pages\\nosotros.vue' /* webpackChunkName: "pages/nosotros" */))
const _92ee1562 = () => interopDefault(import('..\\pages\\nuevo.vue' /* webpackChunkName: "pages/nuevo" */))
const _459c5cde = () => interopDefault(import('..\\pages\\delete\\id.vue' /* webpackChunkName: "pages/delete/id" */))
const _231d938e = () => interopDefault(import('..\\pages\\delete\\name.vue' /* webpackChunkName: "pages/delete/name" */))
const _184fdc08 = () => interopDefault(import('..\\pages\\update\\id.vue' /* webpackChunkName: "pages/update/id" */))
const _3140792c = () => interopDefault(import('..\\pages\\update\\name.vue' /* webpackChunkName: "pages/update/name" */))
const _aebe742c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _71adba0e,
    name: "acerca-de"
  }, {
    path: "/actualizar",
    component: _b06caa70,
    name: "actualizar"
  }, {
    path: "/eliminar",
    component: _e8bfcd8e,
    name: "eliminar"
  }, {
    path: "/lista",
    component: _e04b7fca,
    name: "lista"
  }, {
    path: "/nosotros",
    component: _b5a7d452,
    name: "nosotros"
  }, {
    path: "/nuevo",
    component: _92ee1562,
    name: "nuevo"
  }, {
    path: "/delete/id",
    component: _459c5cde,
    name: "delete-id"
  }, {
    path: "/delete/name",
    component: _231d938e,
    name: "delete-name"
  }, {
    path: "/update/id",
    component: _184fdc08,
    name: "update-id"
  }, {
    path: "/update/name",
    component: _3140792c,
    name: "update-name"
  }, {
    path: "/",
    component: _aebe742c,
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
