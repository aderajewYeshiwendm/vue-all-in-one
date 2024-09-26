<template>
  <ion-app>
    <ion-router-outlet />
    <Memo/>
  </ion-app>
</template>

<script setup lang="js">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import Memo from './pages/Memo.vue';

</script>

