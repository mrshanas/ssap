<template>
  <v-container>
    <v-list class="pa-0" three-line>
      <v-card
        flat
        elevation="1"
        v-for="(share, index) in purchasedShares"
        :key="index"
        class="mt-2"
      >
        <v-list-item class="ma-0 pa-0" :key="index">
          <v-list-item-avatar>
            <v-icon
              v-if="share.type.code === 'purchasedSharesType.redeemed'"
              size="56"
              color="warning"
              >mdi-menu-down</v-icon
            >
            <v-icon v-else size="56" color="primary">mdi-menu-up</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-row dense>
              <v-col cols="8"> {{ share.purchasedDate | dateformat }}</v-col>
              <v-col cols="4" class="d-flex justify-start"
                >Shares: {{ share.numberOfShares }}</v-col
              >

              <v-col cols="8"> {{ share.type.value }}</v-col>
              <v-col cols="4" class="d-flex justify-start"
                >Price: {{ share.purchasedPrice }}</v-col
              >
              <v-col cols="8">
                {{
                  share.paymentDetailData
                    ? share.paymentDetailData.paymentType.name
                    : null
                }}</v-col
              >
              <v-col cols="4" class="d-flex justify-start"
                >Total: {{ share.chargeAmount }}</v-col
              >
            </v-row>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-list>
  </v-container>
</template>
<script>
export default {
  props: {
    purchasedShares: {
      type: Array,
      default: null,
    },
  },
};
</script>