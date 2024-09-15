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
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Steven Boutcher',
    subtitle: 'QA Automation Engineer | QA Career Mentor',
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
            href: 'https://themodernqa.com'
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
            text: 'Newsletter', 
            href: 'https://themodernqa.com'
        },
        {
            text: 'Blog',
            href: 'https://blog.themodernqa.com/'
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
    projectsPerPage: 4
};

export default siteConfig;
