import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
    community: [
        {
            type: 'autogenerated',
            dirName: '.',
        },
        // {
        // type: 'link',
        // href: '/changelog',
        // label: 'Changelog',
        // },
        // {
        // type: 'link',
        // href: '/showcase',
        // label: 'Showcase',
        // },
        // {
        // type: 'link',
        // href: '/feature-requests',
        // label: 'Feature Requests',
        // },
        // {
        // type: 'link',
        // label: 'Chat with us on Discord',
        // href: 'https://discord.gg/docusaurus',
        // },
    ],
};

export default sidebars;
