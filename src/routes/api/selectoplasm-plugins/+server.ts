import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import utilityCss from '$lib/assets/plugins/utilities/utility.css?raw'
import colorsConfig from '$lib/assets/plugins/colors/config.html?raw'
import colorsUtilityCss from '$lib/assets/plugins/colors/utility.css?raw'

const utilities = {
    name: "utilities",
    utilityCss
};

const colors = {
   name: "colors",
   config: colorsConfig,
   utilityCss: colorsUtilityCss,
   workerUrl: "/worker.js"
}

export const GET: RequestHandler = async () => {
    return json({ plugins: [colors, utilities] });
};
