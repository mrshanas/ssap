<template>

  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <h1>Beneficiaries List</h1>
            <v-spacer>
            </v-spacer>
            <v-text-field v-model="search" append-icon="mdi-magnify" hint="Search..." placeholder="Search . . ."
              outlined label="Search" single-line hide-details>
            </v-text-field>
          </v-card-title>
          <v-data-table v-if="beneficiaries.length > 0" :headers="headers" :items="beneficiaries" :search="search"
            :mobile-breakpoint="mobileBreakPoint" hide-default-footer :custom-filter="getSearchData">
            <template></template>
          </v-data-table>

        </v-card>
      </v-col>
      <v-dialog v-model="dialog" width="700">

        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" fab dark absolute bottom right v-bind="attrs" v-on="on"
            @click="$store.dispatch('_getbeneficiaryaccounttypetemplate')">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Add Beneficiary
          </v-card-title>

          <template>
            <v-form ref="form" v-model="valid" lazy-validation class="pa-md-4 mx-lg-auto">
              <v-col class="d-flex" cols="12">
                <v-select v-model="beneficiary.accountType" :items="accounttype" item-value="id" item-text="value"
                  :rules="[v => !!v || 'Item is required']" label="Account Type" required>
                </v-select>
              </v-col>

              <v-col class="d-flex" cols="12">
                <v-text-field v-model="beneficiary.accountNumber" :rules="numberRules" label="Account Number" required>
                </v-text-field>
              </v-col>

              <v-col class="d-flex" cols="12">
                <v-text-field v-model="beneficiary.officeName" :rules="nameRules" label="Office Name" required>
                </v-text-field>
              </v-col>

              <v-col class="d-flex" cols="12">
                <v-text-field v-model="beneficiary.transferLimit" type="number" label="Transfer Limit" required>
                </v-text-field>
              </v-col>

              <v-col class="d-flex" cols="12">
                <v-text-field v-model="beneficiary.name" :rules="nameRules" label="Beneficiary Name" required>
                </v-text-field>
              </v-col>


              <v-btn color="error" class="mr-4" @click="dialog = false">
                cancel
              </v-btn>

              <!-- <v-spacer></v-spacer> -->
              <v-dialog v-model="dialog2" persistent max-width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="success" class="mr-4" absolute right @click="reviewBeneficiary()">
                    Review Beneficiary
                  </v-btn>
                </template>
                <v-card auto-grow>
                  <v-card-title class="text-h5">REVIEW BENEFICIARY</v-card-title>
                  <v-card-text>
                    <p>Account Type: {{ beneficiary.accountType }}</p>
                    <p>Account Number: {{ beneficiary.accountNumber }}</p>
                    <p>Office Name:{{ beneficiary.officeName }}</p>
                    <p>Transfer Limit: {{ beneficiary.transferLimit }}</p>
                    <p>Beneficiary Name: {{ beneficiary.name }}</p>
                  </v-card-text>
                  <v-card-actions>
                    <v-row>
                      <v-spacer></v-spacer>
                      <v-btn color="red accent-1" @click="dialog2 = false">
                        CANCEL
                      </v-btn>
                      <v-spacer></v-spacer>
                      <v-btn color="green" type="submit" @click="submitForm()">
                        ADD BENEFICIARY
                      </v-btn>
                    </v-row>
                  </v-card-actions>
                </v-card>
              </v-dialog>



            </v-form>
          </template>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-row>
  </v-container>


</template>

<script>
import { Computed, mapGetters } from 'vuex';

export default {
  data() {
    return {
      selectOption: null,
      nameRules: v => !!v || 'field is required',
      valid: true,
      numberRules: v => !!v || 'field is required',
      beneficiary: {
        accountType: null,
        officeName: null,
        transferLimit: null,
        name: null,
        accountNumber: null,
        locale: "en"
      },
      dialog: false,
      dialog2: false,
      search: "",
      headers: [
        { text: "Id", align: "start", filterable: false, value: "id" },
        { text: "Account#", align: "start", filterable: false, value: "account#" },
        { text: "Account Type", align: "start", filterable: false, value: "account type" },
        { text: "Transfer Limit", align: "start", filterable: false, value: "transfer limit" },
        { text: "Name", align: "start", filterable: false, value: "name" },
        { text: "Office Name", align: "start", filterable: false, value: "office name" },
        { text: "Client Name", align: "start", filterable: false, value: "client name" },
        { text: "Actions", align: "start", filterable: false, value: "actions" },
      ],


    }
  },
  computed: {
    ...mapGetters({
      beneficiaries: "beneficiaries",
      accounttype: "beneficiaryaccounttype"

    }),
  },
  methods: {
    addBeneficiary() { this.dialog = !this.dialog },
    reviewBeneficiary() { this.dialog2 = !this.dialog2 },



    submitForm() {

      //console.log(this.beneficiary)
      this.$store.dispatch("_createbeneficiary", this.beneficiary)
    }

  },




}

</script>
