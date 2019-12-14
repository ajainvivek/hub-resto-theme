<!-- WebXP: Resume: SuperGeek: Container -->
<template>
  <div class="footer">
    <div class="footer-copyright">Â© 2019 {{content.name}}. All Rights Reserved.</div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  props: ["content"],
  data: function() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>

<style lang="scss" scoped>
.footer-copyright {
  margin: 40px;
  color: #888888;
  text-align: center;
}
</style>