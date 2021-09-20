<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="filteredArticles"
      :items-per-page="5"
      class="elevation-1"
    >

    <!--
      Filtre sur le nom
     -->
      <template v-slot:header.name="{ header }">
        {{ header.text }}
        <v-menu offset-y :close-on-content-click="false">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon small> mdi-filter </v-icon>
            </v-btn>
          </template>
          <div style="background-color: white; width: 280px">
            <v-text-field
              v-model="name"
              class="pa-4"
              type="text"
              label="Entrer le terme recherché"
            ></v-text-field>
            <v-btn
              @click="name = ''"
              small
              text
              color="primary"
              class="ml-2 mb-2"
              >Clean</v-btn
            >
          </div>
        </v-menu>
      </template>

  <!--
      Filtre sur le type
     -->

      <template v-slot:header.type="{ header }">
        {{ header.text }}
        <v-menu offset-y :close-on-content-click="false">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon small> mdi-filter </v-icon>
            </v-btn>
          </template>
          <div style="background-color: white; width: 280px" class="pa-2">
            <v-select
              :items="['outillage', 'consommable']"
              v-model="type"
              label="Type recherché"
            ></v-select>
            <v-btn
              @click="type = ''"
              small
              text
              color="primary"
              class="ml-2 mb-2"
              >Clean</v-btn
            >
          </div>
        </v-menu>
      </template>

      <!--
      Filtre sur le numéro de série
     -->

      <template v-slot:header.serial_number="{ header }">
        {{ header.text }}
        <v-menu offset-y :close-on-content-click="false">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon small> mdi-filter </v-icon>
            </v-btn>
          </template>
          <div style="background-color: white; width: 280px">
            <v-text-field
              v-model="serialNumber"
              class="pa-4"
              type="text"
              label="Entrer le numéro de série recherché"
            ></v-text-field>
            <v-btn
              @click="serialNumber = ''"
              small
              text
              color="primary"
              class="ml-2 mb-2"
              >Clean</v-btn
            >
          </div>
        </v-menu>
      </template>

      <!--
      Filtre sur la date de création
     -->

      <template v-slot:header.creation_date="{ header }">
        {{ header.text }}
        <v-menu offset-y :close-on-content-click="false">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon small> mdi-filter </v-icon>
            </v-btn>
          </template>
          <div style="background-color: white; width: 280px">
            <v-date-picker v-model="creationDate" range></v-date-picker>
            <v-btn
              @click="creationDate = []"
              small
              text
              color="primary"
              class="ml-2 mb-2"
              >Clean</v-btn
            >
          </div>
        </v-menu>
      </template>

      <!--
      Filtre sur la date de modification
     -->

      <template v-slot:header.modification_date="{ header }">
        {{ header.text }}
        <v-menu offset-y :close-on-content-click="false">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon small> mdi-filter </v-icon>
            </v-btn>
          </template>
          <div style="background-color: white; width: 280px">
            <v-date-picker v-model="modificationDate" range></v-date-picker>
            <v-btn
              @click="modificationDate = []"
              small
              text
              color="primary"
              class="ml-2 mb-2"
              >Clean</v-btn
            >
          </div>
        </v-menu>
      </template>

