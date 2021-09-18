<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="articles"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-spacer></v-spacer>
          <add-article />
        </v-toolbar>
      </template>
      <template v-slot:item.status="{ item }">
        <v-chip :color="getStatusColor(item.status)" dark>
          {{ item.status }}
        </v-chip> </template
      ><template v-slot:item.actions="{ item }">
        <edit-article :item="item" />
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon color="primary" dark v-bind="attrs" v-on="on">
              mdi-delete
            </v-icon>
          </template>
          <span>Supprimer</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon color="primary" dark v-bind="attrs" v-on="on">
              mdi-archive
            </v-icon>
          </template>
          <span>Archiver</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon color="primary" dark v-bind="attrs" v-on="on">
              mdi-hammer-wrench
            </v-icon>
          </template>
          <span>A réparer</span>
        </v-tooltip>
      </template>
      <template v-slot:item.isArchived="{ item }">
        <v-simple-checkbox
          v-model="item.isArchived"
          disabled
        ></v-simple-checkbox>
      </template>
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
export default {
  components: { AddArticle, EditArticle },
  name: "Articles",

  data: () => ({
    headers: [
      { text: "Libellé", value: "name", sortable: false },
      { text: "Type", value: "type" },
      { text: "Numéro de série", value: "serialNumber", sortable: false },
      { text: "Date de création", value: "creationDate" },
      { text: "Date de modification", value: "modificationDate" },
      { text: "Etat", value: "status" },
      { text: "Archivé", value: "isArchived" },
      { text: "Supprimé", value: "isDeleted" },
      { text: "", value: "actions", sortable: false },
    ],
    articles: [
      {
        name: "Vis",
        type: "consommable",
        serialNumber: 1544,
        creationDate: new Date(),
        modificationDate: new Date(),
        status: "A réparer",
        isArchived: false,
        isDeleted: false,
      },
      {
        name: "Clou",
        type: "consommable",
        serialNumber: 5420,
        creationDate: new Date(),
        modificationDate: new Date(),
        status: "A réparer",
        isArchived: false,
        isDeleted: false,
      },
      {
        name: "Equerre",
        type: "consommable",
        serialNumber: 1540,
        creationDate: new Date(),
        modificationDate: new Date(),
        status: "A réparer",
        isArchived: false,
        isDeleted: false,
      },
      {
        name: "Viseuse",
        type: "outillage",
        serialNumber: 1542,
        creationDate: new Date(),
        modificationDate: new Date(),
        status: "En bon état",
        isArchived: false,
        isDeleted: false,
      },
      {
        name: "Scie sauteuse",
        type: "outillage",
        serialNumber: 1520,
        creationDate: new Date(),
        modificationDate: new Date(),
        status: "En bon état",
        isArchived: false,
        isDeleted: false,
      },
    ],
  }),
  methods: {
    getStatusColor(status) {
      if (status == "A réparer") return "red";
      else if (status == "En bon état") return "green";
    },
  },
};
</script>
