---
title: Components page
meta:
  ogTitle: Test og title?
  
components:
  
## Hero
- component_name: hero
  supertitle: Hero supertitle
  title: Hero title for everyone
  description: Hero description lorem ipsum carpe diem etc.
  cta_label: Hero CTA
  cta_url: hero-url
  img_src: "assets/img/hero-test.svg"

## Graph
- component_name: barGraph
  component_title: Groundbreaking efficacy research
  component_description: Based on a controlled study, schools that implemented Albert saw a TBD% improvement in test scores and a strong correlation between scores and Albert usage. Learn more about our methodology
  graphs:
  - graph_title: Improvement over time
    tab_label: Optional
    data:
    - bar_value: 80
      bar_color: "#DD5566"
      group_label: National Average

    - bar_value: 20
      group_label: Albert

  - graph_title: Usage vs Performance
    tab_label: "Optional #2"
    data:
    - bar_value: 100
      bar_label: Year 1
      group_label: Before Albert

    - bar_value: 40
      bar_label: Year 2

    - bar_value: 60
      bar_label: Year 3
      group_label: After Albert

    - bar_value: 90
      bar_label: Year 4

#Testimonial
- component_name: testimonials
  title: testimonials
  testimonialItems:
  - title: Title 1
    quote: Based on a Based on a controlled study, schools that implemented Albert saw a TBD% improvement in test scores and a strong correlation between scores and Albert usage. Learn more about our methodology controlled study, schools that implemented Albert saw a TBD% improvement in test scores and a strong correlation between scores and Albert usage. Learn more about our methodology
    teacher_name: Name 1
    teacher_img_src: "assets/img/random-img3.svg"
    teacher_type: Teacher type 1
    teacher_level: Teacher level 1
    teacher_location: Chicago, IL 1

  - title: Title 2
    quote: quote 2 lorem ipsum ipsum lorem ipsum ipsum random text here that would be the quote
    teacher_img_src: "assets/img/random-img2.svg"
    teacher_name: Name 2
    teacher_type: Teacher type 2
    teacher_level: Teacher level 2
    location: Chicago, IL 2


## Feature list
- component_name: featureList
  title: Optional title for stagger components
  staggerItems:
  - supertitle: supertitle 1
    title: title 1
    cta_label: CTA 1
    cta_url: cta-1
    img_src: "assets/img/random-img3.svg"

  - supertitle: supertitle 2
    title: title 2
    cta_label: CTA 2
    cta_url: cta-2
    img_src: "assets/img/random-img2.svg"

- component_name: interstitial
  component_large: true
  cta_label: Request demo
  cta_link: ""
  description: Lorem ipsum this is a description of the area such as Request a demo to learn more about Albert.io

## Sales Roster
- component_name: salesRoster
  title: Meet the team
  description: As former educators, our School Success team intimately understand what makes for a successful Albert implementation, both within the classroom and across a school.
  cta_label: Contact us
  cta_url: ""
  salesRosterItems:
  - profile_img: "assets/img/random-img3.svg"
    name: Marc Deely

  - profile_img: "assets/img/random-img3.svg"
    name: Marcus Deely

  - profile_img: "assets/img/random-img3.svg"
    name: Marcus Aurelious

## Feature Grid
- component_name: featureGrid
  card_layout: true
  title: Grid title
  featureGridItems:
  - img_src: "assets/img/random-img3.svg"
    title: First grid title
    description: First grid description
    cta_label: First grid CTA
    cta_url: first-grid-cta

  - img_src: "assets/img/random-img2.svg"
    title: Second grid title
    description: Second grid description
    cta_label: Second grid CTA
    cta_url: second-grid-cta

  - img_src: "assets/img/random-img2.svg"
    title: Third grid title
    description: Third grid description
    cta_label: Third grid CTA
    cta_url: third-grid-cta

## Course preview
- component_name: coursePreview
  title: Learn anything
  group_title: K-12 Core
  cta_url: ""
  courseDomains:
  - domain: ELA
    domain_description: Description for domain here
    domain_cta_label: View more ELA
    domain_cta_url: ""
    courseCards:
    - card_group: ela
      card_img_src: "heart_of_darkness.svg"
      card_title: ELA subject 1

    - card_group: ela
      card_img_src: "heart_of_darkness.svg"
      card_title: ELA subject 2

  - domain: Social Studies
    domain_cta_label: View Social Studies
    domain_cta_url: ""
    courseCards:
    - card_group: social-studies
      card_title: social studies subject
      card_img_src: "heart_of_darkness.svg"

