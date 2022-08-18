<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-list>
          <template v-for="(bn, index) in beneficiaries">
            <v-divider v-if="index != 0" :key="index"></v-divider>

            <v-list-item :key="bn.id" :to="`beneficiaries/${bn.id}`">
              <v-list-item-content>
                <v-list-item-title v-html="bn.clientName"></v-list-item-title>
                <v-list-item-subtitle
                  v-html="bn.accountNumber"
                ></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action v-html="bn.officeName"></v-list-item-action>
            </v-list-item>
          </template>
        </v-list>
      </v-col>
      <v-dialog v-model="dialog" width="700" persistent>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            fab
            dark
            absolute
            bottom
            right
            v-bind="attrs"
            v-on="on"
            @click="$store.dispatch('_getbeneficiaryaccounttypetemplate')"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>

        <v-card>
          <v-toolbar dark color="primary" elevation="0">
            <v-toolbar-title>Add beneficiary</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>

          <v-card-text>
            <template>
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                class="pa-md-4 mx-lg-auto"
              >
                <v-col cols="12">
                  <v-select
                    v-model="beneficiary.accountType"
                    :items="accounttype"
                    item-value="id"
                    dense
                    item-text="value"
                    :rules="[(v) => !!v || 'Item is required']"
                    label="Account Type"
                    required
                  >
                  </v-select>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    v-model="beneficiary.accountNumber"
                    :rules="[(v) => !!v || 'Field is required']"
                    label="Account Number"
                    required
                    dense
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    v-model="beneficiary.officeName"
                    :rules="[(v) => !!v || 'Field is required']"
                    label="Office Name"
                    required
                    dense
                  >
                  </v-text-field>
                </v-col>

                <v-col class="d-flex" cols="12">
                  <v-text-field
                    v-model="beneficiary.transferLimit"
                    type="number"
                    :rules="[(v) => !!v || 'Field is required']"
                    label="Transfer Limit"
                    required
                    dense
                    hide-details
                    single-line
                  >
                  </v-text-field>
                </v-col>

                <v-col class="d-flex" cols="12">
                  <v-text-field
                    v-model="beneficiary.name"
                    :rules="[(v) => !!v || 'Field is required']"
                    label="Beneficiary Name"
                    required
                    dense
                  >
                  </v-text-field>
                </v-col>
              </v-form>
            </template>
          </v-card-text>

          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="warning" @click="dialog = !dialog">{{
              $t("label.button.cancel")
            }}</v-btn>
            <v-btn color="primary" @click="reviewbeneficiary">{{
              $t("label.button.reviewbeneficiary")
            }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-overlay v-if="reviewdialog" absolute>
      <v-dialog v-model="reviewdialog" width="500" persistent>
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Review Beneficiary
          </v-card-title>

          <v-card-text class="mt-4">
            <v-row dense>
              <v-col cols="6" sm="6"> <p>Account Type:</p> </v-col>
              <v-col cols="6" sm="6"
                ><p>
                  {{
                    accounttype.find((x) => x.id === beneficiary.accountType)
                      .value
                  }}
                </p></v-col
              >
              <v-col cols="6"> <p>Account Number:</p></v-col>
              <v-col cols="6"
                ><p>{{ beneficiary.accountNumber }}</p></v-col
              >
              <v-col cols="6"><p>Office Name:</p></v-col>
              <v-col cols="6"
                ><p>{{ beneficiary.officeName }}</p></v-col
              >
              <v-col cols="6"><p>Transfer Limit:</p></v-col>
              <v-col cols="6"
                ><p>{{ beneficiary.transferLimit }}</p></v-col
              >
              <v-col cols="6"><p>Beneficiary Name:</p></v-col>
              <v-col cols="6"
                ><p>{{ beneficiary.name }}</p></v-col
              >
            </v-row>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="warning"
              @click="(reviewdialog = false), (dialog = true)"
            >
              cancel
            </v-btn>
            <v-btn color="primary" @click="submitForm"> add beneficiary </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog></v-overlay
    >
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      valid: true,
      reviewdialog: false,
      dialog: false,
      beneficiary: {
        accountType: null,
        officeName: null,
        transferLimit: null,
        name: null,
        accountNumber: null,
        locale: "en",
      },
    };
  },
  computed: {
    ...mapGetters({
      beneficiaries: "beneficiaries",
      accounttype: "beneficiaryaccounttype",
    }),
  },
  created() {
    this.$store.dispatch("_getbeneficiaries");
  },
  methods: {
    reviewbeneficiary() {
      if (this.$refs.form.validate()) {
        this.reviewdialog = !this.reviewdialog;
        this.dialog = false;
      }
    },

    submitForm() {
      this.$store.dispatch("_createbeneficiary", this.beneficiary);
      this.dialog = !this.dialog;
    },
  },
};
</script>
