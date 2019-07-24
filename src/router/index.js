import Vue from 'vue'
import Router from 'vue-router'
import Nastenka from '@/components/Nastenka'
import Owners from '@/components/owners'
import Contacts from '@/components/Contacts'
import Schuze from '@/components/Schuze'
import Dokumenty from '@/components/Dokumenty'
import Revize from '@/components/Revize'
import Zavady from '@/components/Zavady'
import Nastaveni from '@/components/Nastaveni'
import Odecty from '@/components/Odecty'
import Home from '@/components/Home'
import Ucetnictvi from '@/components/Ucetnictvi'
import Faq from '@/components/Faq'
import Hints from '@/components/Hints'
import NewContact from '@/components/NewContact'
import EditContact from '@/components/EditContact'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
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
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
      // children: [{
      //   path: 'newContact',
      //   name: 'NewContact',
      //   component: NewContact,
      // }]
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
    },
    {
      path: '/ucetnictvi',
      name: 'Ucetnictvi',
      component: Ucetnictvi
    },
    {
      path: '/faq',
      name: 'Faq',
      component: Faq
    },
    {
      path: '/hints',
      name: 'Hints',
      component: Hints
    },
    {
      path: '/contacts/newContact',
      name: 'NewContact',
      component: NewContact,
    },
    {
      path: '/contacts/editContact',
      name: 'EditContact',
      component: EditContact,
    }
  ]
})