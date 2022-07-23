<template>
  <v-container class="ma-0 pa-0" fluid>
    <v-container fluid class="ma-0 pa-0">
      <v-card tile>
        <v-list dense>
          <v-list-item two-lin class="py-0 my-0" dense two-line>
            <v-list-item-content>
              <v-list-item-title>Product Name</v-list-item-title>
              <v-list-item-subtitle class="text-body-2 font-weight-normal mt-1"
                >{{ account.productName }}
                {{
                  account.summary.accountBalance | currency
                }}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item dense two-lin class="py-0 my-0">
            <v-list-item-content>
              <v-list-item-title>Account Status</v-list-item-title>
              <v-list-item-subtitle class="text-body-2 font-weight-normal mt-1">
                <v-icon
                  x-small
                  :color="account.status.active ? 'yellow darken-2' : 'gray'"
                  >mdi-circle</v-icon
                >&nbsp;&nbsp;{{ account.status.value }}
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
              <v-list-item-title>Total Approved</v-list-item-title>
              <v-list-item-subtitle class="text-body-2 font-weight-normal mt-1">
                {{ account.summary.totalApprovedShares }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item dense two-line class="py-0 my-0">
            <v-list-item-content>
              <v-list-item-title>Total Pendings</v-list-item-title>
              <v-list-item-subtitle class="text-body-2 font-weight-normal mt-1">
                {{ account.summary.totalPendingForApprovalShares }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-container>
            <v-list>
              <v-list-item dense two-line class="py-0 my-0">
                <v-list-item-content>
                  <v-list-item-title>Submission Date</v-list-item-title>
                  <v-list-item-subtitle
                    class="text-body-2 font-weight-normal mt-1"
                  >
                    {{ account.timeline.submittedOnDate | dateformat }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item dense two-line class="py-0 my-0">
                <v-list-item-content>
                  <v-list-item-title>Approved Date</v-list-item-title>
                  <v-list-item-subtitle
                    class="text-body-2 font-weight-normal mt-1"
                  >
                    {{ account.timeline.approvedDate | dateformat }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item dense two-line class="py-0 my-0">
                <v-list-item-content>
                  <v-list-item-title>Activation Date</v-list-item-title>
                  <v-list-item-subtitle
                    class="text-body-2 font-weight-normal mt-1"
                  >
                    {{ account.timeline.approvedDate | dateformat }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-container>
        </v-list>
      </v-card>
      <p class="pa-3">Monitor</p>
      <v-card>
        <v-list>
          <v-list-item dense two-line class="py-0 my-0">
            <v-list-item-avatar color="grey lighten-3">
              <v-icon color="primary" dark> mdi-swap-horizontal </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Purchased Shares</v-list-item-title>
              <v-list-item-subtitle class="mt-1">
                View Transactions
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item dense two-line class="py-0 my-0">
            <v-list-item-avatar color="grey lighten-3">
              <v-icon color="primary" dark>mdi-currency-rub </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Dividends</v-list-item-title>
              <v-list-item-subtitle class="mt-1">
                View dividends
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
