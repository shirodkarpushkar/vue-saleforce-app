<template>
  <div>
    <navbar></navbar>
    <v-container fluid>
      <v-row no-gutters>
        <v-col sm="3">
          <v-card class="mb-2" tile>
            <v-card-title>
              + Tables
            </v-card-title>
            <v-card-text>
              <v-list>
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  @click="openDialog(item)"
                >
                  <v-list-item-title>
                    {{ item.title }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
          <v-card tile>
            <v-card-title>
              + Guest
            </v-card-title>
            <v-card-text>
              <v-list>
                <v-list-item
                  v-for="(item, i) in guests"
                  :key="`guest-${i}}`"

                >
                <v-list-item-icon :draggable="true">
                  <v-img src="@assets/images/man.svg" width="20"></v-img>
                </v-list-item-icon>
                  <v-list-item-title>
                    {{ item.name }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col sm="9">
          <div class="seating-layout-btn">
            <v-btn color="primary" class="mr-1" @click="addChair(150, 150)"
              >+ Chair</v-btn
            >
            <v-btn
              color="primary"
              class="mr-1"
              @click="addBar(150, 150, 180, 60)"
              >+ Reception</v-btn
            >
            <v-btn
              color="primary"
              class="mr-1"
              @click="addWall(150, 150, 60, 60)"
              >+ Wall</v-btn
            >
            <v-btn color="error" class="mr-1" @click="remove">Remove</v-btn>
            <v-btn color="primary" class="mr-1" @click="viewMode"
              >View mode</v-btn
            >
          </div>
          <v-row no-gutters justify="center">
            <v-card tile><canvas id="canvas"></canvas></v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog
      v-model="dialog"
      content-class="rounded-0"
      persistent
      max-width="500px"
    >
      <v-card tile>
        <v-card-title> Add {{ item.title }} </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="item.chairs"
            label="Chairs"
            placeholder="Enter number of chairs"
            type="number"
            :max="5"
            :min="0"
            :disabled="!item.chairSelection"
          >
          </v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="primary" @click="addItem">
            + add
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
