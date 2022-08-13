<template>
  <v-container class="fill-height">
    <div class="pb-12">
      <div class="font-weight-bold">Frequently Asked Questions</div>
    </div>

    <v-row justify="center">
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="(question, i) in questions" :key="i">
          <v-expansion-panel-header
            >{{ question.title }}
            <template v-slot:actions>
              <v-icon color="primary"> mdi-menu-down </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            {{ question.answer }}</v-expansion-panel-content
          >
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          title: "How do I apply for new loan account?",
          answer:
            "To apply for loan account, click on Apply for Loan  given on the Side Navigation",
        },
        {
          title: "Where can I view my profile information?",
          answer:
            "You can view your profile information by clicking on the User icon at the top right position",
        },
        {
          title: "Where can I see my Savings Account Transactions?",
          answer:
            "To view your savings account transactions, navigate to the Accounts Sections, click on the required savings account, scroll to Monitor section and click View Transactions",
        },
        {
          title: "What is the use of QR Code ?",
          answer:
            "QrCode for any loan or saving accounts can be shared with other users which will allow thme to create a beneficiary",
        },
        {
          title: "How to create beneficiary using QR Code ?",
          answer:
            "In order to create a Beneficiary go to Beneficiary option from Home Screen then click " +
            "on the circular button present on bottom right, choose the option to Scan which open your device camera, " +
            "scan the QR Code of other person foor which you want to create a beneficiary, after filling in the other required detail " +
            "you will be able to create a Beneficiary using QR Code",
        },

        {
          title: "How to make a payment for Loan Account?",
          answer:
            " To make a payment for a loan account, navigate to the Accounts sections, LOAN then open your required Loan Account and click on Make Payment option",
        },
      ],
    };
  },
};
</script>


