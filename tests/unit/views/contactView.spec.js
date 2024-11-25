import { mount } from '@vue/test-utils';
import Contact from '@/views/ContactView.vue';

describe('Contact.vue', () => {
    test('Vista Contact renderiza correctamente', () => {
        const wrapper = mount(Contact);
        expect(wrapper.exists()).toBe(true);
    });
});
