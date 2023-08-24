/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            spacing: {
                120: "480px",
                140: "560px",
                160: "640px",
                180: "720px",
                225: "900px"
            }
        },
    },
    daisyui: {
        themes: [

            // Include the emerald theme in the DaisyUI config
            // "light",
            // "dark",
            // "cupcake",
            // "bumblebee",
            "emerald",
            // "corporate",
            // "synthwave",
            // "retro",
            // "cyberpunk",
            // "valentine",
            // "halloween",
            // "garden",
            // "forest",
            // "aqua",
            // "lofi",
            // "pastel",
            // "fantasy",
            // "wireframe",
            // "black",
            // "luxury",
            "dracula",
            // "cmyk",
            // "autumn",
            // "business",
            // "acid",
            // "lemonade",
            // "night",
            // "coffee",
            // "winter",
            {
                mytheme1: {

                    "primary": "#c1f449",

                    "secondary": "#efd045",

                    "accent": "#f9313b",

                    "neutral": "#402541",

                    "base-100": "#2d3043",

                    "info": "#7e91f1",

                    "success": "#149489",

                    "warning": "#d3700d",

                    "error": "#f2637b",
                },
                mytheme: {

                    "primary": "#bf95f9",

                    // "secondary": "#bf95f9",
                    "secondary": "#efd045",

                    "accent": "#ffb86b",

                    "neutral": "#414558",

                    "base-100": "#272935",

                    "info": "#8be8fd",

                    "success": "#52fa7c",

                    "warning": "#f1fa89",

                    "error": "#ff5757",
                },
            },
        ],
    },

    plugins: [daisyui],

}

