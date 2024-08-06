export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
    target?: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    cta?: string;
    newsletter?: string;
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
    subtitle: 'QA Automation Engineer | Job Search Mentor',
    description: 'Writing the code devs don\'t want to write.',
    image: {
        src: '/honeyz-selfie',
        alt: 'Selfie with my wife on a hiking trail in the fall'
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
            text: 'Resume',
            href: '/Steven_Boutcher_Resume.pdf',
            target: '_blank'
        },
        {
            text: '•',
            href: ''
        },
        {
            text: 'Newsletter',
            href: 'https://chasingquality.ck.page/',
            target: '_blank'
        },
        {
            text: 'Community',
            href: '/community'
        },
        {
            text: 'Resources',
            href: '/resources'
        },
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
        {
            text: 'Community',
            href: '/community'
        },
        {
            text: 'Resources',
            href: '/resources'
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
        image: {
            src: '/honeyz-selfie.png',
            alt: 'Selfie with my wife on a hiking trail in the fall'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: 'https://linkedin.com/in/boutchersj',
                target: '_blank'
            }
        ]
    },
    subscribe: {
        cta: 'Join',
        newsletter: 'Test Quest',
        text: "Daily emails for the QA job hunter seeking a competitive edge.",
        formUrl: 'https://app.convertkit.com/forms/6178332/subscriptions'
    },
    projectsPerPage: 4
};

export default siteConfig;
