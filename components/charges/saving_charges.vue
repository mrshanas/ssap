<template>
  <v-container>
    <v-alert
      border="left"
      colored-border
      :color="!charge.isActive ? 'black' : 'deposit'"
      elevation="1"
    >
      <v-row dense>
        <v-col class="font-weight-bold" cols="8"> {{ charge.name }}</v-col>
        <v-col cols="4" class="d-flex justify-start"></v-col>
        <v-col class="font-weight-bold" cols="8"> Amount</v-col>
        <v-col cols="4" class="d-flex justify-start">
          {{ charge.amountOrPercentage | currency }}
          {{ charge.chargeCalculationType.value }}</v-col
        >
        <v-col class="font-weight-bold" cols="8"> Paid:</v-col>
        <v-col cols="4" class="d-flex justify-start"
          >{{ charge.currency.code }} {{ charge.amountPaid | currency }}</v-col
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
  </v-container>
</template>
<script>
export default {
  props: {
    charge: {
      type: Object,
      default: null,
    },
  },
};
</script>