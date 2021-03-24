<template>
  <div>
    <navbar></navbar>
    <v-container>
      <div class="d-flex justify-center mb-10">
        <v-btn color="primary" class="mr-1" @click="addRect(150, 150, 90, 60)"
          >+ &#9647; Table</v-btn
        >
        <v-btn color="primary" class="mr-1" @click="addCircle(150, 150, 50)"
          >+ &#9711; Table</v-btn
        >
        <v-btn color="primary" class="mr-1" @click="addChair(150, 150)"
          >+ Chair</v-btn
        >
        <v-btn color="primary" class="mr-1" @click="addBar()"
          >+ Reception</v-btn
        >
        <v-btn color="primary" class="mr-1" @click="addWall(150, 150, 60, 60)"
          >+ Wall</v-btn
        >
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" class="mr-1" v-bind="attrs" v-on="on">
              + ROUND TABLE
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="addRoundTable(3)">
              3 Chairs
            </v-list-item>
            <v-list-item @click="addRoundTable(4)">
              4 Chairs
            </v-list-item>
            <v-list-item @click="addRoundTable(5)">
              5 Chairs
            </v-list-item>
            <v-list-item @click="addRoundTable(6)">
              6 Chairs
            </v-list-item>
            <v-list-item @click="addRoundTable(7)">
              7 Chairs
            </v-list-item>
            <v-list-item @click="addRoundTable(8)">
              8 Chairs
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn color="error" class="mr-1" @click="remove">Remove</v-btn>
        <v-btn color="primary" class="mr-1" @click="viewMode">View mode</v-btn>
      </div>
      <v-row align="center" justify="center">
        <canvas id="canvas" width="1000" height="1000"></canvas>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import seatingTool from '@mixins/seatingTool'
export default {
  mixins: [seatingTool],
  data() {
    return {
      key: '',
    }
  },

  mounted() {},
  methods: {},
}
</script>

<style></style>
