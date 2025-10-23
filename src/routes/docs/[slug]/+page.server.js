import { pages } from "../../data.js";
import { error } from '@sveltejs/kit';
import fs from 'node:fs';

export async function load({ params }) {
    const page = pages.find((page) => page.slug === params.slug);

    if (!page) error(404);

    try {
        const data = fs.readFileSync(`./public/${page.filename}`, 'utf8');
        page.file = data;
        console.log(data);
    } catch (err) {
        console.error(err);
    }

    return {
        page
    };
}