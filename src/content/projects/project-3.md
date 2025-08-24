---
title: 'mentor-proof'
description: 'Convert your ADPList reviews into Senja testimonials'
publishDate: 'October 28, 2024'
isFeatured: true
seo:
  image:
    src: '/project-3.png'
    alt: 'Mentor Proof app screenshot -- inputs form requesting ADPList mentor profile URL and Senja API key'
---

![Project preview](/project-3.png)

# Mentor Proof

Convert your ADPList reviews into Senja testimonials.

## Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/5YFUj-qyAO4?si=KrjJx3jh6keoqAzY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Where to find it

https://mentor-proof.netlify.app/

## How it works

1. Fetch all of your ADPList reviews
2. Create a Senja testimonial for each review

## What you'll need

- Your ADPList Mentor Profile URL
  - This is your public profile page on ADPList. For example: https://adplist.org/mentors/steven-boutcher
- Your Senja API key (requires a [Pro plan](https://senja.io/pricing))
  - Find it in your Senja account under [Automate > API](https://app.senja.io/automations)

![Senja API Key Location](/senja_api_key_location.png)

## Local Development

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v20 or later)
- npm (usually comes with Node.js)

### Setting up the project

1. Clone the repository: `git clone https://github.com/yourusername/adplist-senja.git
cd adplist-senja  `

2. Install dependencies: `npm install  `

3. Build the project: `npm run build  `

### Running the dev server

To run the project:

```
npm run dev
```

Once the application is running, open your web browser and navigate to `http://localhost:8888`
