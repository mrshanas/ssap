<template>
  <v-container class="ma-0 pa-0" fluid>
    <v-container fluid class="ma-0 pa-0">
      <v-card tile flat>
        <v-toolbar color="primary" tile dark flat>
          <v-toolbar-title>
            <v-avatar color="primary " size="36">
              <span
                class="white--text font-weight-bold overline"
                @click.stop="$router.go(-1)"
              >
                <v-icon large color="white">mdi-keyboard-backspace</v-icon>
              </span>
            </v-avatar>
          </v-toolbar-title>
          <v-toolbar-title class="white--text">
            &nbsp; &nbsp; Settings</v-toolbar-title
          >
        </v-toolbar>
        <v-list dense>
          <p class="px-3">Accounts</p>
          <v-list-item two-lin class="py-0 my-0" dense two-line>
            <v-list-item-content>
              <v-list-item-title>Change Password</v-list-item-title>
              <v-list-item-subtitle class="text-body-2 font-weight-normal mt-1"
                >Change your account password
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-lin class="py-0 my-0" dense two-line>
            <v-list-item-content>
              <v-list-item-title>Change Passcode</v-list-item-title>
              <v-list-item-subtitle class="text-body-2 font-weight-normal mt-1"
                >Change app passcode
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <p class="pa-3">Others</p>
          <v-list-item two-lin class="py-0 my-0" dense two-line>
            <v-list-item-content>
              <v-list-item-title>Language</v-list-item-title>
              <v-list-item-subtitle class="text-body-2 font-weight-normal mt-1"
                >Choose language
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-lin class="py-0 my-0" dense two-line>
            <v-list-item-content>
              <v-list-item-title>Update Endpoint</v-list-item-title>
              <v-list-item-subtitle class="text-body-2 font-weight-normal mt-1"
                >Click here to change your endpoint configurations
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-container>
  </v-container>
</template>
<script>
export default {
  layout: "views",
  props: {
    account: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {};
  },
};
</script>
