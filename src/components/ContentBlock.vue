<!-- WebXP: Resume: SuperGeek: Container -->
<template>
  <div class="content-block">
    <div class="row content" v-bind:class="{ reverse: reverse }">
      <div class="col-xs-12 col-sm-8 col-md-7 col-lg-7">
        <div class="box">
          <h1>{{basic.name}}</h1>
          <hr>
          <p v-html="basic.description"></p>
        </div>
      </div>
      <div class="col-xs-12 col-sm-8 col-md-5 col-lg-5">
        <div class="box">
          <b-container fluid class="p-1">
            <b-row>
              <b-col>
                <b-img class="thumbnail" thumbnail fluid center :src="thumbnail" alt="Image 1"></b-img>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentBlock",
  components: {},
  props: ["reverse", "basic", "photos"],
  data: function() {
    return {};
  },
  methods: {},
  computed: {
    thumbnail: function() {
      return this.photos && this.photos.data[0].url;
    }
  }
};
</script>

<style scoped lang="scss">
.content-block {
  width: 100%;
}
.box {
  padding: 40px 20px;

  .thumbnail {
    max-height: 400px;
  }

  h1 {
    font-size: 50px;
  }

  h5 {
    font-size: 30px;
    font-weight: 400;
    font-style: italic;
  }

  p {
    font-size: 20px;
  }
}

@media (min-width: 320px) and (max-width: 1024px) {
  .content {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
}
</style>