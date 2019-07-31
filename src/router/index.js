import Vue from 'vue'
import Router from 'vue-router'
import Nastenka from '@/components/Nastenka'
import Owners from '@/components/Owners'
import Contacts from '@/components/Contacts'
import Schuze from '@/components/Schuze'
import Docs from '@/components/Docs'
import Revision from '@/components/Revision'
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
import Docs_New from '@/components/Docs_New'
import Docs_Edit from '@/components/Docs_Edit'
import Revision_Electroinstalation from '@/components/Revision_Electroinstalation'
import Revision_Conductor from '@/components/Revision_Conductor'
import Revision_Extings from '@/components/Revision_Extings'
import Revision_Hydrants from '@/components/Revision_Hydrants'
import Revision_Eps from '@/components/Revision_Eps'
import Revision_Shz from '@/components/Revision_Shz'
import Revision_Ventilation from '@/components/Revision_Ventilation'
import Revision_Elighting from '@/components/Revision_Elighting'
import Revision_Obzpn from '@/components/Revision_Obzpn'
import Revision_Lifts from '@/components/Revision_Lifts'
import Revision_Drp from '@/components/Revision_Drp'
import Revision_Gasboiler from '@/components/Revision_Gasboiler'
import Revision_LowPresBoiler from '@/components/Revision_LowPresBoiler'
import Revision_Chimney from '@/components/Revision_Chimney'
import Revision_PresureDev from '@/components/Revision_PresureDev'
import Odecty_New from '@/components/Odecty_New'
import Odecty_Edit from '@/components/Odecty_Edit'

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
      path: '/Docs',
      name: 'Docs',
      component: Docs
    },
    {
      path: '/revision',
      name: 'Revision',
      component: Revision
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
    },
    {
      path: '/docs/Docs_New',
      name: 'Docs_New',
      component: Docs_New,
    },
    {
      path: '/docs/Docs_Edit',
      name: 'Docs_Edit',
      component: Docs_Edit,
    },
    {
      path: '/revision/Revision_Electroinstalation',
      name: 'Revision_Electroinstalation',
      component: Revision_Electroinstalation,
    },
    {
      path: '/revision/Revision_Conductor',
      name: 'Revision_Conductor',
      component: Revision_Conductor,
    },
    {
      path: '/revision/Revision_Extings',
      name: 'Revision_Extings',
      component: Revision_Extings,
    },
    {
      path: '/revision/Revision_Hydrants',
      name: 'Revision_Hydrants',
      component: Revision_Hydrants,
    },
    {
      path: '/revision/Revision_Eps',
      name: 'Revision_Eps',
      component: Revision_Eps,
    },
    {
      path: '/revision/Revision_Shz',
      name: 'Revision_Shz',
      component: Revision_Shz,
    },
    {
      path: '/revision/Revision_Ventilation',
      name: 'Revision_Ventilation',
      component: Revision_Ventilation,
    },
    {
      path: '/revision/Revision_Elighting',
      name: 'Revision_Elighting',
      component: Revision_Elighting,
    },
    {
      path: '/revision/Revision_Obzpn',
      name: 'Revision_Obzpn',
      component: Revision_Obzpn,
    },
    {
      path: '/revision/Revision_Lifts',
      name: 'Revision_Lifts',
      component: Revision_Lifts,
    },
    {
      path: '/revision/Revision_Drp',
      name: 'Revision_Drp',
      component: Revision_Drp,
    },
    {
      path: '/revision/Revision_Gasboiler',
      name: 'Revision_Gasboiler',
      component: Revision_Gasboiler,
    },
    {
      path: '/revision/Revision_LowPresBoiler',
      name: 'Revision_LowPresBoiler',
      component: Revision_LowPresBoiler,
    },
    {
      path: '/revision/Revision_Chimney',
      name: 'Revision_Chimney',
      component: Revision_Chimney,
    },
    {
      path: '/revision/Revision_PresureDev',
      name: 'Revision_PresureDev',
      component: Revision_PresureDev,
    },
    {
      path: '/odecty/Odecty_New',
      name: 'Odecty_New',
      component: Odecty_New,
    },
    {
      path: '/odecty/Odecty_Edit',
      name: 'Odecty_Edit',
      component: Odecty_Edit,
    }
  ]
})