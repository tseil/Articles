<template>
  <v-dialog v-model="dialog" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="text-h5">{{ formTitle }}</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                required
                v-model="editedItem.name"
                label="Libellé"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-select
                :items="['outillage', 'consommable']"
                v-model="editedItem.type"
                required
                label="Type"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                required
                v-if="this.type == 'Add'"
                v-model="editedItem.serial_number"
                label="Numéro de série"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close"> Annuler </v-btn>
        <v-btn color="success" @click="save"> Sauvegarder </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "DialogArticle",
  props: {
    editedItem: Object,
    formTitle: String,
    dialog: Boolean,
    type: String,
  },
  data: () => ({}),
  methods: {
    close() {
      this.$emit("close-dialog");
    },
    save() {
      if (this.type == "Add") {
        this.$emit("add-article", this.editedItem);
      } else if (this.type == "Edit") {
        this.$emit("edit-article", this.editedItem);
      }
    },
  },
};
</script>
