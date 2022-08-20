<template>
  <v-container class="pa-5">
    <v-row dense>
      <v-col class="font-weight-bold" cols="8"> A/C</v-col>
      <v-col cols="4" class="d-flex justify-start">{{ accountNumber }}</v-col>
      <v-col class="font-weight-bold" cols="8"> Loan Product</v-col>
      <v-col cols="4" class="d-flex justify-start">{{ productName }}</v-col>
      <v-col class="font-weight-bold" cols="8"> Loan Purpose</v-col>
      <v-col cols="4" class="d-flex justify-start">{{ loanPurpose }}</v-col>
    </v-row>
    <v-card class="mt-5 pa-4">
      <v-row dense>
        <v-col cols="8"> Principal</v-col>
        <v-col cols="4" class="d-flex justify-start">
          {{ summary.currency.code }}
          {{ summary.principalDisbursed | currency }}</v-col
        >
        <v-col cols="8"> Interest</v-col>
        <v-col cols="4" class="d-flex justify-start"
          >{{ summary.currency.code }}
          {{ summary.interestCharged | currency }}</v-col
        >
        <v-col cols="8"> Fees</v-col>
        <v-col cols="4" class="d-flex justify-start"
          >{{ summary.currency.code }}
          {{ summary.feeChargesCharged | currency }}</v-col
        >
        <v-col cols="8">Penalties</v-col>
        <v-col cols="4" class="d-flex justify-start"
          >{{ summary.currency.code }}
          {{ summary.penaltyChargesCharged | currency }}</v-col
        >
      </v-row>
    </v-card>

    <v-card class="mt-5 pa-4">
      <v-row dense>
        <v-col cols="8"> Total Expected Repayment</v-col>
        <v-col cols="4" class="d-flex justify-start"
          >{{ summary.currency.code }}
          {{ summary.totalExpectedRepayment | currency }}</v-col
        >
        <v-col cols="8">Total Paid</v-col>
        <v-col cols="4" class="d-flex justify-start"
          >{{ summary.currency.code }}
          {{ summary.totalRepayment | currency }}</v-col
        >
        <v-col cols="8">Interest Waived</v-col>
        <v-col cols="4" class="d-flex justify-start"
          >{{ summary.currency.code }}
          {{ summary.interestWaived | currency }}</v-col
        >
        <v-col cols="8">Penalties Waived</v-col>
        <v-col cols="4" class="d-flex justify-start"
          >{{ summary.currency.code }}
          {{ summary.penaltyChargesWaived | currency }}</v-col
        >
        <v-col cols="8">Fee Waived</v-col>
        <v-col cols="4" class="d-flex justify-start"
          >{{ summary.currency.code }}
          {{ summary.feeChargesWaived | currency }}</v-col
        >
      </v-row>
    </v-card>

    <v-card class="mt-5 pa-4">
      <v-row dense>
        <v-col cols="8">Outstanding Balance</v-col>
        <v-col cols="4" class="d-flex justify-start"
          >{{ summary.currency.code }}
          {{ summary.totalOutstanding | currency }}</v-col
        >
        <v-col cols="8">Account Status</v-col>
        <v-col cols="4" class="d-flex justify-start text-uppercase"
          >{{ status.value }} &nbsp;&nbsp;
          <v-icon
            small
            :color="status.active ? 'deposit' : 'red'"
            v-html="status.active ? 'mdi-circle' : 'mdi-alert'"
          ></v-icon
        ></v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
export default {
  props: {
    summary: {
      type: Object,
      default: null,
    },
    status: {
      type: Object,
      default: null,
    },
    productName: {
      type: String,
      default: null,
    },
    loanPurpose: {
      type: String,
      default: null,
    },
    accountNumber: {
      type: String,
      default: null,
    },
  },
};
</script>