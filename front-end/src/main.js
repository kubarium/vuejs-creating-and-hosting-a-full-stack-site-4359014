import { createApp } from 'vue'
import App from './App.vue'
import "./main.css"

import * as VueRouter from 'vue-router'
import ShoppingCart from './pages/ShoppingCart.vue'
import Products from './pages/Products.vue'
import ProductDetail from './pages/ProductDetail.vue'
import NotFound from './pages/NotFound.vue'


createApp(App)
  .use(VueRouter.createRouter({
    history: VueRouter.createWebHistory(process.env.BASE_URL),
    routes: [{
      path: "/", redirect: "/products"
    },
    {
      path: "/cart", component: ShoppingCart
    }, {
      path: "/products", component: Products
    }, {
      path: "/products/:productID", component: ProductDetail
    }, {
      path: "/:pathMatch(.*)*", component: NotFound
    }
    ]
  }))
  .mount('#app')
