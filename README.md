This repo has 2 vue projects, one created with @vue/cli v4, and one created with @vue/cli v5.

Both were created with the command `vue create v#-test` with the following options:
Select features *Babel *Unit Testing
Vue 2x
Jest
Dedicated jest config file

To reproduce:

1. Install dependencies for both projects using `npm ci`.
1. Within `v4-test` run `npm run test:unit`. Observe that the test passes.
1. Within `v5-test` run `npm run test:unit`. Observe that the same test fails.