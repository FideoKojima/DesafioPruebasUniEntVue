import { mount } from '@vue/test-utils';
import About from '@/views/AboutView.vue';

describe('About.vue', () => {
    test('Vista renderiza correctamente', () => {
        const wrapper = mount(About);
        expect(wrapper.exists()).toBe(true); 
    });
    
    test('coincide snapshot', () => {
        const wrapper = mount(About);
        expect(wrapper.html()).toMatchSnapshot(); 
    });
});
