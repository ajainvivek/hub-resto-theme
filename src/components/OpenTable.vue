<template>
  <div class="opentable-widget-container" v-html="content"></div>
</template>

<script>
"use strict";
/*
   global window
   */
/**
 * Opentable widget
 * ----------------
 * This component dynamically fetches the Opentable script, appends it to the document head and moves
 * the rendered widget into the body. This has multiple downsides, but there currently does not exist
 * a better way to handle the widget with SPA sites.
 */
export default {
  name: "opentable-widget",
  props: {
    /**
     * The script URL provided by Opentable. Can be passed as a String or URL instance
     */
    url: {
      type: [String, URL],
      required: true
    }
  },
  data: () => ({
    /**
     * The widget HTML code which will be passed to v-html
     */
    content: ""
  }),
  /**
   * Upon component creation, we append the script provided by Opentable to the
   * document head, wait for it to download and append the widget node
   */
  created() {
    const opentableScriptTag = window.document.createElement("script");
    opentableScriptTag.setAttribute("type", "application/javascript");
    opentableScriptTag.setAttribute("src", String(this.url));
    opentableScriptTag.addEventListener("load", _ => this.moveWidgetNode());
    opentableScriptTag.addEventListener("abort", _ => this.showWarning());
    opentableScriptTag.addEventListener("error", _ => this.showWarning());
    window.document.head.appendChild(opentableScriptTag);
  },
  methods: {
    /**
     * Move the rendered widget node into the component once the script has loaded
     */
    moveWidgetNode() {
      const widgetNode = window.document.head.querySelector("div");
      this.content = widgetNode.outerHTML;
    },
    /**
     * Show a warning if the script cannot be fetched
     */
    showWarning() {
      this.content = "<span>Not loaded</span>";
    }
  }
};
</script>