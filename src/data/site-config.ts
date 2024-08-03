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
    description: 'Playwright | TypeScript | React',
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
            text: 'Blog',
            href: 'https://www.hashnode.com/@StevenBoutcher'
        },
        {
            text: 'Newsletter',
            href: 'https://chasingquality.ck.page/'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
        {
            text: 'Download theme',
            href: 'https://github.com/JustGoodUI/dante-astro-theme'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://linkedin.com/in/boutchersj'
        },
        {
            text: 'Twitter',
            href: 'https://twitter.com/StevenBoutcher'
        }
    ],
    hero: {
        title: 'Welcome to my world.',
        text: "I'm **Steven Boutcher**, a QA Automation Engineer at Immunefi. I grow and maintain our end-to-end tests to help our developers save time & avoid unwanted regressions. I also test a lot of new functionality before our users see it. After work, I like to go on adventures with my wife around Door County, Wisconsin. When I'm alone, my favorite way to pass the time is parkour down by the rocks on Lake Michigan. Our 2 black cats, Sadie & Bean, are the best of friends.",
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
        title: 'Join my email list',
        text: 'Daily emails Monday through Friday for navigating the QA job market.',
        formUrl: 'https://chasingquality.ck.page/'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
