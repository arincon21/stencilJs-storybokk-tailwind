import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'mok-h1',
    styleUrl: 'mok-h1.css',
})
export class Mokh1 {
    @Prop() text: string;

    render() {
        return <h1 class="mb-5 bg-slate-400 p-6 text[30px] rounded-md flex justify-center">Titulo: {this.text}</h1>;
    }
}
