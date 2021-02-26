<template>
  <div>
    <navbar></navbar>
    <v-container>
      <div class="title">Personal Details</div>
      <v-divider></v-divider>
      <br>
      <div v-if="student">
        <h5 >Student Id</h5>
        <p class="body-1">{{student.Name}}</p>

        <h5>Student Name</h5>
        <p>{{student.Student_Name__c}}</p>

        <h5>Phone Number</h5>
        <p>{{student.Phone_Number__c}}</p>

        <h5>Email</h5>
        <p>{{student.Email__c}}</p>

        <h5>Address</h5>
        <p>{{student.Address__c}}</p>

        <h5>Class Enrolled</h5>
        <p>{{student.Class_Enrolled__c}}</p>

        <h5>School Id</h5>
        <p>{{student.School__c}}</p>
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
      student: null,
    }
  },
  async created() {
    await this.getStudent()
  },
  methods: {
    async getStudent() {
      try {
        const res = await this.$jsforce.browser.connection
          .sobject('Student__c')
          .find({ Id: this.$route.params.id })
        this.student = res[0]
      } catch (error) {
        this.$toasted.show(error)
      }
    },
  },
}
</script>

<style scoped></style>
