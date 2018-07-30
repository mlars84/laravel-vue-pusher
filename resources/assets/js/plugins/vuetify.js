import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions,
  VCard,
  VTextField,
  VForm,
  VCheckbox,
  VSelect,
  VAlert,
  VDialog
} from 'vuetify'
// import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
    VCard,
    VTextField,
    VForm,
    VCheckbox,
    VSelect,
    VAlert,
    VDialog
  },
  theme: {
    primary: '#0d2b88',
    secondary: '#ffa000',
    accent: '#525e85',
    error: '#DB2828',
    info: '#31CCEC',
    success: '#21BA45',
    warning: '#F2C037'
  }
})
