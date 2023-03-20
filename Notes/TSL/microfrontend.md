## TSL- 10 year retreat

# Micro front ends with monorepo architecture

## what are micro frontends?

- inspired by microservices arch
- main idea: bread down a code base into multiple smaller and more concise applications that can be managed seperately
  but presented as a single front end app.
- it is *not* a silver bullet.

## Advantages

- allow faster and independent deployent cycles
- good dev experience
- isolate failure
- reduce depndence within teams
- increade modulolaton (?)

## Drawbacks

- can lead to more complex environment overall.
- UX consistency can be challenging (because you have to make sure youre keeping up withthe design)
- state management needs to be thought out
- increased builds sizes if not done correctly.

## What kind of team/project suits micro frontend arch?

- large teams
- large code bases
- scale/modernize legacy codebase
- good team understanding about the architecture

## Vertical split

- a single micro-front-end (MF) is responsibel for a page/route in the application.
- similart to traditional arch
- MF does not contain components from other MF's
- MF can have multiple pages/routes inside itself.

# Horizontal split

- you dont have to pick only vertical or horizontal, you can blend the two
- compose views by reusing dif MF's

## MF solutions

- iframes
- web components
- module federtion
- 