import Vue from 'vue'
import Router from 'vue-router'
import Nastenka from '@/components/Nastenka'
import Spoluvlastnici from '@/components/Spoluvlastnici'
import Kontakty from '@/components/Kontakty'
import Schuze from '@/components/Schuze'
import Dokumenty from '@/components/Dokumenty'
import Revize from '@/components/Revize'
import Zavady from '@/components/Zavady'
import Nastaveni from '@/components/Nastaveni'
import Odecty from '@/components/Odecty'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/nastenka',
      name: 'Nastenka',
      component: Nastenka
    },
    {
      path: '/spoluvlastnici',
      name: 'Spoluvlastnici',
      component: Spoluvlastnici
    },
    {
      path: '/kontakty',
      name: 'Kontakty',
      component: Kontakty
    },
    {
      path: '/nastenka',
      name: 'Nastenka',
      component: Nastenka
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
      path: '/dokumenty',
      name: 'Dokumenty',
      component: Dokumenty
    },
    {
      path: '/odecty',
      name: 'Odecty',
      component: Odecty
    }
  ]
})
