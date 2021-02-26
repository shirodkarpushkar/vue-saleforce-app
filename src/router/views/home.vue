<template>
  <div>
    <navbar></navbar>
    <v-container>
      <v-btn class="mr-1" @click="authorise">Authorize</v-btn>
      <v-btn @click="logout">Logout</v-btn>

      <v-data-table
        :headers="headers"
        :items="records"
        class="elevation-1"
      ></v-data-table>
    </v-container>

    <app-footer></app-footer>
  </div>
</template>

<script>
import jsforce from 'jsforce'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: 'Home' }],
  },
  components: {},
  data() {
    return {
      headers: [
        {
          text: 'ID',
          value: 'Id',
        },
        {
          text: 'Record',
          value: 'Name',
        },
        {
          text: 'Name',
          value: 'Student_Name__c',
        },
      ],
      records: [],
    }
  },
  mounted() {
    this.initialise()
  },
  methods: {
    initialise() {
      jsforce.browser.init({
        clientId:
          '3MVG9fe4g9fhX0E6PXk.Rnb9BpGHna9PukWmKSwNNJe2knVk8StZJIM7ug8Un_REJyi99g95.EHd1zU2aUjso',
        redirectUri: 'http://localhost:8080',
        version: '49.0',
      })
      this.subcribeEvents()
    },
    authorise() {
      jsforce.browser.login()
    },
    logout() {
      jsforce.browser.logout()
    },
    subcribeEvents() {
      jsforce.browser.on('connect', async (conn) => {
        const response = await conn.query(
          'SELECT Id, Name,Student_Name__c FROM Student__c'
        )
        this.records = response.records
      })
    },
  },
}
</script>
