<template>
  <div>
    <v-btn color="primary" @click="dialog = true"> Ajouter un article</v-btn>
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
import { addArticle } from "../../../services/articlesService";
export default {
  components: { DialogArticle },
  name: "AddArticle",

  data: () => ({
    // Etat du dialog de création d'article
    dialog: false,
    // Création d'un nouvel objet article
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
    /**
     * Ajout d'un article
     */
    async addArticle(item) {
      const result = await addArticle(item.serial_number, item.type, item.name);
      if (result == "Succés") {
         /**
         * En cas de succés ouverture d'un popup et émission d'un événement pour récupérer la liste à jour
         */
        this.$swal({
          icon: "success",
          title: "Article ajouté",
          showConfirmButton: false,
          timer: 2000,
        });
        this.$emit("get-article");
      } else {
        /**
         * Sinon ouverture d'un popup avec un message d'erreur
         */
        this.$swal({
          icon: "error",
          title: "Erreur lors de l'ajout de l'article",
          showConfirmButton: false,
          timer: 2000,
        });
      }
      this.dialog = false;
    },
    close() {
      this.dialog = false;
    },
  },
};
</script>
