<template>
  <v-container class="ma-0 pa-0" fluid>
    <v-container fluid class="ma-0 pa-0">
      <v-card v-if="details" tile>
        <v-list dense>
          <v-list-item two-lin class="py-0 my-0" dense two-line>
            <v-list-item-content>
              <v-list-item-title>Account Balance</v-list-item-title>
              <v-list-item-subtitle class="text-body-2 font-weight-normal mt-1"
                >{{ account.currency.code }}
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
              <v-list-item-title>Nominal Interest Rate</v-list-item-title>
              <v-list-item-subtitle class="text-body-2 font-weight-normal mt-1">
                {{ account.nominalAnnualInterestRate | percentage }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item dense two-line class="py-0 my-0">
            <v-list-item-content>
              <v-list-item-title>Total deposits</v-list-item-title>
              <v-list-item-subtitle class="text-body-2 font-weight-normal mt-1">
                {{ account.currency.code }}
                {{ account.summary.totalDeposits | currency }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item dense two-line class="py-0 my-0">
            <v-list-item-content>
              <v-list-item-title>Total Withdrawals</v-list-item-title>
              <v-list-item-subtitle class="text-body-2 font-weight-normal mt-1">
                {{
                  account.summary.totalWithdrawals ? account.currency.code : ""
                }}
                {{
                  account.summary.totalWithdrawals
                    ? account.summary.totalWithdrawals
                    : "No withdrawals" | currency
                }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content> </v-list-item-content>
            <v-list-item-action>
              <v-btn class="text-capitalize" color="primary">Deposit</v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card>
      <v-container v-if="details" class="ma-0 pa-0" fluid>
        <p class="pa-3">Last Transaction Details</p>
        <v-card>
          <v-list>
            <v-list-item dense two-line class="py-0 my-0">
              <v-list-item-content>
                <v-list-item-title>Last Transaction</v-list-item-title>
                <v-list-item-subtitle
                  class="text-body-2 font-weight-normal mt-1"
                >
                  {{ account.lastActiveTransactionDate | dateformat }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item dense two-line class="py-0 my-0">
              <v-list-item-content>
                <v-list-item-title>Made On</v-list-item-title>
                <v-list-item-subtitle
                  class="text-body-2 font-weight-normal mt-1"
                >
                  {{ account.lastActiveTransactionDate | dateformat }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item dense two-line class="py-0 my-0">
              <v-list-item-content>
                <v-list-item-title>Min. Required Balance</v-list-item-title>
                <v-list-item-subtitle
                  class="text-body-2 font-weight-normal mt-1"
                >
                  {{ account.currency.code }}
                  {{ account.minRequiredOpeningBalance | currency }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
        <p class="pa-3">Monitor</p>
        <v-card>
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
                <v-list-item-title>Transactions</v-list-item-title>
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
                <v-list-item-title>Savings Charges</v-list-item-title>
                <v-list-item-subtitle class="mt-1">
                  View Charges
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              @click="(details = !details), (tab = 2)"
              dense
              two-line
              class="py-0 my-0"
            >
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
            <v-card flat>
              <v-list dense class="py-0 my-0" two-line>
                <v-list-item-group
                  v-model="selected"
                  active-class="pink--text"
                  multiple
                >
                  <div
                    v-for="(transaction, index) in account.transactions"
                    :key="index"
                  >
                    <v-list-item :key="transaction.id">
                      <v-list-item-avatar>
                        <v-icon color="red">{{
                          transaction.transactionType.interestPosting ||
                          transaction.transactionType.deposit
                            ? "mdi-chevron-double-up"
                            : "mdi-chevron-double-down"
                        }}</v-icon>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title>{{
                          transaction.date | dateformat
                        }}</v-list-item-title>

                        <v-list-item-subtitle
                          v-text="transaction.transactionType.value"
                        ></v-list-item-subtitle>
                      </v-list-item-content>

                      <v-list-item-action>
                        <v-list-item-action-text
                          class="text-body-2 black--text"
                        >
                          {{ transaction.currency.code }}
                          {{
                            transaction.amount | currency
                          }}</v-list-item-action-text
                        >

                        <v-list-item-action-text class="text-body-1">
                          {{ transaction.currency.code }}
                          {{ transaction.runningBalance | currency }}
                        </v-list-item-action-text>
                      </v-list-item-action>
                    </v-list-item>

                    <v-divider :key="index"></v-divider>
                  </div>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-list three-line>
              <v-list-item
                class="ma-0 pa-0"
                v-for="(charge, index) in account.charges"
                :key="index"
              >
                <charge-component :charge="charge"></charge-component>
              </v-list-item>
            </v-list>
          </v-tab-item>
          <v-tab-item>
            <v-card>
              <v-container class="fill-height">
                <v-row align="center" justify="center" class="fill-height">
                  <v-icon size="200">mdi-qrcode</v-icon>
                </v-row>
              </v-container>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-container>
  </v-container>
</template>
<script>
import ComponentCharge from "~/components/charges/saving_charges.vue";
export default {
  components: {
    "charge-component": ComponentCharge,
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
      items: ["Transactions", "Charges", "QR Code"],
    };
  },
};
</script>
