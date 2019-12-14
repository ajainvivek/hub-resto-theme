<!-- WebXP: Resume: SuperGeek: Container -->
<template>
  <div class="map">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <l-map :zoom="zoom" :center="center" style="height: 400px">
          <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
          <l-marker :lat-lng="marker"></l-marker>
        </l-map>
      </div>
    </div>
  </div>
</template>

<script>
import L, { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  props: ["location"],
  data() {
    return {
      zoom: 13,
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    };
  },
  mounted: () => {},
  methods: {},
  computed: {
    center: function() {
      const lat = parseFloat(this.location.split(',')[0], 0);
      const long = parseFloat(this.location.split(',')[1], 0);
      return latLng(lat, long);
    },
    marker: function() {
      const lat = parseFloat(this.location.split(',')[0], 0);
      const long = parseFloat(this.location.split(',')[1], 0);
      return latLng(lat, long);
    }
  }
};
</script>

<style scoped lang="scss">
.map {
  width: 100%;
}
</style>