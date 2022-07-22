<template>
  <v-container class="fill-height pa-0" fluid>
    <v-tabs
      v-model="tab"
      background-color="primary"
      color="basil" 
      grow
    >
      <v-tab  class="font-weight-bold  text-subtitle-1">SAVINGS</v-tab>
       <v-tab class="font-weight-bold  text-subtitle-1">LOAN</v-tab>
        <v-tab class="font-weight-bold  text-subtitle-1">SHARES</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <tab-savingaccounts :saviingaccounts="savingaccounts"></tab-savingaccounts>
         
      </v-tab-item>
      <v-tab-item>
        <v-card
          color="basil"
          flat
        >
          <v-card-text>LOANS</v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card
          color="basil"
          flat
        >
          <v-card-text>SHARE</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
</v-container>

</template>

<script>
import SavingAccountTab from "@/components/accounts/savings.vue"
import { mapGetters } from "vuex";
  export default {
    components:{
      "tab-savingaccounts": SavingAccountTab
    },
    data () {
      return {
        tab: null,
         }
    },
    created(){
      console.log(this.clientId);
      this.$store.dispatch("_getaccounts", this.clientId);
    },
    computed:{
    ...mapGetters({
       savingaccounts: "savingaccounts"
    }),
    }
  };
</script>
<style>
#app {
  font-family: "Lato", sans-serif;
}
.routeLink {
  text-decoration: none;
}
</style>
