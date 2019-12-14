<template>
  <div id="app">
    <div class="page-loader d-flex justify-content-center align-items-center mb-3" v-if="loading">
      <b-spinner label="Loading..."></b-spinner>
    </div>
    <div v-else>
      <Header :content="content"/>
      <transition name="fade" mode="out-in">
        <router-view :content="content"></router-view>
      </transition>
      <Footer :content="content.basic"/>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import content from "./assets/content.json";
import config from "./../hub.json";

export default {
  components: { Header, Footer },
  created() {
    if (!config.preview) {
      let vm = this;
      vm.content = content;
    }
  },
  mounted() {
    if (config.preview) {
      this.registerEventListeners();
    }
  },
  data: function() {
    return {
      transitionName: "slide-left",
      loading: false,
      content: {}
    };
  },
  methods: {
    fetchContent(hubBaseUrl, hubId) {
      this.$http
        .get(`${hubBaseUrl}/distributions/${hubId}/siteContent`)
        .then(response => {
          this.content = response.data;
        })
        .catch(error => {
          console.error("ERROR =>", error.message);
        });
    },
    registerEventListeners() {
      window.parent.postMessage(
        {
          sitePreviewReady: true
        },
        "*"
      );
      window.addEventListener(
        "message",
        event => {
          if (
            typeof event.data === "object" &&
            event.data.previewMode === "true"
          ) {
            const hubId = event.data.hubId || config.id;
            const hubBaseUrl = event.data.hubBaseUrl || config.baseContentUrl;
            switch (event.data.hubEventType) {
              case "onload":
                this.fetchContent(hubBaseUrl, hubId);
                // TODO: Fetch Theme Config
                break;
              case "content":
                this.fetchContent(hubBaseUrl, hubId);
                break;
              case "theme":
                // TODO
                break;
              default:
                break;
            }
          }
        },
        false
      );
    }
  }
};
</script>

<style lang="scss">
:root {
  --primary: red;
  --blue: red;
}
html,
body {
  height: 100%;
  width: 100%;
}
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-family: "EB Garamond", serif;
}
#app,
.page-loader {
  height: 100%;
  width: 100%;
  .body {
    max-width: 1200px;
    margin: 0px auto;
    display: table;
  }
}
.row {
  margin-right: 0;
  margin-left: 0;
}
.carousel-caption {
  height: 100%;
}
.navbar {
  padding: 2rem 1rem;
}

@media (min-width: 320px) and (max-width: 780px) {
  .navbar {
    padding: 0.5rem 1rem;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style> 
