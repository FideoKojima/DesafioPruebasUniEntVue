import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import PostsView from "@/views/PostsView.vue";

// Crea un router para probar las rutas
const createRouterMock = () => {
    return createRouter({
        history: createWebHistory(),
        routes: [
        {
            path: "/posts",
            name: "PostsView",
            component: PostsView,
        },
        ],
    });
    };

    describe("PostsView", () => {
    let router;

    beforeEach(() => {
        router = createRouterMock();
    });

    test("Probando la existencia del componente o vista PostsView", async () => {
        router.push("/posts");
        await router.isReady();

        const wrapper = mount(PostsView, {
        global: {
            plugins: [router],
        },
        });

        expect(wrapper.findComponent(PostsView).exists()).toBe(true);
    });

    test("Renderiza correctamente la lista de posts", async () => {
        router.push("/posts");
        await router.isReady();

        const wrapper = mount(PostsView, {
        global: {
            plugins: [router],
        },
        });

        // Verifica que la lista de posts esté renderizada
        const posts = wrapper.findAll("li");
        // Verifica que hay 4 posts
        expect(posts.length).toBe(4);
        // Verifica el primer post
        expect(posts[0].text()).toBe("Post 1");
    });
});
