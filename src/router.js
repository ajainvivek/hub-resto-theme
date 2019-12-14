import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home.vue";
import Gallery from "./pages/Gallery.vue";
import Menu from "./pages/Menu.vue";
import Contact from "./pages/Contact.vue";
import Review from "./pages/Review.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        title: "Home Page - Example App",
        metaTags: [
          {
            name: "description",
            content: "The home page of our example app."
          },
          {
            property: "og:description",
            content: "The home page of our example app."
          }
        ]
      },
      props: {}
    },
    {
      path: "/gallery",
      name: "Gallery",
      component: Gallery,
      meta: {
        title: "Gallery Page - Example App",
        metaTags: [
          {
            name: "description",
            content: "The home page of our example app."
          },
          {
            property: "og:description",
            content: "The home page of our example app."
          }
        ]
      }
    },
    {
      path: "/menu",
      name: "Menu",
      component: Menu,
      meta: {
        title: "Menu Page - Example App",
        metaTags: [
          {
            name: "description",
            content: "The menu page of our example app."
          },
          {
            property: "og:description",
            content: "The menu page of our example app."
          }
        ]
      }
    },
    {
      path: "/review",
      name: "Review",
      component: Review,
      meta: {
        title: "Review Page - Example App",
        metaTags: [
          {
            name: "description",
            content: "The menu page of our example app."
          },
          {
            property: "og:description",
            content: "The menu page of our example app."
          }
        ]
      }
    },
    {
      path: "/contact-us",
      name: "Contact",
      component: Contact,
      meta: {
        title: "Contact Us Page - Example App",
        metaTags: [
          {
            name: "description",
            content: "The menu page of our example app."
          },
          {
            property: "og:description",
            content: "The menu page of our example app."
          }
        ]
      }
    }
  ]
});
