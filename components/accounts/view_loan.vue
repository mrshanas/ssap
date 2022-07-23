<template>
  <v-container class="ma-0 pa-0" fluid>
    <v-container fluid class="ma-0 pa-0">
      <v-card tile>
        <v-list dense>
          <v-list-item two-lin class="py-0 my-0" dense two-line>
            <v-list-item-content>
              <v-list-item-title>Outstanding Balance</v-list-item-title>
              <v-list-item-subtitle class="text-body-2 font-weight-normal mt-1"
                >{{ account.currency.code }}
                {{
                  account.summary.totalOutstanding | currency
                }}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item dense two-lin class="py-0 my-0">
            <v-list-item-content>
              <v-list-item-title>Next Installment</v-list-item-title>
              <v-list-item-subtitle class="text-body-2 font-weight-normal mt-1">
                {{ account.status.value }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item dense two-line class="py-0 my-0">
            <v-list-item-content>
              <v-list-item-title>Maturity Date</v-list-item-title>
              <v-list-item-subtitle class="text-body-2 font-weight-normal mt-1">
                {{ account.timeline.expectedMaturityDate | dateformat }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item dense two-line class="py-0 my-0">
            <v-list-item-content>
              <v-list-item-title>Account Number</v-list-item-title>
              <v-list-item-subtitle class="text-body-2 font-weight-normal mt-1">
                {{ account.accountNo }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item dense two-line class="py-0 my-0">
            <v-list-item-content>
              <v-list-item-title>Loan Type</v-list-item-title>
              <v-list-item-subtitle class="text-body-2 font-weight-normal mt-1">
                {{ account.loanType.value }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item dense two-line class="py-0 my-0">
            <v-list-item-content>
              <v-list-item-title>Currency</v-list-item-title>
              <v-list-item-subtitle class="text-body-2 font-weight-normal mt-1">
                {{ account.currency.code }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content> </v-list-item-content>
            <v-list-item-action>
              <v-btn class="text-capitalize" color="primary"
                >Make Repayment</v-btn
              >
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card>

      <p class="pa-3">Monitor</p>
      <v-card>
        <v-list>
          <v-list-item dense two-line class="py-0 my-0">
            <v-list-item-avatar color="grey lighten-3">
              <v-icon color="primary" dark>mdi-clipboard-text </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Loan Summary</v-list-item-title>
              <v-list-item-subtitle class="mt-1">
                View Loan summary
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item dense two-line class="py-0 my-0">
            <v-list-item-avatar color="grey lighten-3">
              <v-icon color="primary" dark>mdi-currency-rub </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Savings Charges</v-list-item-title>
              <v-list-item-subtitle class="mt-1">
                View Charges
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item dense two-line class="py-0 my-0">
            <v-list-item-avatar color="grey lighten-3">
              <v-icon color="primary" dark>mdi-currency-rub </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Repayment Schedule</v-list-item-title>
              <v-list-item-subtitle class="mt-1">
                View Repayment Schedule
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item dense two-line class="py-0 my-0">
            <v-list-item-avatar color="grey lighten-3">
              <v-icon color="primary" dark> mdi-swap-horizontal </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Transactions</v-list-item-title>
              <v-list-item-subtitle class="mt-1">
                View Transactions
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item dense two-line class="py-0 my-0">
            <v-list-item-avatar color="grey lighten-3">
              <v-icon color="primary" dark> mdi-qrcode </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>QR Code</v-list-item-title>
              <v-list-item-subtitle class="mt-1">
                View QR Code for this account
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-container>
  </v-container>
</template>
<script>
export default {
  props: {
    account: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {};
  },
};
</script>
