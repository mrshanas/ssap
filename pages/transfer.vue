<template>
  <v-container fluid>
    <!-- <v-row align="center" justify="center" class="fill-height">
      <p>Under development</p>
    </v-row> -->
    <v-card flat>
      <v-card-title class="text-h4">Third Party Transfer</v-card-title>

      <v-form class="pa-5">
        <v-row>
          <v-col class="d-flex" cols="12">
            <v-select
              :items="getToOptions"
              item-text="display"
              v-model="selected.toAccountId"
              label="Pay To"
              item-value="accountId"
            >
            </v-select>
          </v-col>

          <v-col class="d-flex" cols="12">
            <v-select
              :items="getFromOptions"
              item-text="display"
              v-model="selected.fromAccountId"
              label="Pay From"
              item-value="accountId"
            >
            </v-select>
          </v-col>

          <v-col class="d-flex" cols="12">
            <v-text-field
              type="number"
              label="Amount"
              v-model="selected.transferAmount"
            >
            </v-text-field>
          </v-col>

          <v-col class="d-flex" cols="12">
            <v-text-field type="text" disabled :value="date"></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              label="Remark"
              hide-details="auto"
              :rules="rules"
              v-model="selected.transferDescription"
            ></v-text-field>
          </v-col>

          <v-col cols="12" class="d-flex">
            <v-btn
              color="primary"
              type="reset"
              style="margin-right: 3%"
              >RESET</v-btn
            >
            <!-- <v-spacer></v-spacer> -->
            <v-dialog v-model="dialog" persistent max-width="250">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="warning"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  >REVIEW TRANSFER</v-btn
                >
              </template>
              <v-card auto-grow>
                <v-card-title class="text-h5">REVIEW TRANSFER</v-card-title>
                <v-card-text>
                  <h2>Transfer To:</h2>
                  <p>Account No: {{ selected.toAccountId }}</p>
                  <h2>Transfer From:</h2>
                  <p>Account No: {{ selected.fromAccountId }}</p>
                  <h2>Amount:</h2>
                  <p>{{ selected.transferAmount }}</p>
                  <h2>Transfer Date:</h2>
                  <p>{{ selected.transferDate }}</p>
                  <h2>Remarks:</h2>
                  <p>{{ selected.transferDescription }}</p>
                </v-card-text>
                <v-card-actions>
                  <v-row>
                    <v-spacer></v-spacer>
                    <v-btn color="red accent-1" @click="dialog = false">
                      CANCEL
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="green" type="submit" @click="submitForm">
                      TRANSFER NOW
                    </v-btn>
                  </v-row>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
// import { log } from "~/static/lib/core/pdfjs/PDFJSDocumentType";
export default {
  data() {
    return {
      date: new Date().toLocaleString("en-UK", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      selected: {
        fromOfficeId: 0,
        fromClientId: this.clientId,
        fromAccountType: 0,
        fromAccountId: 0,
        toOfficeId: 0,
        toClientId: this.clientId,
        toAccountType: 0,
        toAccountId: 2,
        dateFormat: "dd MMMM yyyy",
        locale: "en",
        transferDate: new Date().toLocaleString("en-UK", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }),
        transferAmount: "",
        transferDescription: "",
      },
      dialog: false,
      rules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 3 characters",
      ],
    };
  },
  methods: {
    openModal() {
      dialog = true;
      console.log({ selected });
    },
    findObject(id, iter) {
      const index = iter.findIndex((el) => el.accountId == id);

      return iter[index];
    },

    submitForm() {
      const prof = this.profile;
      this.selected.fromOfficeId = prof.officeId;
      this.selected.toOfficeId = prof.officeId;
      let toId = this.selected.toAccountId,
        fromId = this.selected.fromAccountId;
      const toIndex = this.getToOptions.findIndex((el) => el.accountId == toId);
      const fromIndex = this.getFromOptions.findIndex((el) => fromId);

      const fromObj = this.getFromOptions[fromIndex];
      const toObj = this.getToOptions[toIndex];

      this.selected.toAccountType = toObj.accountType.id;
      this.selected.fromAccountType = fromObj.accountType.id;

      this.selected.fromClientId = this.clientId;
      this.selected.toClientId = this.clientId;

      this.$store.dispatch("_transfer", this.selected);
    },
  },

  computed: {
    ...mapGetters({
      getToOptions: "getToOptions",
      getFromOptions: "getFromOptions",
      profile: "profile",
    }),
    // selectedData() {
    //   let selected = this.selected;
    //   console.log(selected);
    //   const fromAcc = this.getToOptions.filter(function (item) {
    //     return item.accountId === selected.toAccountId;
    //   });
    //   const toAcc = this.getFromOptions.filter(function (item) {
    //     return item.accountId === selected.fromAccountId;
    //   });
    //   return { fromAcc, toAcc };
    // },
  },
  mounted() {
    console.log(this.loansAccounts);
  },
  created() {
    // this.$store.dispatch("_getaccounts", this.clientId);
    this.$store.dispatch("_gettransferaccs");
  },
};
</script>
<style>
#app {
  font-family: "Lato", sans-serif;
}
.routeLink {
  text-decoration: none;
}
</style>
