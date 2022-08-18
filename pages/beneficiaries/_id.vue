<template>
  <v-container fluid class="ma-0 pa-0">
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
        &nbsp; &nbsp; Settings</v-toolbar-title
      >
    </v-toolbar>
    <v-container class="pa-4">
      <p class="text-h5">Beneficiary details</p>

      <v-row>
        <v-col class="font-weight-bold" cols="8"> Beneficiary Name</v-col>
        <v-col cols="4" class="d-flex justify-start">{{
          beneficiary.name
        }}</v-col>
        <v-col class="font-weight-bold" cols="8"> Account Number</v-col>
        <v-col cols="4" class="d-flex justify-start">{{
          beneficiary.accountNumber
        }}</v-col>
      </v-row>
      <v-card elevation="1" class="mt-4 pa-3" outlined>
        <v-row dense>
          <v-col class="font-weight-bold" cols="8"> Client Name</v-col>
          <v-col cols="4" class="d-flex justify-start">{{
            beneficiary.clientName
          }}</v-col>
          <v-col class="font-weight-bold" cols="8"> Account Type</v-col>
          <v-col cols="4" class="d-flex justify-start">{{
            beneficiary.accountType.value
          }}</v-col>
          <v-col class="font-weight-bold" cols="8"> Transfer Limit</v-col>
          <v-col cols="4" class="d-flex justify-start">{{
            beneficiary.transferLimit
          }}</v-col>
          <v-col class="font-weight-bold" cols="8"> Office Name</v-col>
          <v-col cols="4" class="d-flex justify-start">{{
            beneficiary.officeName
          }}</v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-container>
</template>
<script>
export default {
  layout: "views",
  data() {
    return {
      beneficiary: null,
    };
  },
  created() {
    this.filterbeneficiary();
  },
  methods: {
    filterbeneficiary() {
      this.beneficiary = this.$store.getters.beneficiary(this.$route.params.id);
    },
  },
};
</script>