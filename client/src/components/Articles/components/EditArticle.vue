<template>
  <div style="display: inline-block">
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-icon
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          @click="dialog = true"
        >
          mdi-pencil
        </v-icon>
      </template>
      <span>Modifier</span>
    </v-tooltip>
    <dialog-article
      :dialog="dialog"
      formTitle="Modifier un article"
      :editedItem="item"
      type="Edit"
      @edit-article="editArticle"
      @close-dialog="close"
    />
  </div>
</template>

<script>
import DialogArticle from "./DialogArticle.vue";
export default {
  components: { DialogArticle },
  name: "AddArticle",
  props: { item: Object },
  data: () => ({
    dialog: false,
  }),
  methods: {
    editArticle(item) {
      console.log(item);
      this.dialog = false;
    },
    close() {
      this.dialog = false;
    },
  },
};
</script>