<!--
      Filtre sur l'état
     -->

      <template v-slot:header.status="{ header }">
        {{ header.text }}
        <v-menu offset-y :close-on-content-click="false">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon small> mdi-filter </v-icon>
            </v-btn>
          </template>
          <div style="background-color: white; width: 280px" class="pa-2">
            <v-select
              :items="['En bon état', 'A réparer']"
              v-model="status"
              label="Etat recherché"
            ></v-select>
            <v-btn
              @click="status = ''"
              small
              text
              color="primary"
              class="ml-2 mb-2"
              >Clean</v-btn
            >
          </div>
        </v-menu>
      </template>

      <!--
      Filtre sur l'état d'archivage
     -->

      <template v-slot:header.isArchived="{ header }">
        {{ header.text }}
        <v-menu offset-y :close-on-content-click="false">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon small> mdi-filter </v-icon>
            </v-btn>
          </template>
          <div style="background-color: white; width: 280px" class="pa-2">
            <v-checkbox v-model="isArchived" label="Archivé"></v-checkbox>
            <v-checkbox
              v-model="isNotArchived"
              label="Non archivé"
            ></v-checkbox>
          </div>
        </v-menu>
      </template>

      <!--
      Filtre sur l'état de suppression
     -->

      <template v-slot:header.isDeleted="{ header }">
        {{ header.text }}
        <v-menu offset-y :close-on-content-click="false">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon small> mdi-filter </v-icon>
            </v-btn>
          </template>
          <div style="background-color: white; width: 280px" class="pa-2">
            <v-checkbox v-model="isDeleted" label="Supprimé"></v-checkbox>
            <v-checkbox
              v-model="isNotDeleted"
              label="Non supprimé"
            ></v-checkbox>
          </div>
        </v-menu>
      </template>

    <!--
      Bandeau haut du tableau contenant le bouton ajouter un article
     -->

      <template v-slot:top>
        <v-toolbar flat>
          <v-spacer></v-spacer>
          <add-article @get-article="get" />
        </v-toolbar>
      </template>
      <!-- 
        Modification de la cellule contenant l'état avec affichage d'un badge
      -->
      <template v-slot:item.status="{ item }">
        <v-chip :color="getStatusColor(item.status)" dark>
          {{ item.status }}
        </v-chip> </template
      >
      
      <!-- 
        Actions possible sur chaque ligne
      -->
      
      <template v-slot:item.actions="{ item }">
        <!--
          Modification de l'article
         -->
        <edit-article @get-article="get" :item="item" />
        <!--
          Suppression de l'article
         -->
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
              @click="openDeleteDialog(item)"
            >
              mdi-delete
            </v-icon>
          </template>
          <span>Supprimer</span>
        </v-tooltip>
        <!--
          Archivage de l'article
         -->
        <v-tooltip bottom v-if="!item.isArchived">
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
              @click="openArchiveDialog(item)"
            >
              mdi-archive
            </v-icon>
          </template>
          <span>Archiver</span>
        </v-tooltip>
        <!--
          Modification de l'état pour le mettre à "A réparer"
         -->
        <v-tooltip v-if="item.status == 'En bon état'" bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
              @click="
                openRepairDialog(item.serial_number, item.status, item.name)
              "
            >
              mdi-wrench
            </v-icon>
          </template>
          <span>A réparer</span>
        </v-tooltip>
        <!--
          Modification de l'état pour le mettre à "En bon état"
         -->
        <v-tooltip v-if="item.status == 'A réparer'" bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
              @click="
                openRepairDialog(item.serial_number, item.status, item.name)
              "
            >
              mdi-check
            </v-icon>
          </template>
          <span>Réparer</span>
        </v-tooltip>
      </template>

      <!--
        Modification de la cellule contenant l'état d'archivage
       -->

      <template v-slot:item.isArchived="{ item }">
        <v-simple-checkbox
          v-model="item.isArchived"
          disabled
        ></v-simple-checkbox>
      </template>

      <!--
        Modification de la cellule contenant l'état de suppression
       -->

      <template v-slot:item.isDeleted="{ item }">
        <v-simple-checkbox
          v-model="item.isDeleted"
          disabled
        ></v-simple-checkbox> </template
    ></v-data-table>
  </v-container>
</template>

