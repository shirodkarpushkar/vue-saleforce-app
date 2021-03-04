<template>
  <div>
    <navbar></navbar>
    <v-container>
      <v-row class="mb-2" >
        <v-col >
          <h4 class="title"> School Details</h4>
        </v-col>
        <v-col>
          <v-btn :to="{ name: `schoolList` }" tile>Close</v-btn>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <br />
      <div v-if="school">
        <h5>School Id</h5>
        <p class="body-1">{{ school.Id }}</p>

        <h5>school Name</h5>
        <p>{{ school.Name }}</p>

        <h5>Phone Number</h5>
        <p>{{ school.School_Phone__c }}</p>

        <h5>Email</h5>
        <p>{{ school.School_Email__c }}</p>

        <h5>Address</h5>
        <p>{{ school.School_Address__c }}</p>

        <h5>Fees</h5>
        <p>${{ school.Fees__c }}</p>
      </div>
    </v-container>

    <app-footer></app-footer>
  </div>
</template>
<script>
export default {
  page: {
    title: 'Details',
    meta: [{ name: 'description', content: 'Details' }],
  },
  components: {},

  data() {
    return {
      school: null,
    }
  },
  async created() {
    await this.getschool()
  },
  methods: {
    async getschool() {
      try {
        const res = await this.$jsforce.browser.connection
          .sobject('School__c')
          .find({ Id: this.$route.params.id })
        this.school = res[0]
      } catch (error) {
        this.$toasted.show(error)
      }
    },
  },
}
</script>

<style scoped></style>
