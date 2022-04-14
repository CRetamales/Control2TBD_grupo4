import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _39616da8 = () => interopDefault(import('..\\pages\\acerca-de.vue' /* webpackChunkName: "pages/acerca-de" */))
const _7c9ab5f9 = () => interopDefault(import('..\\pages\\actualizar.vue' /* webpackChunkName: "pages/actualizar" */))
const _02ec3caa = () => interopDefault(import('..\\pages\\eliminar.vue' /* webpackChunkName: "pages/eliminar" */))
const _78ed8b6c = () => interopDefault(import('..\\pages\\lista.vue' /* webpackChunkName: "pages/lista" */))
const _1c783948 = () => interopDefault(import('..\\pages\\nosotros.vue' /* webpackChunkName: "pages/nosotros" */))
const _2b902104 = () => interopDefault(import('..\\pages\\nuevo.vue' /* webpackChunkName: "pages/nuevo" */))
const _1a6d680f = () => interopDefault(import('..\\pages\\delete\\id.vue' /* webpackChunkName: "pages/delete/id" */))
const _6eadc5a6 = () => interopDefault(import('..\\pages\\update\\id.vue' /* webpackChunkName: "pages/update/id" */))
const _47607fce = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _39616da8,
    name: "acerca-de"
  }, {
    path: "/actualizar",
    component: _7c9ab5f9,
    name: "actualizar"
  }, {
    path: "/eliminar",
    component: _02ec3caa,
    name: "eliminar"
  }, {
    path: "/lista",
    component: _78ed8b6c,
    name: "lista"
  }, {
    path: "/nosotros",
    component: _1c783948,
    name: "nosotros"
  }, {
    path: "/nuevo",
    component: _2b902104,
    name: "nuevo"
  }, {
    path: "/delete/id",
    component: _1a6d680f,
    name: "delete-id"
  }, {
    path: "/update/id",
    component: _6eadc5a6,
    name: "update-id"
  }, {
    path: "/",
    component: _47607fce,
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
