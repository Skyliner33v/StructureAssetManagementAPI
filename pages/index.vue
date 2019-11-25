<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <v-card class="ma-6" elevation="5">
        <v-card-title class="headline">
          Welcome to the WSDOT Structure Asset Management App
        </v-card-title>
        <v-card-text>
          <p>
            This application is used to manage WSDOT Bridge information as it
            relates to Asset Management. Click the menu button at the top left
            to acces the available options.
          </p>
          <v-spacer />
          <p>
            Use the Database Admin page to manage data between the Staging and
            Production databases. Actions include updating the production
            database with new data utizilizing a restful API to push new data to
            the production database.
          </p>
          <v-spacer />
          <p>
            More text here.
          </p>
        </v-card-text>
      </v-card>
      <v-card class="ma-6" elevation="5">
        <v-card-text>
          <p>
            For more information on WSDOT Bridges, check out the
            <a href="https://www.wsdot.wa.gov/bridge" target="_blank">
              WSDOT Bridge and Structures Office</a
            >
          </p>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script></script>
