import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './App.vue'
import Character from './Character.vue'
import Stuff from './Stuff.vue'
import SpellBook from './SpellsList.vue'
import SkillsAndAbilities from './SkillsAndAbilities.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/character'}, 
  { path: '/character', component: Character}, 
  { path: '/stuff', component: Stuff},
  { path: '/spellbook', component: SpellBook},
  { path: '/skills', component: SkillsAndAbilities}
];

const router = new VueRouter({
  routes: routes
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
