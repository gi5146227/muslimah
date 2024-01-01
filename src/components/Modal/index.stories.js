import Modal from './index';

// This default export determines where your story goes in the story list
export default {
  title: 'Modal/base',
  component: Modal
};

const Template = (args) => <Modal {...args} />;

export const Default = Template.bind({});
// Default.args = { /* Arguments you want to pass to the component */ };