<template>
  <div>
    <navbar></navbar>
    <v-container>
      <div class="d-flex justify-end mb-2">
        <v-btn color="primary"> Add New</v-btn>
      </div>

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
    title: 'StudentList',
    meta: [{ name: 'description', content: 'StudentList' }],
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
    this.subscribeEvents()
  },
  methods: {
    async getRecords() {
      const res = await this.$jsforce.browser.connection.query(
        'select Id, Name, Student_Name__c from Student__c order by Id DESC'
      )

      this.records = res.records
    },
    subscribeEvents() {
      this.$jsforce.browser.on('connect', (conn) => {
        this.getRecords()
      })
    },
  },
}
</script>
