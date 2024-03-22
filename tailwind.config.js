/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",'node_modules/flowbite-react/lib/esm/**/*.js'],
    theme: {
        extend: {
            colors: {
                merah: "#B84646",
                hijau: "#48BB78",
                kuning: "#E27E36",
                hitam : "#1d232a",
                biru_gelap : "#27374d"
            },
        },
    },
    plugins: [require("flowbite/plugin"), require("daisyui")],
};
