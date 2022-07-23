import Vue from 'vue';
import { mapGetters } from "vuex";
Vue.mixin({

  layout: 'default',
  data: function () {
    return {}
  },
  methods: {
    currencyFormat(value) {
      if (value != null) {
        return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
      }
    },
    capitalizeFirstLetter: function (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  },
  computed: {
    isMdAndUp() {
      return this.$vuetify.breakpoint.mdAndUp;
    },
    ...mapGetters({
      clientId: "clientId"
    }),


  },
});