<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <div class="text-h4">Articles</div>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <Articles />
    </v-main>

    <v-footer padless
      ><v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>A2SI</strong>
      </v-col></v-footer
    >
  </v-app>
</template>

<script>
import Articles from "./components/Articles/Articles.vue";

export default {
  name: "App",

  components: {
    Articles,
  },

  data: () => ({
    //
  }),
};
</script>
