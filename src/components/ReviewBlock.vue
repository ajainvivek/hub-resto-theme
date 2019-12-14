<!-- WebXP: Resume: SuperGeek: Container -->
<template>
  <div class="review-block">
    <h1>Reviews</h1>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-4">
        <hooper
          class="carousel-reviews"
          style="height: 100%"
          :itemsToShow="1"
          :centerMode="true"
          :autoPlay="true"
          :playSpeed="4000"
          :wheelControl="false"
        >
          <slide v-for="(review, index) in reviews" :key="index" class="carousel-slide">
            <b-card class="p-4">
              <h3>{{capitalizeFirstLetter(review.author)}}</h3>
              <p>
                <i class="fa fa-quote-left" aria-hidden="true"></i>
                {{review.description}}
                <i
                  class="fa fa-quote-right"
                  aria-hidden="true"
                ></i>
              </p>
              <footer>
                <span class="item-company">
                  <span v-if="reviewSourceLogo(review.source)">
                    <img
                      v-if="review.source === 'opentable'"
                      src="https://www.vectorlogo.zone/logos/opentable/opentable-official.svg"
                      height="60"
                    >
                  </span>
                  <span v-else>posted on {{review.source}}</span>
                </span>
              </footer>
            </b-card>
          </slide>
        </hooper>
      </div>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
export default {
  name: "ReviewBlock",
  components: {
    Hooper,
    Slide
  },
  props: ["reviews"],
  data: function() {
    return {};
  },
  methods: {
    reviewSourceLogo: function(source) {
      let img = "";
      switch (source) {
        case "opentable":
          img = "./../assets/opentable_logo.svg";
          break;
        default:
          break;
      }
      return img;
    },
    capitalizeFirstLetter: function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
.review-block {
  width: 100%;
  padding: 40px 40px;

  h1 {
    font-size: 60px;
    margin: 20px 0;
    text-align: center;
  }

  .item-company {
    img {
      margin: 0 auto;
      display: table;
    }
  }
}

.carousel-slide {
  h3 {
    color: #000 !important;
    text-align: center;
  }
  p {
    color: #888888;
    font-size: 24px;
    text-align: center;
  }
  footer {
    color: #888888;
    font-size: 24px;
    text-align: center;
  }
  .fa-quote-left {
    padding-right: 10px;
  }
  .fa-quote-right {
    padding-left: 10px;
  }
}

@media (min-width: 320px) and (max-width: 768px) {
  .carousel-slide h3 {
    font-size: 24px !important;
  }

  .carousel-slide p {
    font-size: 16px !important;
  }

  .carousel-slide footer {
    font-size: 20px !important;
  }
}
</style>