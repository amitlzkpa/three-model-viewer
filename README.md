# Lit-element starter

Simple [lit-element](https://lit-element.polymer-project.org/) starter based on webpack.

## Execution

```bash
# production build
npm run build

# run dev server at http://localhost:3000
npm run serve

# unit tests
npm run test:unit

# e2e tests (make sure app is started)
npm run serve
npm run test:e2e

# Lintting
npm run lint
```

## Add new component

1. Copy the folder `./src/components/myhello`
1. Rename the copy with your component name
1. Rename all files in the new folder
1. Rename the classname of `./src/components/<your-component>/<your-component>.ts` and adjust the content of the files in your folder
1. Import your component in [app.ts](src/app.ts) 
    ```ts
    import './components/<your-component>/<your-component>.ts';
    ```
1. You may want to add you component to the demonstration page [index.html](index.html)
1. `npm run serve` your project, go to http://localhost:3000 where you should be able to see your component