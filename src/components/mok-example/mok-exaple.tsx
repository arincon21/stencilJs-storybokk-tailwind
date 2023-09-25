import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'mok-exaple',
    styleUrl: 'mok-exaple.css',
})
export class MokExaple {
    @Prop() text: string;

    render() {
        return (
            <div>
                <mok-h1 text="Texto de ejemplo"></mok-h1>
                <div class="flex flex-col md:flex-row gap-5">
                    <my-component first="Stencil" last="'Don't call me a framework' JS"></my-component>
                    <my-component first="Stencil" last="'Don't call me a framework' JS"></my-component>
                    <my-component first="Stencil" last="'Don't call me a framework' JS"></my-component>
                </div>
            </div>
        )
    }
}
