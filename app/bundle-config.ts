if ((<any>global).TNS_WEBPACK) {
    //registers tns-core-modules UI framework modules
    require("bundle-entry-points");

    //register application modules
    global.registerModule("main.page", () => require("./pages/main/main.page"));
    global.registerModule("posts.page", () => require("./pages/posts/posts.page"));
}
