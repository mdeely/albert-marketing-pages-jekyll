---
components:
- component_type: hero
  supertitle: Hero supertitle
  title: Hero title
  description: Hero description
  cta_label: Hero CTA
  cta_url: hero-url
  img_src: "assets/img/hero-test.svg"

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

- component_type: grid
  title: Grid title
  gridItems:
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

- component_type: comicStrips
  comicStrips:
    - teacher_name: Mr. Deely
      teacher_img_src: "assets/img/random-img2.svg"
      comicPanels:
      - img_src: "assets/img/random-img.svg"
        caption: First panel of FIRST strip

      - img_src: "assets/img/hero-test.svg"
        caption: Second panel of FIRST strip

    - teacher_name: Mr. Secondeely
      teacher_img_src: "assets/img/random-img3.svg"
      comicPanels:
      - img_src: "assets/img/random-img2.svg"
        caption: First panel of SECOND strip

      - img_src: "assets/img/random-img3.svg"
        caption: Second panel of SECOND strip

- component_type: hero
  title: Second title
  description: Second description
  cta_label: Hero CTA
  cta_url: hero-url
  img_src: "assets/img/random-img3.svg"

- component_type: tabBar
  tabBarItems:
  - img_src: "assets/img/hero-test.svg"
    label: Item 1
    url: "/"

  - img_src: "assets/img/hero-test.svg"
    label: Item 2
    url: "/"

- component_type: slideshow
  title: Slideshow title
  description: Slideshow description
  slideshowItems:
  - title: Slideshow item 1
    description: Slideshow description 1
    img_src: "assets/img/hero-test.svg"

  - title: Slideshow item 2
    description: Slideshow description 2
    img_src: "assets/img/hero-test.svg"
---