---
title: Test page
layout: blocks
date: 2018-11-26 20:28:13 +0000
description: ''
components:
- template: testimonials
  block: testimonials-component
  testimonial: Testimonials
  testimonials:
  - image: "/uploads/2018/11/25/results-hero.svg"
    alt_text: Mr. Mann
    quote: Here is a quote that can go in this spot. I am typing a second sentence.
      And a third!
    teacher_type: Science Professor
    teacher_level: College
    teacher_location: Austin, TX
    teacher_name: Mr. Mann
  - image: "/uploads/2018/11/26/k-12-ela-hero.svg"
    alt_text: Guy
    teacher_name: Guy
    teacher_level: Elementary school
    teacher_location: Atlanta, GA
    quote: 'Lorem ipsum a small quote. '
    teacher_type: AP® Science teacher
  - image: "/uploads/2018/11/24/benefits-educators-tab.svg"
    alt_text: Teacher McName
    teacher_name: Teacher McName
    quote: 'I really like Albert so much and I''m so happy that my students like it
      too. Such a great product. '
    teacher_type: Math teacher
    teacher_level: Middle school
    teacher_location: Chicago, IL
- template: course_preview
  block: course-preview-component
  group_title: K-12 Core
  title: Learn anything
  curriculum_area:
  - title: ELA
    cta:
      button_text: View more ELA courses
      url: "/k-12/ela"
      enabled: true
    course_card:
    - domain: ELA
      title: Fake course 2
      image:
        image: "/uploads/2018/11/26/reading_blueprints.svg"
    - domain: ELA
      title: Fake course
      image:
        image: "/uploads/2018/11/26/reading_blueprints.svg"
  - title: Math
    cta:
      button_text: Explore more Math courses
      enabled: true
      url: "`k-12/math`"
    course_card:
    - domain: Math
      title: Fake course 1
      image:
        image: "/uploads/2018/11/26/reading_blueprints.svg"
    - domain: Math
      title: Fake course 2
      image:
        image: "/uploads/2018/11/26/reading_blueprints.svg"
  - title: Science
    cta:
      button_text: Explore more Science courses
      enabled: true
      url: "`k-12/science`"
    course_card:
    - domain: Science
      title: Fake course 1
      image:
        image: "/uploads/2018/11/26/reading_blueprints.svg"
    - domain: Science
      title: Fake course 2
      image:
        image: "/uploads/2018/11/26/reading_blueprints.svg"
- template: course_preview
  block: course-preview-component
  group_title: K-12 Test Prep
  curriculum_area:
  - title: Advanced Placement®
    description: Coverage of 33 AP® Subjects
    cta:
      enabled: true
      url: https://albert.io/k-12/test-prep/advanced-placement
      button_text: Explore all 33 AP® courses
    course_card:
    - domain: Math
      title: AP® Fake 1
      image:
        image: "/uploads/2018/11/26/ernest_hemingway.svg"
    - domain: Social Studies
      title: AP® Fake 2
      image:
        image: "/uploads/2018/11/26/reading_blueprints.svg"
    - domain: World Language
      title: AP® Fake 3
      image:
        image: "/uploads/2018/11/26/reading_blueprints.svg"
    - domain: World Language
      title: AP® Fake 4
      image:
        image: "/uploads/2018/11/26/reading_blueprints.svg"
    - domain: Computer Science
      title: AP® Fake 5
      image:
        image: "/uploads/2018/11/26/reading_blueprints.svg"
  - title: SAT®
    course_card:
    - domain: Social Studies
      title: Fake SAT® 1
      image:
        image: "/uploads/2018/11/26/reading_blueprints.svg"
  - title: ACT®
    course_card:
    - domain: Social Studies
      title: Fake ACT® 1
      image:
        image: "/uploads/2018/11/26/reading_blueprints.svg"
published: false

---
