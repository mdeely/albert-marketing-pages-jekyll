---
title: Components page
meta:
  ogTitle: Test og title?
  
components:
- component_type: hero
  supertitle: Hero supertitle
  title: Hero title for everyone
  description: Hero description lorem ipsum carpe diem etc.
  cta_label: Hero CTA
  cta_url: hero-url
  img_src: "assets/img/hero-test.svg"

- component_type: salesRoster
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

- component_type: featureGrid
  cardLayout: true
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

- component_type: coursePreview
  title: Learn anything
  group_title: K-12 Core
  cta_url: ""
  courseDomains:
  - title: ELA
    cta_label: View more courses
    cta_url: ""
    courseCards:
    - group: ELA 1
      title: ELA subject 1
    - group: ELA 2
      title: ELA subject 2
  - title: Social Studies
    cta_label: View more courses
    cta_url: ""
    courseCards:
    - group: social-studies
      title: social studies subject

- component_type: comicStrips
  comicStrips:
    - teacher_name: Mr. Deely
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

      - img_src: "assets/img/comic_2.png"
        caption: Second panel of FIRST strip. Lorem ipsum lots of text would go here so that we can see an accurate representation of the amount of text that would display here.

      - img_src: "assets/img/comic_3.png"
        caption: Third panel of FIRST strip.  Lorem ipsum lots of text would go here so that we can see an accurate representation of the amount of text that would display here.

    - teacher_name: Mr. Third person
      teacher_img_src: "assets/img/random-img2.svg"
      comicPanels:
      - img_src: "assets/img/comic_1.png"
        caption: First panel of FIRST strip. Lorem ipsum lots of text would go here so that we can see an accurate representation of the amount of text that would display here. 

      - img_src: "assets/img/comic_2.png"
        caption: Second panel of FIRST strip. Lorem ipsum lots of text would go here so that we can see an accurate representation of the amount of text that would display here.

- component_type: hero
  title: Second title
  description: Second description
  cta_label: Hero CTA
  cta_url: hero-url
  img_src: "assets/img/random-img3.svg"

- component_type: tabBar
  tabBarItems:
  - img_src: "assets/img/random-img3.svg"
    label: Item 1
    # url: "path/to/page" THIS IS OPTIONAL

  - img_src: "assets/img/hero-test.svg"
    label: Item 2

- component_type: slideshow
  title: Slideshow title
  description: Slideshow description
  slideshowItems:
  - title: Slideshow item 1
    description: Slideshow description 1
    img_src: "assets/img/hero-test.svg"

  - title: Slideshow item 2
    description: Slideshow description 2
    img_src: "assets/img/random-img3.svg"

  - title: Slideshow item 3
    description: Slideshow description 3
    img_src: "assets/img/random-img2.svg"

- component_type: preFooter
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