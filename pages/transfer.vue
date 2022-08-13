<template>
  <v-container fluid>
    <v-card flat>
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
            <v-btn color="primary" type="reset" style="margin-right: 3%"
              >RESET</v-btn
            >
            <!-- <v-spacer></v-spacer> -->
            <v-dialog v-model="dialog" persistent class="pa-3">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="warning" dark v-bind="attrs" v-on="on"
                  >REVIEW TRANSFER</v-btn
                >
              </template>
              <v-card flat auto-grow>
                <v-toolbar
                  elevation="0"
                  color="primary"
                  dark
                  class="font-weight-bold"
                  >Review transfer</v-toolbar
                >
                <v-card-text class="mt-2">
                  <v-row dense>
                    <v-col cols="7">
                      <p class="font-weight-bold">Transfer To:</p>
                    </v-col>
                    <v-col cols="5">
                      Account No: {{ selected.toAccountId }}
                    </v-col>
                    <v-col cols="7">
                      <p class="font-weight-bold">Transfer From:</p>
                    </v-col>
                    <v-col cols="5">
                      <p>Account No: {{ selected.fromAccountId }}</p>
                    </v-col>
                    <v-col cols="7">
                      <p class="font-weight-bold">Amount:</p>
                    </v-col>
                    <v-col cols="5">
                      <p>{{ selected.transferAmount }}</p>
                    </v-col>
                    <v-col cols="7">
                      <p class="font-weight-bold">Transfer Date:</p>
                    </v-col>
                    <v-col cols="5">
                      <p>{{ selected.transferDate }}</p>
                    </v-col>
                    <v-col cols="7">
                      <p class="font-weight-bold">Remarks:</p>
                    </v-col>
                    <v-col cols="5">
                      <p>{{ selected.transferDescription }}</p>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="dialog = false">
                    CANCEL
                  </v-btn>
                  <v-btn color="warning" type="submit" @click="submitForm">
                    Transfer Now
                  </v-btn>
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
