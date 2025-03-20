// export default function manifest() {
// return {
//     name: "Foccus",
//     short_name: "Foccus",
//     description: "Focus in less than a minute",
//     start_url: "/",
//     display: "standalone",
//     background_color: "#ffffff",
//     theme_color: "#000000",
//     orientation: "portrait",
//     icons: [
//         {
//             src: "/android-icon-192x192.png",
//             sizes: "192x192",
//             type: "image/png",
//         },
//         {
//             src: "/apple-icon-57x57.png",
//             sizes: "57x57",
//             type: "image/png",
//         },
//         {
//             src: "/apple-icon-60x60.png",
//             sizes: "60x60",
//             type: "image/png",
//         },
//         {
//             src: "/apple-icon-72x72.png",
//             sizes: "72x72",
//             type: "image/png",
//         },
//         {
//             src: "/apple-icon-76x76.png",
//             sizes: "76x76",
//             type: "image/png",
//         },
//         {
//             src: "/apple-icon-114x114.png",
//             sizes: "114x114",
//             type: "image/png",
//         },
//         {
//             src: "/apple-icon-120x120.png",
//             sizes: "120x120",
//             type: "image/png",
//         },
//         {
//             src: "/apple-icon-144x144.png",
//             sizes: "144x144",
//             type: "image/png",
//         },
//         {
//             src: "/apple-icon-152x152.png",
//             sizes: "152x152",
//             type: "image/png",
//         },
//         {
//             src: "/apple-icon-180x180.png",
//             sizes: "180x180",
//             type: "image/png",
//         },
//         {
//             src: "/favicon-512x512.png",
//             sizes: "512x512",
//             type: "image/png",
//         },
//         {
//             src: "/favicon-96x96.png",
//             sizes: "96x96",
//             type: "image/png",
//         },
//         {
//             src: "/favicon-32x32.png",
//             sizes: "32x32",
//             type: "image/png",
//         },
//         {
//             src: "/favicon-16x16.png",
//             sizes: "16x16",
//             type: "image/png",
//         },
//     ],
// };
// }
export function getServerSideProps({ res }) {
    res.setHeader("Content-Type", "application/json");
    res.write(
        JSON.stringify({
            name: "Foccus",
            short_name: "Foccus",
            description: "Focus in less than a minute",
            start_url: "/",
            display: "standalone",
            background_color: "#ffffff",
            theme_color: "#000000",
            orientation: "portrait",
            icons: [
                {
                    src: "/android-icon-192x192.png",
                    sizes: "192x192",
                    type: "image/png",
                },
                {
                    src: "/apple-icon-57x57.png",
                    sizes: "57x57",
                    type: "image/png",
                },
                {
                    src: "/apple-icon-60x60.png",
                    sizes: "60x60",
                    type: "image/png",
                },
                {
                    src: "/apple-icon-72x72.png",
                    sizes: "72x72",
                    type: "image/png",
                },
                {
                    src: "/apple-icon-76x76.png",
                    sizes: "76x76",
                    type: "image/png",
                },
                {
                    src: "/apple-icon-114x114.png",
                    sizes: "114x114",
                    type: "image/png",
                },
                {
                    src: "/apple-icon-120x120.png",
                    sizes: "120x120",
                    type: "image/png",
                },
                {
                    src: "/apple-icon-144x144.png",
                    sizes: "144x144",
                    type: "image/png",
                },
                {
                    src: "/apple-icon-152x152.png",
                    sizes: "152x152",
                    type: "image/png",
                },
                {
                    src: "/apple-icon-180x180.png",
                    sizes: "180x180",
                    type: "image/png",
                },
                {
                    src: "/favicon-512x512.png",
                    sizes: "512x512",
                    type: "image/png",
                },
                {
                    src: "/favicon-96x96.png",
                    sizes: "96x96",
                    type: "image/png",
                },
                {
                    src: "/favicon-32x32.png",
                    sizes: "32x32",
                    type: "image/png",
                },
                {
                    src: "/favicon-16x16.png",
                    sizes: "16x16",
                    type: "image/png",
                },
            ],
        }),
    );
    res.end();

    return {
        props: {},
    };
}

export default function Manifest() {
    return null;
}
