import 'the-new-css-reset/css/reset.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  viewport: {
    viewports: {
      PC: {
        name: 'PC',
        styles: {
          width: '1440px',
          height: '810px',
        },
      },
      SP: {
        name: 'SP',
        styles: {
          width: '375px',
          height: '667px',
        },
      },
    },
  },
};

const localeDecorator = (Story) => {
  return (
    <div id="__next">
      <div id="rootInner">
        <Story />
      </div>
    </div>
  );
};
export const decorators = [localeDecorator];
