# pragmatic-rest

## WIP!

The idea is to create a stupid simple web app to quickly design and document a REST API.

Use cases:

1. Designing a new API
2. Documentation
3. Scaffolding and code generators


## Goals of pragmatic-rest:

 - Entirely open sourced
 - Modularise everything, enabling flexability
 - A simple specification

 TODO

 - Replace the $ref tags with better links
  - Possibly require the module in
 - Add repo link for each module
 - Documentation
 - Push seperate npm modules
 - Test schemas should be exported and required in other tests

 ## Directory Structure

 schemas/
 |__<module>/ -- each a standalone npm module
    |__ package.json
    |__ schema.json
    |__ test/
