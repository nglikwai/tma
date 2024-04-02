/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    webpack: (config, { defaultLoaders }) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ({ resource }) => [
                defaultLoaders.babel,
                {
                    loader: "react-svg-loader",
                    options: {
                        jsx: true, // true outputs JSX tags
                        svgo: {
                            plugins: [
                                {
                                    cleanupIDs: {
                                        // https://github.com/svg/svgo/issues/674#issuecomment-324193597
                                        prefix: `svg${hash(relative(context, resource))}`
                                    }
                                },
                                { removeViewBox: false },
                                { removeUnknownsAndDefaults: false }
                            ]
                        }
                    }
                }
            ]
        });

        return config;
    }
};

export default nextConfig;
