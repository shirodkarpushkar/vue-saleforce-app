<template>
  <div>
    <navbar></navbar>
    <v-container>
      <v-btn class="mr-1" @click="authorise">Authorize</v-btn>
      <v-btn @click="logout">Logout</v-btn>

      <v-data-table :headers="headers" :items="records" class="elevation-1">
        <template v-slot:item.Name="{ item }">
          <div>
            <router-link
              :to="{
                name: 'studentDetails',
                params: {
                  id: item.Id,
                },
              }"
              >{{ item.Name }}</router-link
            >
          </div>
        </template>
      </v-data-table>
    </v-container>

    <app-footer></app-footer>
  </div>
</template>

<script>
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
  async created() {
    await this.getRecords()
    // this.subscribeEvents()
  },
  methods: {
    async getRecords() {
      const res = await this.$jsforce.browser.connection.query(
        'select Id, Name, Student_Name__c from Student__c'
      )

      this.records = res.records
    },
    subscribeEvents() {
      this.$jsforce.browser.connection.streaming
        .topic('StudentUpdates')
        .subscribe((message) => {
          console.log('Event Type : ' + message.event.type)
          console.log('Event Created : ' + message.event.createdDate)
          console.log('Object Id : ' + message.sobject.Id)
        })
    },
    authorise() {
      this.$jsforce.browser.login()
    },
    logout() {
      this.$jsforce.browser.logout()
    },
  },
}
</script>
