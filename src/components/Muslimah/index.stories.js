import { Muslimah } from './index';
// import { Ruling1 } from '@al-mabsut/muslimah';

// This default export determines where your story goes in the story list
export default {
  title: 'Muslimah',
  component: Muslimah
};

const Template = (args) =>
  (<Muslimah {...args}>
    STOP
  </Muslimah>);

export const Default = Template.bind({});
// Default.args = { md: };
