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
      @edit-article="edit"
      @close-dialog="close"
    />
  </div>
</template>

<script>
import DialogArticle from "./DialogArticle.vue";
import { editArticle } from "../../../services/articlesService";
export default {
  components: { DialogArticle },
  name: "EditArticle",
  props: { item: Object },
  data: () => ({
    dialog: false,
  }),
  methods: {
    /**
     * Edition de l'article
     */
    async edit(item) {
      /**
       * En cas de succés ouverture d'un popup et emission d'un événement pour récupérer la liste à jour
       */
      const result = await editArticle(
        item.serial_number,
        item.type,
        item.name
      );
      if (result == "Succés") {
        this.$swal({
          icon: "success",
          title: "Article modifié",
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
          title: "Erreur lors de la modification de l'article",
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
