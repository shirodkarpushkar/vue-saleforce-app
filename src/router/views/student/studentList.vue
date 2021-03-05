<template>
  <div>
    <navbar></navbar>
    <v-container>
      <div class="d-flex justify-end mb-2">
        <v-btn color="primary" @click="openEmailDialog"> Send Email</v-btn>
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
    <v-dialog
      v-model="emailDialog"
      content-class="rounded-0"
      persistent
      max-width="500px"
    >
      <v-card tile>
        <v-card-title>
          Send Email
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="email" label="Email Address" required>
          </v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="btnLoader"
            color="blue darken-1"
            text
            @click="emailDialog = false"
          >
            Close
          </v-btn>
          <v-btn
            :loading="btnLoader"
            :disabled="btnLoader"
            color="primary"
            @click="sendEmailTrigger"
          >
            send
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <app-footer></app-footer>
  </div>
</template>

<script>
import { schoolMethods } from '@state/helpers'
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
      email: '',
      emailDialog: false,
      btnLoader: false,
    }
  },
  async created() {
    await this.getRecords()
    this.subscribeEvents()
  },
  methods: {
    ...schoolMethods,
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
    openEmailDialog() {
      this.emailDialog = true
      this.email = ''
    },
    async sendEmailTrigger() {
      try {
        this.btnLoader = true
        const API = 'AutoLaunchEmailFlow'
        const data = {
          inputs: [
            {
              email: this.email,
            },
          ],
        }
        const res = await this.triggerFlow({ API, data })
        this.btnLoader = false
        this.emailDialog = false
      } catch (error) {
        this.$toasted.show(error)
        this.btnLoader = false
      }
    },
  },
}
</script>
