<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Memories</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <h2>These are my Friends</h2>
        <ion-list>
            <ion-item>Zemenu</ion-item>
            <ion-item>Biniam</ion-item>
            <ion-item>Abenezer</ion-item>
        </ion-list>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,IonList, IonItem } from '@ionic/vue';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    components: {
      IonPage,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonList,
      IonItem
    },
  });
  </script>
  
  