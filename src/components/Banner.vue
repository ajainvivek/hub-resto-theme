<!-- WebXP: Resume: SuperGeek: Container -->
<template>
  <div class="banner">
    <hooper
      id="carousel"
      style="text-shadow: 0px 0px 2px #000;"
      :progress="true"
      :centerMode="true"
      :wheelControl="false"
    >
      <slide v-for="(item) in basic.banner" :key="item.uid">
        <div class="slide-item">
          <img class="img-fluid" :src="item.url">
          <div class="main-content">
            <div class="row center-xs middle-xs content">
              <div class="col-xs-8">
                <div class="box">
                  <h1>Welcome to the</h1>
                  <p>{{basic.name}}</p>
                </div>
                <!-- .tm_pb_text -->
                <div class="inner-content">
                  <p>
                    <em>{{contact.address}}</em>
                  </p>
                  <p v-if="rating">
                    <span class="star-rating">
                      <i class="fas fa-star" v-for="(item, index) in rating" :key="index"></i>
                      <i class="far fa-star" v-for="(item, index) in 5 - rating" :key="index"></i>
                    </span>
                  </p>
                  <p>
                    Call
                    <a :href="'callto:' + contact.telephone">{{contact.telephone}}</a>
                  </p>
                  <hr>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hooper-progress slot="hooper-addons"></hooper-progress>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
      </slide>
    </hooper>
  </div>
</template>

<script>
import {
  Hooper,
  Slide,
  Progress as HooperProgress,
  Pagination as HooperPagination
} from "hooper";
import "hooper/dist/hooper.css";
export default {
  name: "Banner",
  props: ["basic", "contact"],
  components: {
    Hooper,
    Slide,
    HooperProgress,
    HooperPagination
  },
  data: function() {
    return {};
  },
  methods: {},
  computed: {
    rating: function() {
      return Math.round(this.basic.rating) || 0;
    }
  }
};
</script>

<style scoped lang="scss">
.banner {
  height: 100%;
  width: 100%;
  .img-fluid {
    min-height: 240px;
    width: 100%;
  }
}

a {
  text-decoration: none;
  color: var(--white);
}

.content {
  height: 100%;
}

.main-content {
  position: absolute;
  z-index: 999;
  width: 100%;
  height: 100%;
  color: var(--light);
  background: rgba(0, 0, 0, 0.5);
  top: 0;

  .box {
    padding: 10px 0;
  }
}

.star-rating {
  padding: 0 10px;
  i {
    padding: 0 3px;
  }
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 320px) {
  .content {
    .box {
      h1 {
        font-size: 30px;
      }
      p {
        font-size: 25px;
      }
    }
    .inner-content {
      font-size: 15px;
    }
  }
  #carousel {
    height: auto !important;
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  .content {
    .box {
      h1 {
        font-size: 50px;
      }
      p {
        font-size: 40px;
      }
    }
    .inner-content {
      font-size: 20px;
    }
  }
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  .content {
    .box {
      h1 {
        font-size: 70px;
      }
      p {
        font-size: 50px;
      }
    }
    .inner-content {
      font-size: 22px;
    }
  }
}
</style>