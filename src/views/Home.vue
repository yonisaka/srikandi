<template>
  <div class="home">
    <Appbar />
    <v-container class="grey lighten-5 text-center ">
      <v-row no-gutters>
        <v-col>
          <p class="font-weight-medium h4">Halo hohoho</p>
          <p class="text-secondary">
            Medium-emphasis text and hint text have opacities of 60%.
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <router-link class="nav-link" to="/login">
          <button elevation="2" class="btn btn-primary" large>Login</button>
          </router-link>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card
            class="mx-auto"
            max-width="344"
            outlined
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">
                  OVERLINE
                </div>
                <v-list-item-title class="headline mb-1">
                  Headline 5
                </v-list-item-title>
                <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar
                tile
                size="80"
                color="grey"
              ></v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
              <v-btn
                outlined
                rounded
                text
              >
                Button
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Appbar from "@/components/Appbar.vue"

export default {
  name: "Home",
  components: {
    Appbar,
  }
};
</script>
