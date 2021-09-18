<template>
  <div>
    <v-btn color="primary" @click="dialog = true"> Ajouter article</v-btn>
    <dialog-article
      :dialog="dialog"
      formTitle="Ajouter un article"
      :editedItem="newItem"
      type="Add"
      @add-article="addArticle"
      @close-dialog="close"
    />
  </div>
</template>

<script>
import DialogArticle from "./DialogArticle.vue";
export default {
  components: { DialogArticle },
  name: "AddArticle",

  data: () => ({
    dialog: false,
    newItem: {
      name: "",
      type: "",
      serialNumber: 0,
      creationDate: new Date(),
      modificationDate: new Date(),
      status: "",
      isArchived: false,
      isDeleted: false,
    },
  }),
  methods: {
    addArticle(item) {
      console.log(item);
      this.dialog = false;
    },
    close() {
      this.dialog = false;
    },
  },
};
</script>
