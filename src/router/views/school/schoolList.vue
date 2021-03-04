<template>
  <div>
    <navbar></navbar>
    <v-container>
      <div class="d-flex justify-end mb-2">
        <v-btn color="primary" @click="addNew"> Add New</v-btn>
      </div>

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

    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card tile>
        <v-card-title>
          Add School
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  v-model="school.Name"
                  label="School Name"
                  required
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  v-model="school.School_Email__c"
                  label="School Email"
                  required
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-textarea
                  v-model="school.School_Address__c"
                  rows="3"
                  label="School Address"
                  required
                >
                </v-textarea>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  v-model="school.School_Phone__c"
                  label="School Phone"
                  required
                >
                </v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  v-model="school.Fees__c"
                  label="School Fees ($)"
                  required
                >
                </v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="btnLoader"
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            :loading="btnLoader"
            :disabled="btnLoader"
            color="primary"
            @click="createResource"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

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
      dialog: false,
      btnLoader: false,
      school: {
        Name: '',
        School_Phone__c: '',
        School_Address__c: '',
        Fees__c: '',
        School_Email__c: '',
      },
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
    addNew() {
      this.dialog = true
      this.school = {
        Name: '',
        School_Phone__c: '',
        School_Address__c: '',
        Fees__c: '',
        School_Email__c: '',
      }
    },
    async createResource() {
      try {
        this.btnLoader = true
        const res = await this.$jsforce.browser.connection
          .sobject('School__c')
          .create(this.school)
        this.getRecords()
        this.btnLoader = false
        this.dialog = false
      } catch (error) {
        this.$toasted.show(error)
        this.btnLoader = false
      }
    },
  },
}
</script>
