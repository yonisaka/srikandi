<template>
  <div class="home">
    <Appbar :page="page"/>
    <v-container fill-height class="text-left">
      <v-row justify="center" align="center" >
        <v-col cols="11" sm="6" class="mx-auto">
          <b-form role="form" v-on:submit.prevent>
            <b-form-group
                id="input-group-1"
                label="Nama Lengkap"
                label-for="input-1"
            >
                <b-form-input
                v-model="data.pasien_nama"
                type="text"
                placeholder="Nama Lengkap"
                disabled
                ></b-form-input>
            </b-form-group>

            <b-form-group
                id="input-group-1"
                label="Alamat"
                label-for="input-1"
            >
                <b-form-textarea
                id="textarea"
                v-model="data.pasien_alamat"
                placeholder="Tuliskan Alamat..."
                rows="3"
                max-rows="3" disabled
                ></b-form-textarea>
            </b-form-group>
            <b-form-group
                label="Jenis Kelamin"
            >
            <b-form-input
                v-model="data.pasien_jenis_kelamin"
                type="text"
                disabled
                ></b-form-input>
            </b-form-group>
            <b-form-group
                id="input-group-1"
                label="Umur"
                label-for="input-1"
            >
                <b-form-input
                v-model="data.pasien_umur"
                type="text"
                placeholder="Umur"
                disabled
                ></b-form-input>
            </b-form-group>
            <b-form-group
                id="input-group-1"
                label="Kadar Homogoblin (hb)"
                label-for="input-1"
            >
                <b-form-input
                v-model="data.pasien_homoglobin"
                type="text"
                placeholder="Kadar Homogoblin (hb)"
                disabled
                ></b-form-input>
            </b-form-group>
            <b-form-group
              label="Gejala"
            >
              <b-form-input
                v-model="data.pasien_gejala"
                type="text"
                disabled
                ></b-form-input>
              <!-- <b-form-checkbox
                v-for="data in gejala"
                v-model="pasien_gejala"
                :key="data.gejala_id"
                :value="data.gejala_nama"
                :aria-describedby="ariaDescribedby"
                name="flavour-3a"
              >
                {{ data.gejala_nama }}
              </b-form-checkbox> -->
            </b-form-group>
            <b-form-group
                id="input-group-1"
                label="Nomor Telp"
                label-for="input-1"
            >
                <b-form-input
                v-model="data.pasien_telp"
                type="text"
                placeholder="Nomor Telp"
                disabled
                ></b-form-input>
            </b-form-group>
            <b-form-group
                id="input-group-1"
                label="Email"
                label-for="input-1"
            >
                <b-form-input
                v-model="data.user_mail"
                type="text"
                placeholder="Email"
                disabled
                ></b-form-input>
            </b-form-group>
    
            <!-- <b-form-group
                id="input-group-1"
                label="Password"
                label-for="input-1"
            >
                <b-form-input
                v-model="data.pasien_password"
                type="password"
                placeholder="Password"
                disabled
                ></b-form-input>
            </b-form-group>
            <b-form-group
                id="input-group-1"
                label="Konfirm Password"
                label-for="input-1"
            >
                <b-form-input
                v-model="data.konfirm_pasien_password"
                type="password"
                placeholder="Konfirm Password"
                disabled
                ></b-form-input>
            </b-form-group> -->
            <!-- <b-overlay
              :show="isLoading"
              rounded
              opacity="0.6"
              spinner-small
              spinner-variant="primary"
              >
              <b-button block type="submit" 
              @click="add_process" 
              class="btn btn-round btn-success my-4">
                Simpan
                <b-icon-arrow-right-short></b-icon-arrow-right-short>
              </b-button>
            </b-overlay> -->
          </b-form> 
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Appbar from "@/components/Appbar.vue";
import axios from "axios";

export default {
  name: "Detail_pasien_nakes",
  components: {
      Appbar,
  },
  data() {
    return {
      data: {},
      pasien_gejala: [],
      gejala: [],
      page: {
        path: '/pasien/list_konsultasi',
        title: 'Detail Konsultasi',
      }
    };
  },
  methods: {
    setGejala(data) { 
      this.gejala = data;
    },
    setData(data) {
      this.data = data;
    },
  },
  mounted() {
    axios
      .get("https://srikandi.yogiyulianto.com/gejala/show")
      .then((response) => this.setGejala(response.data.result))
      .catch((error) => console.log(error));

    axios
      .get("https://srikandi.yogiyulianto.com/konsultasi/show?konsultasi_id=" + this.$route.params.id)
      .then((response) => this.setData(response.data.result))
      .catch((error) => console.log(error));
  },
};
</script>
