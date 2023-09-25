export default {
    title: 'Mok Components/My-component',
    parameters: {
        notes: 'some documentation here',
    },
    tags: ['autodocs'],
}

const Template = (args) => `<my-component first="${args.first}" middle="${args.middle}" last="${args.last}"></my-component></my-component>`;

export const Example = Template.bind({});
Example.args= {
    first: "Alvaro",
    middle: "Rincon",
    last:"Ortega"
};