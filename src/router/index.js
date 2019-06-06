import Vue from 'vue'
import Router from 'vue-router'
import Nastenka from '@/components/Nastenka'
import Owners from '@/components/owners'
import Kontakty from '@/components/Kontakty'
import Schuze from '@/components/Schuze'
import Dokumenty from '@/components/Dokumenty'
import Revize from '@/components/Revize'
import Zavady from '@/components/Zavady'
import Nastaveni from '@/components/Nastaveni'
import Odecty from '@/components/Odecty'
import Home from '@/components/Home'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/nastenka',
      name: 'Nastenka',
      component: Nastenka
    },
    {
      path: '/owners',
      name: 'Owners',
      component: Owners
    },
    {
      path: '/kontakty',
      name: 'Kontakty',
      component: Kontakty
    },
    {
      path: '/schuze',
      name: 'Schuze',
      component: Schuze
    },
    {
      path: '/dokumenty',
      name: 'Dokumenty',
      component: Dokumenty
    },
    {
      path: '/revize',
      name: 'Revize',
      component: Revize
    },
    {
      path: '/zavady',
      name: 'Zavady',
      component: Zavady
    },
    {
      path: '/nastaveni',
      name: 'Nastaveni',
      component: Nastaveni
    },
    {
      path: '/odecty',
      name: 'Odecty',
      component: Odecty
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
