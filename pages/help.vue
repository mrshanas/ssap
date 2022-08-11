<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center" class="fill-height">

      <v-col cols="12">
        <v-card>

          <div class="pa-md-4">
            <div class="text-h4">Frequently Asked Questions</div>
          </div>
          <v-col cols="16"></v-col>


          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header class="text-h5">
                How do I apply for new loan account?
                <template v-slot:actions>
                  <v-icon color="dlue">
                    $expand
                  </v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="text-h6">
                  To apply for loan account, click on " Apply for Loan " given on the Side Navigation</div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>


          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header class="text-h5">
                Where can I view my profile information?
                <template v-slot:actions>
                  <v-icon color="dlue">
                    $expand
                  </v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="text-h6">
                  You can view your profile information by clicking on the User icon at the top
                  right position</div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header class="text-h5">Where can I see my Savings Account Transactions?<template
                  v-slot:actions>
                  <v-icon color="primary">
                    $expand
                  </v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="text-h6">
                  To view your savings account transactions, navigate to the Account Sections, the
                  Savings and click on the Saving Accounts</div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>


          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header class="text-h5">How to make a payment for Loan Account?<template v-slot:actions>
                  <v-icon color="primary">
                    $expand
                  </v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="text-h6">
                  To make a payment for a loan account, navigate to the Accounts sections, LOAN then
                  open your required Loan Account and click on Make Payment option</div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

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