<script>
import AddArticle from "./components/AddArticle.vue";
import EditArticle from "./components/EditArticle.vue";
import {
  getArticles,
  repairedArticle,
  archivedArticle,
  deleteArticle,
} from "../../services/articlesService";
export default {
  components: { AddArticle, EditArticle },
  name: "Articles",

  mounted: function () {
    this.get();
  },

  data: () => ({
    /**
     * Element utilisé pour filtré le nom
     */
    name: "",
    /**
     * Element utilisé pour filtré le type
     */
    type: "",
    /**
     * Elements utilisés pour filtré l'état d'archivage
     */
    isArchived: false,
    isNotArchived: true,
    /**
     * Elements utilisés pour filtré l'état de suppression
     */
    isDeleted: true,
    isNotDeleted: true,
    /**
     * Element utilisé pour filtré l'état
     */
    status: "",
    /**
     * Element utilisé pour filtré le numéro de série
     */
    serialNumber: "",
    /**
     * Element utilisé pour filtré la date de création
     */
    creationDate: [],
    /**
     * Element utilisé pour filtré la date de modification
     */
    modificationDate: [],
    /**
     * En-tête du tableau
     */
    headers: [
      { text: "Libellé", value: "name", sortable: false },
      { text: "Type", value: "type" },
      { text: "Numéro de série", value: "serial_number", sortable: false },
      { text: "Date de création", value: "creation_date" },
      { text: "Date de modification", value: "modification_date" },
      { text: "Etat", value: "status" },
      { text: "Archivé", value: "isArchived" },
      { text: "Supprimé", value: "isDeleted" },
      { text: "", value: "actions", sortable: false },
    ],
    /**
     * Liste des articles
     */
    articles: [],
  }),
  computed: {
    filteredArticles() {
      var conditions = [];

/**
 * On ajoute les filtres selon la valeur de l'élément filtré
 */
      if (this.name) {
        conditions.push(this.filterName);
      }

      if (this.type) {
        conditions.push(this.filterType);
      }

      if (this.status) {
        conditions.push(this.filterStatus);
      }

      if (this.serialNumber) {
        conditions.push(this.filterSerialNumber);
      }

      if (this.creationDate.length > 0) {
        conditions.push(this.filterCreationDate);
      }

      if (this.modificationDate.length > 0) {
        conditions.push(this.filterModificationDate);
      }

      conditions.push(this.filterIsArchived);
      conditions.push(this.filterIsDeleted);

/**
 * Applique tous les filtres à la liste des articles
 */
      if (conditions.length > 0) {
        return this.articles.filter((article) => {
          return conditions.every((condition) => {
            return condition(article);
          });
        });
      }

/**
 * Retourne la liste filtrée
 */
      return this.articles;
    },
  },

  methods: {
    /**
 * Fonction de filtre sur le nom
 */
    filterName(item) {
      return item.name.toLowerCase().includes(this.name.toLowerCase());
    },

/**
 * Fonction de filtre sur le type
 */
    filterType(item) {
      return item.type.toLowerCase().includes(this.type.toLowerCase());
    },

/**
 * Fonction de filtre sur l'archivage de l'article
 */
    filterIsArchived(item) {
      if (this.isArchived && this.isNotArchived) {
        return item;
      } else if (this.isNotArchived) {
        return item.isArchived == false;
      } else if (this.isArchived) {
        return item.isArchived == true;
      }
    },

/**
 * Fonction de filtre sur la suppression de l'article
 */
    filterIsDeleted(item) {
      if (this.isDeleted && this.isNotDeleted) {
        return item;
      } else if (this.isNotDeleted) {
        return item.isDeleted == false;
      } else if (this.isDeleted) {
        return item.isDeleted == true;
      }
    },

/**
 * Fonction de filtre sur l'état
 */
    filterStatus(item) {
      return item.status.toLowerCase().includes(this.status.toLowerCase());
    },

/**
 * Fonction de filtre sur le numéro de série
 */
    filterSerialNumber(item) {
      return item.serial_number
        .toString()
        .toLowerCase()
        .includes(this.serialNumber.toLowerCase());
    },

/**
 * Fonction de filtre de la date de création
 */
    filterCreationDate(item) {
      return (
        item.creation_date > this.creationDate[0] &&
        item.creation_date < this.creationDate[1]
      );
    },

/**
 * Fonction de filtre de la date de modification
 */
    filterModificationDate(item) {
      return (
        item.modification_date > this.modificationDate[0] &&
        item.modification_date < this.modificationDate[1]
      );
    },

/**
 * Récupére la liste des articles
 */
    async get() {
      this.articles = await getArticles();
    },

/**
 * Ouverture du dialog de confirmation pour la demande de réparation / finalisation de la réparation
 */
    openRepairDialog(serial_number, status, name) {
      var title = "";
      /**
       * Modifie le titre selon l'état de l'article
       */
      if (status == "En bon état")
        title = "Souhaitez-vous réparer : " + name + " ?";
      if (status == "A réparer")
        title = "Souhaitez-vous finir la réparation de : " + name + " ?";

        /**
         * Déclenche le dialog de validation
         */
      this.$swal({
        title: title,
        showCancelButton: true,
        confirmButtonText: "Valider",
        confirmButtonColor: "#eb5e3a",
      }).then((result) => {
        /**
         * Si l'utilisateur appuie sur le bouton de validation on déclenche la demande de réparation
         */
        if (result.isConfirmed) {
          this.repair(serial_number, status);
        }
      });
    },

/**
 * Appelle la fonction pour modifier l'état d'un article
 */
    async repair(serial_number, status) {
      const result = await repairedArticle(serial_number, status);
      if (result == "Succés") {
        /**
         * En cas de succés ouverture d'un popup et appel de la fonction pour récupérer la liste à jour
         */
        this.$swal({
          icon: "success",
          title: "Etat modifié",
          showConfirmButton: false,
          timer: 2000,
        });
        this.get();
      } else {
        /**
         * Sinon ouverture d'un popup avec un message d'erreur
         */
        this.$swal({
          icon: "error",
          title: "Erreur lors de la modification de l'état de l'article",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },

/**
 * Ouverture du dialog de confirmation pour la demande d'archivage d'un article
 */
    openArchiveDialog(item) {
       /**
         * Déclenche le dialog de validation
         */
      this.$swal({
        title: "Souhaitez-vous archiver : " + item.name + " ?",
        showCancelButton: true,
        confirmButtonText: "Valider",
        confirmButtonColor: "#eb5e3a",
      }).then((result) => {
        /**
         * Si l'utilisateur appuie sur le bouton de validation on déclenche la demande de réparation
         */
        if (result.isConfirmed) {
          this.archive(item);
        }
      });
    },

/**
 * Appelle la fonction pour archiver un article
 */
    async archive(item) {
      const result = await archivedArticle(item.serial_number);
      if (result == "Succés") {
        /**
         * En cas de succés ouverture d'un popup et appel de la fonction pour récupérer la liste à jour
         */
        this.$swal({
          icon: "success",
          title: "Article archivé",
          showConfirmButton: false,
          timer: 2000,
        });
        this.get();
      } else {
        /**
         * Sinon ouverture d'un popup avec un message d'erreur
         */
        this.$swal({
          icon: "error",
          title: "Erreur lors de l'archivage de l'article",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },

/**
 * Ouverture du dialog de confirmation pour la demande de suppression d'un article
 */
    openDeleteDialog(item) {
       /**
         * Déclenche le dialog de validation
         */
      this.$swal({
        title: "Souhaitez-vous supprimer : " + item.name + " ?",
        showCancelButton: true,
        confirmButtonText: "Valider",
        confirmButtonColor: "#eb5e3a",
      }).then((result) => {
        /**
         * Si l'utilisateur appuie sur le bouton de validation on déclenche la demande de réparation
         */
        if (result.isConfirmed) {
          this.delete(item.serial_number);
        }
      });
    },

/**
 * Appelle la fonction pour supprimer un article
 */
    async delete(serial_number) {
      const result = await deleteArticle(serial_number);
      if (result == "Succés") {
        /**
         * En cas de succés ouverture d'un popup et appel de la fonction pour récupérer la liste à jour
         */
        this.$swal({
          icon: "success",
          title: "Article supprimé",
          showConfirmButton: false,
          timer: 2000,
        });
        this.get();
      } else {
        /**
         * Sinon ouverture d'un popup avec un message d'erreur
         */
        this.$swal({
          icon: "error",
          title: "Erreur lors de la suppression de l'article",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
    /**
     * Permet de modifier le composant v-chip pour le status
     */
    getStatusColor(status) {
      if (status == "A réparer") return "red";
      else if (status == "En bon état") return "green";
    },
  },
};
</script>
