<template>
  <v-list two-line class="mt-0 pt-0">
    <v-list-item-group active-class="pink--text">
      <template v-for="(account, index) in shareaccounts">
        <v-list-item :key="account.accountNo">
          <template v-slot:default="{ active }">
            <v-list-item-avatar
              max-width="1"
              :color="account.status.active ? 'primary' : 'yellow'"
              size="10"
            >
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="account.accountNo"></v-list-item-title>
              <v-list-item-subtitle
                v-html="account.productName"
              ></v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action v-if="account.totalApprovedShares">
              <p
                :class="active ? 'text--red text-subtitl-1' : 'primary--text '"
              >
                Approved {{ account.totalApprovedShares }}
              </p>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider :key="index"></v-divider>
      </template>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  props: {
    shareaccounts: {
      type: Array,
      default: null,
    },
  },
  data() {},
};
</script>

