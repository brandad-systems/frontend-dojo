// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/angular/types-6-0';
import { DojocardComponent } from './dojocard.component';
import { moduleMetadata } from '@storybook/angular';
import { MatCardModule } from '@angular/material/card';
import { descriptionOfComplexObject } from './DescriptionOfComplexObject';
import { User } from '../../../stories/User';

const userExmaple: User = {
  name: 'adam',
  age: 99,
};

export default {
  title: 'Example/Dojo',
  component: DojocardComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    title: { control: 'text', defaultValue: 'a little card' },
    user: {
      control: 'object',
      table: {
        category: 'user',
      },
    },
    subtitle: {
      control: 'text',
      defaultValue: 'in the wind',
      table: {
        category: 'bla',
        type: descriptionOfComplexObject,
        defaultValue: { summary: 'Hello' },
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [MatCardModule],
    }),
  ],
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<DojocardComponent> = (args: DojocardComponent) => ({
  props: args,
  template: `<app-dojocard [title]="title" [subtitle]="subtitle" [user]="user">
{{userName}}
{{userAge}}
            <div content>content</div>
            <div actions>
                <button>hello</button>
                <button>buy me now</button>
            </div>
        </app-dojocard>`,
});

export const WithSubtitle = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
WithSubtitle.args = {
  title: 'title',
  subtitle: 'subtitle',
};

export const WithoutSubtitle = Template.bind({});
WithoutSubtitle.args = {
  title: 'title',
  subtitle: '',
  user: {
    name: undefined,
    age: undefined,
  },
};

const TemplateWithOneButton: Story<DojocardComponent> = (args: DojocardComponent) => ({
  props: args,
  template: `<app-dojocard [title]="title" [subtitle]="subtitle" [user]="user">
            <div content>content</div>
            <div actions>
                <button>hello</button>
            </div>
        </app-dojocard>`,
});
export const TemplateWithOneButtonBind = TemplateWithOneButton.bind({});
