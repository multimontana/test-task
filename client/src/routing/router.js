import Vue from "vue";
import Router from "vue-router";
const Exchange = () => import("../pages/Exchange");

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "exchange",
            component: Exchange,
            props: true,
        },
    ]
})

