<!-- WebXP: Resume: SuperGeek: Container -->
<template>
  <div class="contact-block">
    <h1>Contact Us</h1>
    <div class="row">
      <div class="col-lg-5">
        <b-card no-body style="width: 100%; height: 100%;">
          <b-list-group flush>
            <b-list-group-item>
              <a :href="'tel:' + contact.telephone" class="contact-tile">
                <div class="wrapper">
                  <h4>Telephone Number</h4>
                  <span class="itemprop">{{contact.telephone}}</span>
                </div>
                <i class="fa fa-phone"></i>
              </a>
            </b-list-group-item>
            <b-list-group-item>
              <a
                href="https://maps.google.com/?q=Manly+Paradise+Motel+%26+Apartments+54 N Steyne+Manly+NSW+2095+Australia&amp;ll=-33.79599338,151.28740311"
                aria-label="Google Maps - Opens in a new window"
                target="_blank"
                rel="noopener"
                class="contact-tile"
              >
                <div class="wrapper">
                  <h4>Address</h4>
                  <span class="itemprop" v-html="address"></span>
                </div>
                <i class="fa fa-map"></i>
              </a>
            </b-list-group-item>
          </b-list-group>
        </b-card>
      </div>
      <div class="col-lg-7">
        <Map v-if="contact.location" :location="contact.location"/>
      </div>
    </div>
  </div>
</template>

<script>
import Map from "./Map";

export default {
  name: "ContactBlock",
  components: {
    Map
  },
  props: ["contact"],
  data: function() {
    return {};
  },
  methods: {},
  computed: {
    address: function() {
      return this.contact.address.split(",").join("</br>") || "";
    }
  }
};
</script>


<style scoped lang="scss">
.contact-block {
  width: 100%;
  padding: 40px 40px;

  h1 {
    font-size: 60px;
    margin: 40px 0;
    text-align: center;
  }

  .contact-tile {
    text-decoration: none;
    color: var(--secondary);

    .wrapper {
      float: left;
    }

    h4 {
      color: var(--dark);
    }

    i {
      float: right;
    }
  }
}
</style>