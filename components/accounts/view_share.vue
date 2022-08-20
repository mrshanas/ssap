<template>
  <v-container class="ma-0 pa-0" fluid>
    <v-container fluid class="ma-0 pa-0">
      <v-card v-if="details" tile>
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
      <p v-if="details" class="pa-3">Monitor</p>
      <v-card v-if="details">
        <v-list>
          <v-list-item
            @click="details = !details"
            dense
            two-line
            class="py-0 my-0"
          >
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
          <v-list-item
            @click="(details = !details), (tab = 1)"
            dense
            two-line
            class="py-0 my-0"
          >
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
      <v-card v-else tile flat>
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Account Details</v-toolbar-title>
          <v-spacer> </v-spacer>
          <v-btn @click="details = !details" icon
            ><v-icon>mdi-eye-off</v-icon></v-btn
          >
          <template v-slot:extension>
            <v-tabs grow v-model="tab" align-with-title>
              <v-tabs-slider color="blue"></v-tabs-slider>

              <v-tab v-for="item in items" :key="item">
                {{ item }}
              </v-tab>
            </v-tabs>
          </template>
        </v-toolbar>

        <v-tabs-items v-model="tab">
          <v-tab-item>
            <purchased-shares-component
              :purchasedShares="account.purchasedShares"
            ></purchased-shares-component>
          </v-tab-item>
          <v-tab-item>
            <share-dividend-component
              :dividends="account.dividends"
            ></share-dividend-component>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-container>
  </v-container>
</template>
<script>
import PurchasedSharesComponent from "@/components/share/purchased_shares.vue";
import ShareDividendsComponent from "@/components/share/share_dividends.vue";
export default {
  components: {
    "purchased-shares-component": PurchasedSharesComponent,
    "share-dividend-component": ShareDividendsComponent,
  },
  props: {
    account: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      details: true,
      tab: null,
      selected: null,
      items: ["Purchased share transactions", "Dividends"],
    };
  },
};
</script>
