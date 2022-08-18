<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="v 2.3.1"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Hot Release 8.0.0</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-progress-linear
        color="deep-orange"
        height="6"
        :value="progress"
        reverse
        striped
      ></v-progress-linear>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { ipcRenderer } from "electron";

@Component({ components: {} })
export default class App extends Vue {
  progress = 0;
  mounted() {
    let progress = this.progress;
    ipcRenderer.on("download-progress", function (evt, message) {
      progress = message;
      console.log(message);
      (
        document.getElementsByClassName(
          "v-progress-linear__determinate"
        )[0] as any
      ).style.width = message + "%";
      console.log("progress" + progress);
    });
  }
}
</script>
