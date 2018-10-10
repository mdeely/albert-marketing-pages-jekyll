---
title: Your page title
description: Your page description

# Being listing your components
# Recommendations provided throughout this file. None are binding, but will generally provide the best aesthetic presentation. 
components:

## Hero component
- component_name: hero
  supertitle: Hero supertitle #O ptional
  title: Hero title
  description: Hero description. # Optional
  cta_label: Hero CTA # Optional
  cta_url: hero-url # Optional
  hero_img: "hero-test.svg"

## Bar graph component
- component_name: barGraph
  component_title: Title of component section
  component_description: Description of component section # Optional
  graphs:
  ## Duplicate from here to have mutliple graphs.
  - graph_title: First title # Optional
    tab_label: First tab
    data:
    ## Duplicate from here to add another bar.
    ## Recommended 4 maximum.
    - bar_value: 80
      bar_value_label: Custom label # Optional (default: bar_value + %)
      bar_color: "#DD5566" # Optional (default: green)
      bottom_label: Label below bar # Optional (recommended)

## Testimonial components
- component_name: testimonials
  title: Title of tesimonial section
  testimonialItems:
  ## Duplicate from here to add another testimonial
  ## Recommended 3 minimum. 
  - title: Title 1
    quote: The quote goes here 
    teacher_name: Name, Ofperson
    teacher_img_src: "random-img3.svg"
    teacher_type: Math teacher
    teacher_level: High school
    teacher_location: Chicago, IL


## Feature list component
- component_name: featureList
  title: Optional title for stagger components
  staggerItems:
  ## Duplicate from here to add another item
  ## Recommended 2 minimum
  - supertitle: supertitle 1
    title: title 1
    cta_label: CTA 1 # Optional
    cta_url: cta-1 # Optional
    img_src: "random-img3.svg"

## Interstitial component
- component_name: interstitial
  component_large: true ## Optional - remove component_large to use the alternate style
  title: Title for interstital # Does not display UNLESS component_large is true
  cta_label: Request demo
  cta_link: "#demo_form"
  description: Description # Does not display IF component_large is true

- component_name: leadGen
  modal: true
  modal_name: demo_form # Use "#the-modal-name-you-choose" in a cta_link to call that modal. 
  ## Paste the entirety of the "Javascript Embed Script" from formstack. Do not put quotes or anything around the code. 
  embed_script: <script type="text/javascript" src="https://learnwithalbert.formstack.com/forms/js.php/untitled_form"></script><noscript><a href="https://learnwithalbert.formstack.com/forms/untitled_form" title="Online Form">Online Form - Demo Request Form</a></noscript>

## Sales roster component
- component_name: salesRoster
  title: Title of salesRoster component section
  description: Description of salesRoster component section
  cta_label: Contact us
  cta_url: ""
  salesRosterItems:
  ## Duplicate from here to add another profile
  - profile_img: "random-img3.svg"
    name: Name Ofperson

## Feature grid component
- component_name: featureGrid
  card_layout: true # Optional - Remove to use alternate display
  title: Title of grid component section
  featureGridItems:
  ## Duplicate from here to add another feature item
  ## Recommended 3 minimum, 6 maximum. 
  - img_src: "random-img3.svg"
    title: Title of feature
    description: Description of feature
    cta_label: CTA label # Optional
    cta_url: cta-url # Optional

## Course preview component
### Available domain names are the following:
### ela, world-language, social-studies, computer-science, math, science, and other.
- component_name: coursePreview
  title: Title of coursePreview section
  group_title: Title of domain+group
  cta_url: ""
  courseDomains:
  ## Duplicate from here to add another domain collection
  - domain: ELA
    domain_description: Description for domain here # Optional
    domain_cta_label: View more ELA
    domain_cta_url: ""
    courseCards:
    ## Duplicate from here to add another card
    ## Recommended 3 minimum 
    - card_group: ela
      card_img_src: "heart_of_darkness.svg"
      card_title: Title of subject

## Comic strip component
- component_name: comicStrips
  comicStrips:
    ## Duplicate from here to add another comic strip
    - teacher_name: Mr. Teachername
      teacher_img_src: zakaria.png
      comicPanels:
      ## REQUIRED 4 panels per comic strip. 
      - img_src: "comic_1.png"
        caption: Caption of the comic panel image. 

      - img_src: "comic_1.png"
        caption: Caption of the comic panel image. 

      - img_src: "comic_1.png"
        caption: Caption of the comic panel image. 

      - img_src: "comic_1.png"
        caption: Caption of the comic panel image. 

### Hero component
- component_name: hero
  subtitle: Subtitle for second hero # Optional
  title: Second instance of hero
  description: This will display slightly differently than the main hero # Optional
  cta_label: Hero CTA # Optional
  cta_url: hero-url # Optional
  hero_img: "random-img3.svg"

## Tab bar component
- component_name: tabBar
  tabBarItems:
    ## Duplicate from here to add another tabbar menu item
    ## Recommended 2 minimum. 
  - img_src: "random-img3.svg"
    label: Example label
    url: "path/to/page" # Optional. When removed, the url will inherit the label name. ie. "#example-label"

## Slideshow component
- component_name: slideshow
  title: Title of slideshow section
  description: Description of slideshow section ## Optional
  slideshowItems:
  ## Duplicate from here to add a slide
  ## Recommended 2 minumum. 
  - title: Title of first slide
    description: Description of first slide
    img_src: "hero-test.svg"


## Prefooter component
- component_name: preFooter
  # For the preFooter, only define the information below
  # below if you want to overwrite the defaults for a particular page
  left:
    img_src: "random-img.svg"
    title: Custom left title
    description: Custom description for left side.
    cta_label: Custom CTA
    cta_url: left-cta
  right:
    img_src: "random-img2.svg"
    title: Custom right title
    description: Custom description for right side.
    cta_label: Custom CTA
    cta_url: right-cta
---