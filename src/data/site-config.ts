import { marked } from 'marked';

export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Steven Boutcher',
    subtitle: 'QA Automation Engineer',
    description: 'Writing the code devs don\'t want to write.',
    image: {
        src: '/steven-selfie',
        alt: 'Selfie in front of a sunflower field'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Skills',
            href: '/skills'
        },
        {
            text: 'Newsletter',
            href: '#subscribe-form'
        }
    ],
    footerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Skills',
            href: '/skills'
        },

    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://linkedin.com/in/boutchersj'
        },
        {
            text: 'Twitter',
            href: 'https://twitter.com/StevenBoutcher'
        },
        {
            text: 'Blog',
            href: 'https://blog.stevenboutcher.com/'
        },
        {
            text: 'Newsletter',
            href: 'https://chasingquality.ck.page/'
        },
    ],
    hero: {
        title: 'Welcome to my world.',
        image: {
            src: '/steven-selfie.png',
            alt: 'elfie in front of a sunflower field'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Join Test Quest',
        text: "I'll send you daily emails (Mon-Fri) for navigating the QA job market.",
        formUrl: 'https://app.convertkit.com/forms/6178332/subscriptions'
    },
    projectsPerPage: 4
};

export default siteConfig;
