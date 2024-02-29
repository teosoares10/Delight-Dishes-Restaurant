"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    // ... other configurations
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
};
exports.default = config;
