<template>
  <div>
    <v-toolbar color="secondary">
      <v-toolbar-title>Update Production Tables</v-toolbar-title>
    </v-toolbar>
    <v-simple-table>
      <thead>
        <tr>
          <th class="text-left">Server Name</th>
          <th class="text-left">Table Name</th>
          <th class="text-left">Date Last Updated</th>
          <th class="text-left">Days out of sync</th>
          <th class="text-left">Update Table</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tables" :key="item.name">
          <td>{{ item.server }}</td>
          <!-- TODO - Add Dynamic data -->
          <td>{{ item.name }}</td>
          <!-- TODO - Add Dynamic data -->
          <td>{{ item.date }}</td>
          <!-- TODO - Add Dynamic data -->
          <td>{{ item.sync }}</td>
          <!-- TODO - Add Dynamic data -->
          <td>
            <v-btn color="accent">Update Table </v-btn>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tables: [
        {
          server: 'HQOLYMBRGSQL02P',
          name: 'Bridges',
          date: '6/1/2019',
          sync: 65
        },
        {
          server: 'HQOLYMBRGSQL02P',
          name: 'Structure Unit',
          date: '6/1/2019',
          sync: 65
        },
        {
          server: 'HQOLYMBRGSQL02P',
          name: 'Roadway',
          date: '6/1/2019',
          sync: 65
        },
        {
          server: 'HQOLYMBRGSQL02P',
          name: 'Inspections',
          date: '6/1/2019',
          sync: 65
        },
        {
          server: 'HQOLYMBRGSQL02P',
          name: 'Element Data',
          date: '6/1/2019',
          sync: 65
        }
      ]
    }
  }
}
</script>
