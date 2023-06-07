import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Link from './index';

export default {
  title: 'base/Link',
  component: Link,
  argTypes: {},
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = ({ ...args }) => {
  return <Link {...args} />;
};

export const SiteLink = Template.bind({});
SiteLink.args = {
  children: <>リンク</>,
  href: '/',
};
