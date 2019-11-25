<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <div>
        <v-card class="mx-6 my-3 pb-2" elevation="5">
          <v-card-title class="headline">
            Database Administration
          </v-card-title>
          <v-card-text>
            <p>
              This page allows you to view and make changes to the data between
              the 'Staging' and 'Production' databases.
            </p>
          </v-card-text>
          <v-divider></v-divider>
          <v-card class="mx-2 my-3" elevation="3">
            <dbTable />
          </v-card>
        </v-card>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import dbTable from '~/components/dbTable.vue'
export default {
  components: {
    dbTable
  }
}
</script>