## Comic strip
- component_name: comicStrips
  comicStrips:
    - teacher_name: Mr. Zakaria
      teacher_img_src: "assets/img/random-img2.svg"
      comicPanels:
      - img_src: "assets/img/comic_1.png"
        caption: First panel of FIRST strip. Lorem ipsum lots of text would go here so that we can see an accurate representation of the amount of text that would display here. 

      - img_src: "assets/img/comic_2.png"
        caption: Second panel of FIRST strip. Lorem ipsum lots of text would go here so that we can see an accurate representation of the amount of text that would display here.

      - img_src: "assets/img/comic_3.png"
        caption: Third panel of FIRST strip.  Lorem ipsum lots of text would go here so that we can see an accurate representation of the amount of text that would display here.

      - img_src: "assets/img/comic_4.png"
        caption: Fourt panel of FIRST strip.  Lorem ipsum lots of text would go here so that we can see an accurate representation of the amount of text that would display here.

    - teacher_name: Mr. Secondeely
      teacher_img_src: "assets/img/random-img3.svg"
      comicPanels:
      - img_src: "assets/img/comic_1.png"
        caption: First panel of FIRST strip. Lorem ipsum lots of text would go here so that we can see an accurate representation of the amount of text that would display here. 
      
      - img_src: "assets/img/comic_1.png"
        caption: First panel of FIRST strip. Lorem ipsum
        
      - img_src: "assets/img/comic_2.png"
        caption: Second panel of FIRST strip. Lorem ipsum lots of text would go here so that we can see an accurate representation of the amount of text that would display here.

      - img_src: "assets/img/comic_3.png"
        caption: Third panel of FIRST strip.  Lorem ipsum lots of text would go here so that we can see an accurate representation of the amount of text that would display here.

    - teacher_name: Mr. Third person
      teacher_img_src: "assets/img/random-img2.svg"
      comicPanels:
      - img_src: "assets/img/comic_1.png"
        caption: First panel of FIRST strip. Lorem ipsum

      - img_src: "assets/img/comic_1.png"
        caption: First panel of FIRST strip. Lorem ipsum

      - img_src: "assets/img/comic_1.png"
        caption: First panel of FIRST strip. Lorem ipsum lots of text would go here so that we can see an accurate representation of the amount of text that would display here. 

      - img_src: "assets/img/comic_2.png"
        caption: Second panel of FIRST strip. Lorem ipsum lots of text would go here so that we can see an accurate representation of the amount of text that would display here.

## Hero
- component_name: hero
  title: Second title
  description: Second description
  cta_label: Hero CTA
  cta_url: hero-url
  img_src: "assets/img/random-img3.svg"

## Tab bar
- component_name: tabBar
  tabBarItems:
  - img_src: "assets/img/random-img3.svg"
    label: Item 1
    # url: "path/to/page" THIS IS OPTIONAL

  - img_src: "assets/img/hero-test.svg"
    label: Item 2

## Slideshow
- component_name: slideshow
  title: Learn by doing
  description: Slideshow description
  slideshowItems:
  - title: Immediate feedback
    description: Our detailed explanations let learners address misconceptions and build context as they practice. Each interaction feels like having a personal tutor, on-demand.
    img_src: "assets/img/hero-test.svg"

  - title: Personalization
    description: Learners can customize their learning experience to fit their needs and interests to always stay motivated and engaged. 
    img_src: "assets/img/random-img3.svg"

  - title: Engaging formats
    description: Our question formats provide learners with multiple ways to learn and make the content come alive like pencil and paper never could.
    img_src: "assets/img/random-img2.svg"

## Prefooter
- component_name: preFooter
  # left:
  #   img_src: "assets/img/random-img.svg"
  #   title: Left title
  #   description: Left description
  #   cta_label: Left CTA
  #   cta_url: left-cta
  # right:
  #   img_src: "assets/img/random-img2.svg"
  #   title: Right title
  #   description: Right description
  #   cta_label: Right CTA
  #   cta_url: right-cta
---