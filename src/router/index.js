import Vue from 'vue'
import Router from 'vue-router'
import Nastenka from '@/components/Nastenka'
import Owners from '@/components/Owners'
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
import Contacts_New from '@/components/Contacts_New'
import Contacts_Edit from '@/components/Contacts_Edit'
import Owners_New from '@/components/Owners_New'
import Owners_Edit from '@/components/Owners_Edit'


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
      path: '/contacts/Contacts_New',
      name: 'Contacts_New',
      component: Contacts_New,
    },
    {
      path: '/contacts/Contacts_Edit',
      name: 'Contacts_Edit',
      component: Contacts_Edit,
    },
    {
      path: '/owners/Owners_New',
      name: 'Owners_New',
      component: Owners_New,
    },
    {
      path: '/owners/Owners_Edit',
      name: 'Owners_Edit',
      component: Owners_Edit,
    }
  ]
})