<template>
  <v-container fluid>
    <v-list class="pa-0" three-line>
      <v-card
        flat
        elevation="1"
        v-for="(dividend, index) in dividends"
        :key="index"
        class="mt-2 pr-2"
      >
        <v-list-item class="ma-0 pa-0" :key="index">
          <v-list-item-avatar>
            <v-icon
              v-if="
                dividend.status.code == 'shareAccountDividendStatusType.posted'
              "
              size="56"
              color="primary"
              >mdi-menu-up</v-icon
            >
            <v-icon v-else size="56" color="error">mdi-menu-down</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title> {{ dividend.postedDate }}</v-list-item-title>
            <v-list-item-subtitle
              >Amount: {{ dividend.amount | currency }}</v-list-item-subtitle
            >
          </v-list-item-content>
          <v-list-item-action>
            {{ dividend.status.value }}
          </v-list-item-action>
        </v-list-item>
      </v-card>
    </v-list>
  </v-container>
</template>
<script>
export default {
  props: {
    dividends: {
      type: Array,
      default: null,
    },
  },
};
</script>