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

## Create a page
Make sure to read this even if you don't want to create a new page. It will likely help you understand how to edit more effecitvly. 

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
* **Description** Description of study. This will also appear in the index page at ``/case-studies``
* **Location** Location of school
* **School level** Middle school, High school, etc
* **Hero image** Appears at top of the case study page as well as in the index page at ``/case-studies``
3. Still within the dashes, you will define the statistics in the same way you define components for the landing pages. Make a statistics object followed by a ``value`` and a ``value_subtitle``. View a file in ``_/case_studies`` folder for examples. 
4. Lastly, after the three dashes, you will define text of the study in markdown. Anything you can do in markdown, you can do in here. 

### Component documentation
View file ``examples.md`` for information on components.
Visit ``/examples`` to see them live. 

### Update the navigation
Data > nav.yml (More to come on this)

### Site information
Data > information (More to come on this)

## Author

**Marc Deely**
