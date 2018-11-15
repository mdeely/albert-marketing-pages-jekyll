---
title: Home
layout: blocks
date: 2018-11-10 19:05:53 +0000
description: Page description
components:
- template: hero
  block: hero-component
  primary_hero: true
  image:
    image: "/uploads/2018/11/11/logo-type-blue.svg"
    alt_text: Albert
  supertitle: Home
  title: Page title
  description: Description for page
  cta:
    url: albert
    button_text: Get started
    enabled: true
- template: tab-bar
  block: tab-bar-component
  tab_bar_item:
  - url: "#hastag"
    link_text: 'Item #1'
  - link_text: 'Item #2'
    url: "#hashtag-2"
- template: feature_list
  block: feature-list-component
  feature_item:
  - supertitle: Albert is...
    title: Title
  title: Title
- template: interstitial
  block: interstitial-component
  description: dfghdfghdfgh fgd hd g dfgh fdgh dfghdfghdfgh dfghdfg hd
  cta:
    url: Anything
    enabled: true
    button_text: Button text
- template: testimonials
  block: testimonials-component
  title: Testimonials
  testimonial:
  - quote: A third one
    teacher_name: Hey
    teacher_type: What
    teacher_level: How
    teacher_location: Idk
  - title: idk
    quote: This is the quote for the person who is being quoteed
    teacher_name: Guy McPerson
    teacher_level: Grade school
    teacher_location: Chicago, IL
    teacher_type: English Teacher
  - title: Title?
    quote: This is the qyote of it
    teacher_name: This is the name
    teacher_type: Math Teacher
    teacher_level: High school
    teacher_location: Chicago, IL
    image:
      image: "/uploads/2018/11/11/logo-type-blue.svg"
      alt_text: a
- template: slideshow
  block: slideshow-component
  slideshow_item:
  - image: "/uploads/2018/11/11/logo-type-blue.svg"
    alt_text: alt
    title: 'Title #2'
    description: 'Description #2'
  - image: "/uploads/2018/11/11/logo-type-blue.svg"
    alt_text: Alt
    title: Title of slide
    description: Description of slide
  title: Slideshow title
  description: Slideshow body
- template: course_preview
  block: course-preview-component
  title: Title of entire section
  group_title: K-12 Advanced Placement
  curriculum_area:
  - title: ELA
    course_card:
    - domain: Math
      course_name: Super cool
      title: 'Mastery Math: Algebra I '
      image:
        image: "/uploads/2018/11/15/1YCXjCrqQ0ajSICdNn7o_full_brave_new_world.svg.png"
    - domain: Social Studies
      course_name: Nice
      title: US Histry
      image:
        image: "/uploads/2018/11/15/1YCXjCrqQ0ajSICdNn7o_full_brave_new_world.svg.png"
        alt_text: this is an image
  - title: Social Studies
    course_card:
    - domain: Science
      course_name: Sweet
      title: Social studies course name
    - domain: World Language
      course_name: Pretty cool
      title: World language course name

---
