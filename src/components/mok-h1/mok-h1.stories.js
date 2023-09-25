export default {
    title: 'Mok Components/mok-h1',
    tags: ['autodocs'],
}

const Template2 = (args) => `<mok-h1 text="${args.text}"></mok-h1>`;

export const Example2 = Template2.bind({});
Example2.args= {
    text: "Titulo de ejemplo",
};