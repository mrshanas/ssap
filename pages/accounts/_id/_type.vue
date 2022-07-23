<template>
  <v-container v-if="account == null" class="fill-height">
    <v-row align="center" justify="center" class="fill-height">
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </v-row>
  </v-container>
  <v-card v-else color="transparent" flat>
    <v-toolbar color="primary" tile dark flat>
      <v-toolbar-title>
        <v-avatar color="primary " size="36">
          <span
            class="white--text font-weight-bold overline"
            @click.stop="$router.go(-1)"
          >
            <v-icon large color="white">mdi-keyboard-backspace</v-icon>
          </span>
        </v-avatar>
      </v-toolbar-title>
      <v-toolbar-title class="white--text">
        &nbsp; &nbsp; {{ capitalizeFirstLetter($route.params.type) }} Account
        Details</v-toolbar-title
      >
    </v-toolbar>

    <v-container class="pa-0 ma-0" v-if="account">
      <saving-account-view
        v-if="this.$route.params.type == 'saving'"
        :account="account"
      ></saving-account-view>
    </v-container>
  </v-card>
</template>

<script>
import ViewSavingPage from "@/components/accounts/view_saving.vue";
export default {
  layout: "views",
  components: {
    "saving-account-view": ViewSavingPage,
  },
  data() {
    return {
      account: null,
    };
  },
  created() {
    if (this.$route.params.type == "saving") {
      this.getsavingaccountdetails();
    }
    if (this.$route.params.type == "loan") {
      this.getloanaccountdetails();
    }
    if (this.$route.params.type == "share") {
      this.getshareaccountdetails();
    }
  },
  methods: {
    async getloanaccountdetails() {
      await this.$api
        .$get(`loans/${this.$route.params.id}`, {
          params: { associations: "repaymentSchedule,transactions" },
        })
        .then((response) => {
          this.account = response;
        })
        .catch((error) => {});
    },
    async getsavingaccountdetails() {
      await this.$api
        .$get(`savingsaccounts/${this.$route.params.id}`, {
          params: { associations: "transactions,charges" },
        })
        .then((response) => {
          this.account = response;
        })
        .catch((error) => {});
    },
    async getshareaccountdetails() {
      await this.$api
        .$get(`shareaccounts/${this.$route.params.id}`, {
          params: { associations: "transactions, charges" },
        })
        .then((response) => {
          this.account = response;
        })
        .catch((error) => {});
    },
  },
};
</script>