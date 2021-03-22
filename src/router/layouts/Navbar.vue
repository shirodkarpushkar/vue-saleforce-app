<template>
  <div>
    <v-toolbar dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title class="mr-10">
        Education
      </v-toolbar-title>
      <v-toolbar-items>
        <v-tabs>
          <v-tab :to="{ name: 'studentList' }">Student </v-tab>
          <v-tab :to="{ name: 'schoolList' }">Schools</v-tab>
          <v-tab :to="{ name: 'layout' }">Layout</v-tab>
        </v-tabs>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-switch
        v-model="$vuetify.theme.dark"
        :prepend-icon="
          $vuetify.theme.dark ? 'mdi-weather-night' : 'mdi-weather-sunny'
        "
        class="mt-5"
      >
      </v-switch>
      <v-btn v-if="!loggedIn" class="mr-1" @click="authorise">Authorize</v-btn>
      <v-btn v-if="loggedIn" icon @click="logout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>
<script>
import { authMethods, authGetters } from '@state/helpers'
export default {
  page: {
    title: 'Navbar',
    meta: [{ name: 'description', content: 'Navbar' }],
  },
  components: {},
  computed: {
    ...authGetters,
  },
  methods: {
    ...authMethods,

    authorise() {
      this.$jsforce.browser.login()
      this.$jsforce.browser.on('connect', (conn) => {
        this.loginOAuth({ accessToken: conn.accessToken })
      })
    },
    async logout() {
      this.logOut()
      await this.$jsforce.browser.logout()
    },
  },
}
</script>
<style scoped></style>
