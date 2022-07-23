<template>
  <v-container class="fill-height pa-0" fluid>
    <v-tabs v-model="tab" background-color="primary" color="basil" grow>
      <v-tab class="font-weight-bold text-subtitle-1">SAVINGS</v-tab>
      <v-tab class="font-weight-bold text-subtitle-1">LOAN</v-tab>
      <v-tab class="font-weight-bold text-subtitle-1">SHARES</v-tab>
    </v-tabs>

    <v-tabs-items style="width: 100% !important" v-model="tab">
      <v-tab-item style="width: 100% !important">
        <tab-savingaccounts
          :savingaccounts="savingaccounts"
        ></tab-savingaccounts>
      </v-tab-item>
      <v-tab-item style="width: 100% !important">
        <tab-loanaccounts :loanaccounts="loanaccounts"></tab-loanaccounts>
      </v-tab-item>
      <v-tab-item style="width: 100% !important">
        <tab-shareccounts :shareaccounts="shareaccounts"></tab-shareccounts>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import SavingAccountTab from "@/components/accounts/savings.vue";
import LoanAccountTab from "@/components/accounts/loans.vue";
import SharesAccountTab from "@/components/accounts/shares.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    "tab-savingaccounts": SavingAccountTab,
    "tab-loanaccounts": LoanAccountTab,
    "tab-shareccounts": SharesAccountTab,
  },
  data() {
    return {
      tab: null,
    };
  },
  created() {
    console.log(this.clientId);
    this.$store.dispatch("_getaccounts", this.clientId);
  },
  computed: {
    ...mapGetters({
      savingaccounts: "savingaccounts",
      loanaccounts: "loanaccounts",
      shareaccounts: "shareaccounts",
    }),
  },
};
</script>

