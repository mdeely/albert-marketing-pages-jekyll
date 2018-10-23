# Marketing Pages for Albert (2018)

## Getting Started

### Prerequisites

* Familiarity with terminal
* Familiarity with Github
* Text editor
* A browser (Chrome, Safair, Firefox, etc)

### Install Jekyll
[Install Jekyll](https://jekyllrb.com/docs/installation/) to get started.

** Depending on how this app is set up, you may not need Jeklly installed. NOTE: Update this comment when/if relevant **


## Overview
All URLs are generated from mardown files (.md) within the following folders: 

* ``/_landing_pages``
* ``/_case_studies``

When referencing the file path for visual assets, they will always be relative to `/assets/img/`.
If you are trying to reference an image found in `assets/img/features/comics/panel_1.png`, you would just write `comics/panel_1.png`.

Markdown flavor is [Kramdown](https://kramdown.gettalong.org/syntax.html).

## Create a page
Make sure to read this even if you don't want to create a new page. It will likely help you understand how to edit more effecitvly. 

### SEO + [Open Graph](http://ogp.me/)
For SEO purposes, define the title and description of each page (notes on how to do so below). The title will be the **page title** and the **og:title**. The description will be the **page description** and the **og:description**. 


### New landing page
1. Create a new .md file and place it in ``/_landing_pages``. Name the file whatever you want the URL to read as. Ex: ``name-of-file.md`` would appear as ``www.website.com/name-of-file``
2. The file must start with a YAML front matter block. This means that the start of **the file should have three dashes at the start and end of the document.** You will define the following between the dashes:
* **Title**
* **Description**
* **Components** You can find a list of components and options in ``/_landing_pages/examples.md``. Visiting ``/examples`` will show you how they appear. 
3. After saving the file, open your terminal and run ``jekyll serve``. Navigate to your local server (address will display in the terminal window) to view changes. 
4. Push you changes to ``idk-yet`` branch (Update this once the exact process is determined).

### New case study page
1. Create a new .md file and place it in ``/_case_studies``. Name the file whatever you want the URL to read as. Ex: ``/case-studies/name-of-study.md`` would appear as ``www.website.com/name-of-study``
2. The file must start with a YAML front matter block. This means that the start of **the file should have three dashes at the start and end of the document.** You will define the following between the dashes:
* **Title** Title of study name.  This will also appear in the index page at ``/case-studies``
* **Description** Description of study. This will appear in the index page at ``/case-studies``
* **Location** Location of school
* **School level** Middle school, High school, etc
* **Hero image** Appears at top of the case study page as well as in the index page at ``/case-studies``
3. Still within the dashes, you will define the statistics in the same way you define components for the landing pages. Make a statistics object followed by a ``value`` and a ``value_subtitle``. View a file in ``_/case_studies`` folder for examples. 
4. Lastly, after the three dashes, you will define text of the study in markdown. Anything you can do in markdown, you can do in here. 

### Component documentation
View file ``examples.md`` for information on components.
Visit ``/examples`` to see them live. 
### Update the navigation
Within `data/nav.yml`, you can update the navigation structure in the primary nav. Look at this file for more information. 

### Site information
Within ``data/information.yml`` you can set variables for things like the company address, phone number, taglines, or anything else that may be used frequently and/or repeated throughout the site.
Data > information (More to come on this)

### Config
Within ``config.yml``, you will find a the configuration for the app. You can set global variables here as well. These variables are meant to be changed infrequently if at all and are generally used for backend configuration. A notable variable in here is the ``asset_path`` var. This may need to be updated based on where the assets come from. 

## Author
**[Marc Deely](www.marcdeely.com)**
themarcusdeely@gmail.com
