<template>
  <div>
    <navbar></navbar>
    <v-container>
      <div class="d-flex justify-end mb-10">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              add item
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="addItem('circle')"> circle </v-list-item>
            <v-list-item @click="addItem('triangle')"> triangle </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <v-row align="center" justify="center">
        <canvas id="canvas" width="1000" height="500"></canvas>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      key: '',
      canvas: null,
    }
  },

  mounted() {
    this.canvas = new this.$fabric.Canvas('canvas')
    const triangle = new this.$fabric.Triangle({
      left: 130,
      top: 150,
      strokeWidth: 1,
      width: 70,
      height: 90,
      stroke: 'black',
      fill: '#ff8a1b',
      selectable: true,
      originX: 'center',
    })
    triangle.hasRotatingPoint = true
    this.canvas.add(triangle)
  },
  methods: {
    addItem(item) {
      switch (item) {
        case 'circle':
          const circle = new this.$fabric.Circle({
            radius: 20,
            fill: 'green',
            left: 100,
            top: 100,
            opacity: 1,
          })
          circle.hasRotatingPoint = true
          this.canvas.add(circle)

          break
        case 'triangle':
          const triangle = new this.$fabric.Triangle({
            strokeWidth: 1,
            width: 30,
            height: 30,
            stroke: 'black',
            fill: '#ff8a1b',
            selectable: true,
            left: 150,
            top: 150,
          })
          triangle.hasRotatingPoint = true
          this.canvas.add(triangle)
          break

        default:
          break
      }
    },
  },
}
</script>

<style></style>
