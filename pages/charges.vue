<template>
  <v-container v-if="charges == null" class="fill-height">
    <v-row align="center" justify="center" class="fill-height">
      <v-progress-circular :size="50" color="primary" indeterminate>
        <v-icon>mdi-cloud</v-icon>
      </v-progress-circular>
    </v-row>
  </v-container>
  <v-container v-else>
    <!---<v-row align="center" justify="center" class="fill-height">
      <v-col cols="12">
        <v-card flat>
          <v-card-title
            ><h3>Charges</h3>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              hint="Search..."
              placeholder="Search . . ."
              single-line
              hide-details
              outlined
            ></v-text-field
          ></v-card-title>
          <v-data-table
            :headers="styledHeaders"
            :items="charges"
            :search="search"
            :mobile-breakpoint="mobileBreakPoint"
            hide-default-footer
            :custom-filter="getSearchData"
          >
            <template v-slot:item.status="{ item }">
              <v-chip :color="getColor(item.status)">{{ item.status }}</v-chip>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>-->
    <v-list three-line>
      <v-list-item
        class="ma-0 pa-0"
        v-for="(charge, index) in charges"
        :key="index"
      >
        <v-alert
          border="left"
          colored-border
          :color="charge.isPaid ? 'black' : 'primary'"
          elevation="2"
        >
          <v-row dense>
            <v-col class="font-weight-bold" cols="8"> {{ charge.name }}</v-col>
            <v-col cols="4" class="d-flex justify-start">{{
              charge.dueDate | simpledateformat
            }}</v-col>
            <v-col class="font-weight-bold" cols="8"> Due:</v-col>
            <v-col cols="4" class="d-flex justify-start"
              >{{ charge.currency.code }} {{ charge.amount | currency }}</v-col
            >
            <v-col class="font-weight-bold" cols="8"> Paid:</v-col>
            <v-col cols="4" class="d-flex justify-start"
              >{{ charge.currency.code }}
              {{ charge.amountPaid | currency }}</v-col
            >
            <v-col class="font-weight-bold" cols="8"> Waved:</v-col>
            <v-col cols="4" class="d-flex justify-start"
              >{{ charge.currency.code }}
              {{ charge.amountWaived | currency }}</v-col
            >
            <v-col class="font-weight-bold" cols="8"> Outstanding:</v-col>
            <v-col cols="4" class="d-flex justify-start"
              >{{ charge.currency.code }}
              {{ charge.amountOutstanding | currency }}</v-col
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
    this.$store.dispatch("_getcharges", this.clientId);
  },
  computed: {
    styledHeaders() {
      return this.headers.map((item) => ({ ...item, ["class"]: "primary" }));
    },
    ...mapGetters({
      charges: "charges",
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
