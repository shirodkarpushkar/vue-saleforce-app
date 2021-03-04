<template>
  <div>
    <navbar></navbar>
    <v-container>

      <v-data-table :headers="headers" :items="records" class="elevation-1">
        <template v-slot:item.Name="{ item }">
          <div>
            <router-link
              :to="{
                name: 'schoolDetails',
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
    title: 'SchoolList',
    meta: [{ name: 'description', content: 'StudentList' }],
  },
  components: {},
  data() {
    return {
      headers: [
        {
          text: 'Id',
          value: 'Id',
        },
        {
          text: 'Name',
          value: 'Name',
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
        'select Id, Name from School__c order by Id DESC'
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
