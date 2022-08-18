<template>
  <v-container v-if="transactions == null" class="fill-height">
    <v-row align="center" justify="center" class="fill-height">
      <v-progress-circular :size="50" color="primary" indeterminate>
        <v-icon>mdi-cloud</v-icon>
      </v-progress-circular>
    </v-row>
  </v-container>

  <v-container v-else>
    <v-list three-line>
      <v-list-item
        class="ma-0 pa-0"
        v-for="(transaction, index) in transactions"
        :key="index"
      >
        <v-alert
          border="left"
          colored-border
          :color="transaction.isPaid || transaction.isWaived ? 'black' : 'deposit'"
          elevation="1"
        >
          <v-row dense>
            <v-col class="font-weight-bold" cols="8"> {{ transaction.name }}</v-col>
            <v-col cols="4" class="d-flex justify-start">{{
              transaction.dueDate | simpledateformat
            }}</v-col>
            <v-col class="font-weight-bold" cols="8"> Due:</v-col>
            <v-col cols="4" class="d-flex justify-start"
              >{{ transaction.currency.code }} {{ transaction.amount | currency }}</v-col
            >
            <v-col class="font-weight-bold" cols="8"> Paid:</v-col>
            <v-col cols="4" class="d-flex justify-start"
              >{{ transaction.currency.code }}
              {{ transaction.amountPaid | currency }}</v-col
            >
            <v-col class="font-weight-bold" cols="8"> Waved:</v-col>
            <v-col cols="4" class="d-flex justify-start"
              >{{ transaction.currency.code }}
              {{ transaction.amountWaived | currency }}</v-col
            >
            <v-col class="font-weight-bold" cols="8"> Outstanding:</v-col>
            <v-col cols="4" class="d-flex justify-start"
              >{{ transaction.currency.code }}
              {{ transaction.amountOutstanding | currency }}</v-col
            >
          </v-row>
        </v-alert>
      </v-list-item>
    </v-list>
     </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
   data: () => ({
    search: null,
    headers: [
      {
        text: "Status",
        align: "start",
        filterable: true,
        value: "status",
      },
      { text: "Name", align: "start", filterable: false, value: "name" },
      {
        text: "Due As Of",
        align: "start",
        filterable: false,
        value: "dueAsOf",
      },
      { text: "Due", align: "start", filterable: false, value: "due" },
      { text: "Paid", align: "start", filterable: false, value: "paid" },
      { text: "Waived", align: "start", filterable: false, value: "waived" },
      {
        text: "Outstanding Balance",
        align: "start",
        filterable: false,
        value: "outstanding",
      },
    ],
  }),
  created() {
    this.$store.dispatch("_gettransactions", this.clientId);
  },
  computed: {
    styledHeaders() {
      return this.headers.map((item) => ({ ...item, ["class"]: "primary" }));
    },
    ...mapGetters({
      transactions: "transactions",
    }),
  },
  methods: {
    getColor(status) {
      return status === "Paid" ? "green" : "orange";
    },
    getSearchData: (value, search, item) => value == item.status,
  },
};


</script>

