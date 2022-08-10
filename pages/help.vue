<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center" class="fill-height">

      <v-col cols="12">
        <v-card>

          <div class="pa-md-4">
            <div class="text-h4">Frequently Asked Questions</div>
          </div>
          <v-col cols="16"></v-col>
          <v-list>
            <v-list-group color="dlue" v-for="item in items" :key="item.title">
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title class="text-h6" color="dlue" v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item color="dlue" v-for="child in item.items" :key="child.title">
                <v-list-item-content>
                  <v-list-item-title class="text-h6" color="dlue" v-text="child.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-list>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {

        items: [{ title: 'To apply for loan account, click on " Apply for Loan " given on the Side Navigation' }],
        title: 'How do I apply for new loan account?',
      },
      {


        items: [
          { title: 'You can view your profile information by clicking on the User icon at the top right position' },
        ],
        title: 'Where can I view my profile information?',
      },
      {

        items: [{ title: 'To view your savings account transactions, navigate to the Account Sections, the Savings and click on the Saving Accounts' }],
        title: 'Where can I see my Savings Account Transactions?',
      },
      {

        items: [{ title: 'To make a payment for a loan account, navigate to the Accounts sections, LOAN then open your required Loan Account and click on Make Payment option' }],
        title: 'How to make a payment for Loan Account?',
      },

    ]
  })


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
