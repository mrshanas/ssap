<template>
  <v-container class="ma-0 pa-0" fluid>
    <v-card
      elevation="0"
      color="primary darken-1"
      class="mx-auto"
      min-height="120"
      tile
    >
      <v-list-item
        v-if="profile"
        three-line
        class="pt-5"
        color="rgba(0, 0, 0, .4)"
        dark
      >
        <v-list-item-icon class="pa-0">
          <v-avatar color="primary" size="62">
            <span v-if="profile.displayName" class="white--text text-h4">{{
              profile.displayName.charAt(0)
            }}</span></v-avatar
          >
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-subtitle class="white--text"
            >Hello, {{ profile.displayName }}</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <v-row no-gutters class="pt-3 px-3">
      <v-col class="d-flex justify-space-between align-center">
        <p class="pt-1">Account overview</p>
        <v-btn
          v-if="accountvisible"
          @click="accountvisible = !accountvisible"
          icon
          ><v-icon>mdi-eye</v-icon></v-btn
        ><v-btn @click="accountvisible = !accountvisible" icon v-else>
          <v-icon>mdi-eye-off</v-icon></v-btn
        >
      </v-col>
    </v-row>
    <v-row class="py-2" v-if="accountvisible">
      <v-col cols="5" sm="5" class="d-flex justify-center">
        <div class="pt-2">
          <p
            class="
              d-flex
              red--text
              justify-center
              align-bottom
              pa-0
              ma-0
              mt-2
              text-h6
              font-weight-bold
            "
          >
            10,404,123
          </p>
          <p class="d-flex pa-0 ma-0 justify-center align-top">Total Savings</p>
        </div>
      </v-col>
      <v-col cols="2" sm="2">
        <v-divider vertical></v-divider>
      </v-col>
      <v-col cols="5" sm="5" class="d-flex justify-start">
        <div class="pt-2">
          <p
            class="
              d-flex
              red--text
              justify-center
              align-bottom
              pa-0
              ma-0
              mt-2
              text-h6
              font-weight-bold
            "
          >
            10,404,123
          </p>
          <p class="d-flex pa-0 ma-0 justify-center align-top">Total Loans</p>
        </div>
      </v-col>
    </v-row>
    <v-card elevation="0" color="primary darken-1" class="py-5 mt-3" tile>
      <v-row no-gutters>
        <v-col class="d-flex justify-center mb-2 white--text" cols="12"
          >Manage Accounts</v-col
        >
        <v-col cols="4" class="ma-0 pa-0">
          <v-row no-gutters class="d-flex justify-center">
            <v-col class="d-flex flex-column align-center">
              <v-btn
                class="mb-0 mt-4"
                to="/accounts"
                x-large
                fab
                elevation="1"
                color="primary "
              >
                <v-icon dark> mdi-bank </v-icon>
              </v-btn>
              <p class="mt-2 white--text">Accounts</p>
            </v-col>
            <v-divider vertical color="white" dark inset></v-divider>
          </v-row>
        </v-col>
        <v-col cols="4" class="ma-0 pa-0">
          <v-row no-gutters class="d-flex justify-center">
            <v-col class="d-flex flex-column align-center">
              <v-btn
                class="mb-0 mt-4"
                to="/accounts"
                x-large
                fab
                elevation="1"
                color="primary "
              >
                <v-icon dark> mdi-swap-horizontal </v-icon>
              </v-btn>
              <p class="mt-2 white--text">Transfer</p>
            </v-col>
            <v-divider vertical color="white" dark inset></v-divider>
          </v-row>
        </v-col>
        <v-col cols="4" class="ma-0 pa-0">
          <v-row no-gutters class="d-flex justify-center">
            <v-col class="d-flex flex-column align-center">
              <v-btn
                class="mb-0 mt-4"
                to="/accounts/apply"
                x-large
                fab
                elevation="1"
                color="primary "
              >
                <v-icon dark> mdi-draw-pen </v-icon>
              </v-btn>
              <p class="mt-2 white--text">Apply for Loan</p>
            </v-col>
            <v-divider vertical color="white" dark inset></v-divider>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
    <v-card elevation="0" color="blue-grey lighten-4" class="py-5 mt-0" tile>
      <v-row no-gutters>
        <v-col class="d-flex justify-center mb-2" cols="12">More</v-col>
        <v-col cols="4" class="ma-0 pa-0">
          <v-row no-gutters class="d-flex justify-center">
            <v-col class="d-flex flex-column align-center">
              <v-btn
                class="mb-0 mt-4"
                to="/beneficiaries"
                x-large
                fab
                elevation="1"
                color="white"
              >
                <v-icon dark> mdi-account-supervisor </v-icon>
              </v-btn>
              <p class="mt-2">Beneficiaries</p>
            </v-col>
            <v-divider vertical color="white" dark inset></v-divider>
          </v-row>
        </v-col>
        <v-col cols="4" class="ma-0 pa-0">
          <v-row no-gutters class="d-flex justify-center">
            <v-col class="d-flex flex-column align-center">
              <v-btn
                class="mb-0 mt-4"
                to="/accounts"
                x-large
                fab
                elevation="1"
                color="white"
              >
                <v-icon dark> mdi-wallet </v-icon>
              </v-btn>
              <p class="mt-2">Charges</p>
            </v-col>
            <v-divider vertical color="white" dark inset></v-divider>
          </v-row>
        </v-col>
        <v-col cols="4" class="ma-0 pa-0">
          <v-row no-gutters class="d-flex justify-center">
            <v-col class="d-flex flex-column align-center">
              <v-btn
                class="mb-0 mt-4"
                to="/accounts"
                x-large
                fab
                elevation="1"
                color="white"
              >
                <v-icon dark> mdi-clipboard-text </v-icon>
              </v-btn>
              <p class="mt-2">Surveys</p>
            </v-col>
            <v-divider vertical color="white" dark inset></v-divider>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
    <v-container class="d-flex align-center justify-space-between px-3 py-5">
      <p class="pt-3">Contact Us</p>
      <div>
        <p class="pa-0 ma-0">+255 737 789 207</p>
        <p>info@amala.co.tz</p>
      </div>
    </v-container>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      username: "Abasi Abasi Mwinyimkuu",
      accountvisible: true,
    };
  },
  methods: {},
  mounted: function () {
    if (!this.authenticated) {
      this.$store.dispatch("_logoutsession");
    }
  },

  created() {},

  computed: {
    ...mapGetters({
      authenticated: "isAuthenticated",
      profile: "client",
    }),
  },
  created() {
    this.$store.dispatch("selfserviceclient");
  },
};
</script>
