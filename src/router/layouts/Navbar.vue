<template>
  <div>
    <v-toolbar dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title class="mr-10">
        Education
      </v-toolbar-title>
      <v-toolbar-items>
        <v-tabs>
          <v-tab :to="{ name: 'studentList' }" >Student </v-tab>
          <v-tab :to="{ name: 'schoolList' }">Schools</v-tab>
        </v-tabs>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-btn class="mr-1" @click="authorise">Authorize</v-btn>
      <v-btn icon @click="logout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>
<script>
export default {
  page: {
    title: 'Navbar',
    meta: [{ name: 'description', content: 'Navbar' }],
  },
  components: {},
  methods: {
    authorise() {
      this.$jsforce.browser.login()
    },
    async logout() {
      await this.$jsforce.browser.logout()
    },
  },
}
</script>
<style scoped></style>
