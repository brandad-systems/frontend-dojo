// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { userEvent, screen } from '@storybook/testing-library';
import { MatButtonModule } from '@angular/material/button';
import { DojoCounterComponent } from './dojo-counter.component';

export default {
  title: 'Example/Dojo-Counter',
  component: DojoCounterComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
  },
  decorators: [
    moduleMetadata({
      imports: [ 
        MatButtonModule
      ],
    }),
  ],
} as Meta;

const TemplateCounter: Story<DojoCounterComponent> = (args: DojoCounterComponent) => ({
  props: args,
});
export const TemplateCounterBind = TemplateCounter.bind({});
TemplateCounterBind.play = async () => {
  const incrementButton = screen.getByText('Increment');
  const decrementButton = screen.getByText('Decrement');

  userEvent.click(incrementButton);

  screen.getByText("1")

  userEvent.click(decrementButton);

  screen.getByText("0")
};
