import { render, fireEvent } from '@testing-library/svelte';
import Chance from 'chance';

import Gif from './Gif.svelte';

const chance = new Chance();

describe('Gif', () => {
    const defaultProps = {
        gif: chance.url(),
        source: chance.url(),
        still: chance.url(),
        title: chance.sentence()
    };

    it('displays a gif with the title as the alt text', () => {
        const expectedAltText = chance.sentence();
        const props = {
            ...defaultProps,
            title: expectedAltText
        };
        const { getByAltText } = render(Gif, props);
        const gif = getByAltText(expectedAltText);

        expect(gif).toBeVisible();
    });

    it('displays the still gif when not being interacted with', () => {
        const expectedStillGif = chance.url();
        const props = {
            ...defaultProps,
            still: expectedStillGif
        };
        const { getByTestId } = render(Gif, props);
        const gif = getByTestId('gif');

        expect(gif).toHaveAttribute('src', expectedStillGif);
    });

    it('displays the animated gif when being hovered', () => {
        const expectedAnimatedGif = chance.url();
        const props = {
            ...defaultProps,
            gif: expectedAnimatedGif
        };
        const { getByTestId } = render(Gif, props);
        const gif = getByTestId('gif');

        fireEvent.mouseOver(gif);

        expect(gif).toHaveAttribute('src', expectedAnimatedGif);
    });
});
