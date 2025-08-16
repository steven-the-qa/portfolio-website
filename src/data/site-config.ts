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
    subtitle: 'QA Automation Engineer | Aspiring Parkour Coach',
    description: 'Writing the code devs don\'t want to write.',
    image: {
        src: '/honeyz-selfie.png',
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
            text: 'Community',
            href: '/community'
        },
        {
            text: 'Resources',
            href: '/resources'
        },
        {
            text: 'Bootcamp',
            href: '/bootcamp'
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
        {
            text: 'Community',
            href: '/community'
        },
        {
            text: 'Resources',
            href: '/resources'
        },
        {
            text: 'Bootcamp',
            href: '/bootcamp'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://linkedin.com/in/stevenboutcher'
        },
        {
            text: 'Blog',
            href: 'https://blog.thesocialqa.com/'
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
                href: 'https://linkedin.com/in/stevenboutcher',
                target: '_blank'
            }
        ]
    },
    projectsPerPage: 4
};

export default siteConfig;
