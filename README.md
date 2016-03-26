# Angular2 - TypeScript - WebPack Starter Template

This template is a loosely-based, stripped down version of the @AngularClass angular2-webpack-starter and the Angular2 Hero Tutorial.

The goal is to create a simple starter template that can be easily understood and also reconfigured to a user's needs.

### Quick start
**Make sure you have node version >= 4.0**
> Clone/Download the repo then edit `app.ts` inside [`/src/app/app.component.ts`](/src/app/app.component.ts)

```bash
# clone the repo
# --depth 1 removes all but one .git commit history
git clone --depth 1 https://github.com/bradmaxs/angular2-typescript-webpack.git

# navigate into the newly created project
cd angular2-typescript-webpack

# add required global libraries
npm install typings webpack-dev-server rimraf webpack -g

# install the node modules
npm install

# fire it up
npm start
```
go to [http://0.0.0.0:3000](http://0.0.0.0:3000) or [http://localhost:3000](http://localhost:3000) in your browser