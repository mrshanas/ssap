<template>
  <v-container>
    <v-list>
      <div v-for="transaction in transactions" :key="transaction.id">
        <v-list-item v-if="!transaction.type.accrual" :key="transaction.id">
          <v-list-item-avatar color="primary lighten-3" size="56">
            <v-icon color="primary">mdi-currency-usd</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title
              v-text="transaction.type.value"
            ></v-list-item-title>

            <v-list-item-subtitle
              >{{ transaction.currency.code }}
              {{ transaction.amount | currency }}</v-list-item-subtitle
            >
          </v-list-item-content>

          <v-list-item-action>
            {{ transaction.submittedOnDate | dateformat }}
          </v-list-item-action>
        </v-list-item>
      </div>
    </v-list>
  </v-container>
</template>
<script>
export default {
  props: {
    transactions: {
      type: Array,
      default: null,
    },
  },
};
</script>