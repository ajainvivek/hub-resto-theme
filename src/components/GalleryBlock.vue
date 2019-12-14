<!-- WebXP: Resume: SuperGeek: Container -->
<template>
  <div class="gallery-block">
    <h1>Gallery</h1>
    <div class="row">
      <gallery :images="images" :index="index" @close="index = null"></gallery>
      <b-img
        class="image col-xs-12 col-sm-4 col-md-4 col-lg-3 mt-4"
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        @click="index = imageIndex"
        :src="image"
        fluid
        alt="Responsive image"
      ></b-img>
    </div>
    <div class="show-more" v-if="more">
      <router-link to="/gallery">
        <b-button size="lg" pill variant="outline-dark">Show More</b-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import VueGallerySlideshow from "vue-gallery-slideshow";

export default {
  name: "GalleryBlock",
  components: {
    gallery: VueGallerySlideshow
  },
  props: ["photos", "more", "max"],
  data: function() {
    return {
      index: null
    };
  },
  methods: {},
  computed: {
    images: function() {
      let images = this.photos.map(photo => {
        return photo.url;
      });
      images = this.max ? images.splice(0, this.max) : images;
      return images || [];
    }
  }
};
</script>

<style lang="scss">
.vgs__container {
  height: calc(100vh - 20%) !important;
}
</style>


<style scoped lang="scss">
.gallery-block {
  width: 100%;
  padding: 40px 40px;

  h1 {
    font-size: 60px;
    margin: 20px 0;
    text-align: center;
  }

  .image {
    cursor: pointer;
  }

  .show-more {
    display: table;
    margin: 0 auto;
    margin-top: 40px;
  }
}
</style>