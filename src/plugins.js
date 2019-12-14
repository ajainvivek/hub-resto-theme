const externalUrls = [
  "https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css",
  "https://fonts.googleapis.com/css?family=EB+Garamond:400,400i,700,700i&display=swap",
  "https://use.fontawesome.com/releases/v5.8.2/css/all.css"
];

const injectExternalUrls = urls => {
  urls.forEach(url => {
    const extension = url.split(".").pop();
    let element = null;
    if (extension === "css") {
      element = document.createElement("link");
      element.rel = "stylesheet";
      element.href = "data:text/css," + escape('@import url("' + url + '");');
    } else if (extension === "js") {
      element = document.createElement("script");
      element.setAttribute("src", escape(url));
    } else {
      return;
    }
    document.getElementsByTagName("head")[0].appendChild(element);
  });
};
injectExternalUrls(externalUrls);
