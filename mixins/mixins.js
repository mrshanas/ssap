import Vue from 'vue';
import { mapGetters } from "vuex";
Vue.mixin({

  layout: 'default',
  data: function () {
    return {}
  },
  methods: {
    formatPrice(value) {
      if (value != null) {
        return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
      }
    },
    hasAnyPermission: function (source, target) {
      if (source === undefined) {
        return true;
      } else {
        var result = source.filter(function (item) { return target.indexOf(item) > -1 });
        return (result.length > 0);
      }
    },
    fetch_medical_service_types() {
      this.$store.dispatch("get_medical_service_types");
    },
    filter_medical_services: function (it) {
      this.$router.push(`/services/${it}`);
    },
    fetch_measures: function () {
      this.$store.dispatch("fetch_medicine_measurements");
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