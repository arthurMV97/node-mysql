import Dashboard from '@/components/Dashboard.vue'
import Home from '@/components/Home.vue'

const routes = [
    {
        path: "/dashboard",
        component: Dashboard,
        meta: {requireAuth: true}
    },
    {
        path: "/",
        component: Home
    },

]





export default routes;