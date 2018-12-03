---
title: Home example
layout: blocks
date: 2018-11-28 21:20:06 +0000
description: ''
components:
- template: hero
  block: hero-component
  primary_hero: true
  image:
    image: "/uploads/2018/11/20/features-hero.svg"
  supertitle: Supertitle
  title: Title
  description: 'Lorem ipsum this is the description for this thing. '
  cta:
    enabled: true
    url: url
    button_text: CTA text
- template: course_preview
  block: course-preview-component
  title: Learn anything
  curriculum_area:
  - title: Math
    cta:
      enabled: true
      button_text: View courses
    course_card:
    - domain: Science
      title: Science
      image:
        image: "/uploads/2018/11/27/mastery_math_precalculus.svg"
    - domain: World Language
      title: World language
      image:
        image: "/uploads/2018/11/27/mastery_math_algebra_1 (1).svg"
    - domain: Math
      title: Math
      image:
        image: "/uploads/2018/11/27/mastery_math_algebra_2.svg"
  - cta:
      url: url
      button_text: View more courses
      enabled: true
    course_card:
    - domain: Other
      title: Another name
      image:
        image: "/uploads/2018/11/27/mastery_math_algebra_1 (1).svg"
    - domain: ELA
      title: AP® Subject name
      image:
        image: "/uploads/2018/11/27/mastery_math_precalculus.svg"
    title: ELA
  group_title: K-12 Core
- template: feature_list
  block: feature-list-component
  feature_item:
  - supertitle: Albert is...
    title: Rockets
    image:
      image: "/uploads/2018/11/24/rocket_soaring.svg"
    cta:
      url: optional
      button_text: Optional button
  - supertitle: Albert is...
    title: Showing off biceps
    image:
      image: "/uploads/2018/11/24/build-confidence.svg"
  - supertitle: Albert is...
    title: High fiving
    image:
      image: "/uploads/2018/11/20/features-hero.svg"
- template: pre-footer
  block: pre-footer-component
  left:
    image:
      image: "/uploads/2018/11/24/rocket_soaring.svg"
    title: Try Albert for free
    description: Build confidence and educator buy-in with an Albert trial supported
      by a dedicated member of our Schools team.
    cta:
      button_text: Apply
  right:
    image:
      image: "/uploads/2018/11/24/analytics_data_support (1).svg"
    title: Get a consultation
    description: Explore how Albert can help your school meet its instructional goals
      with one of our Schools team members.
    cta:
      button_text: Request demo
      url: https://www.albert.io/schools/request-demo

---
