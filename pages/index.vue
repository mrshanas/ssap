<template>
  <v-container class="ma-2 pa-0 px-2" fluid>
    
    <div >
      <h1>HHuuuuu</h1>
    </div>
  </v-container>
</template>

<script>

import { mapGetters } from "vuex";
export default {
  components: {
  },
  data: () => ({
  
  }),
  methods: {
   
  },
  mounted: function () {
   
  },

  created() {

  },

  computed: {
    ...mapGetters({
    }),
   

  },
  created() {
    this.$store.dispatch("retrieve_profile");
  },
};
</script>
