import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9b773d2a = () => interopDefault(import('..\\pages\\acerca-de.vue' /* webpackChunkName: "pages/acerca-de" */))
const _342a878d = () => interopDefault(import('..\\pages\\lista.vue' /* webpackChunkName: "pages/lista" */))
const _29770ef8 = () => interopDefault(import('..\\pages\\lista-componente.vue' /* webpackChunkName: "pages/lista-componente" */))
const _01537db6 = () => interopDefault(import('..\\pages\\nosotros.vue' /* webpackChunkName: "pages/nosotros" */))
const _5ad93cc1 = () => interopDefault(import('..\\pages\\nuevo.vue' /* webpackChunkName: "pages/nuevo" */))
const _4cf10d5c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _9b773d2a,
    name: "acerca-de"
  }, {
    path: "/lista",
    component: _342a878d,
    name: "lista"
  }, {
    path: "/lista-componente",
    component: _29770ef8,
    name: "lista-componente"
  }, {
    path: "/nosotros",
    component: _01537db6,
    name: "nosotros"
  }, {
    path: "/nuevo",
    component: _5ad93cc1,
    name: "nuevo"
  }, {
    path: "/",
    component: _4cf10d5c,
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
