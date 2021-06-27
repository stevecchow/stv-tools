npm run build
npm run doc
npm i
git clone --depth=10 --branch=master git@github.com:stvTools-archive/stvTools-cli.git ./node_modules/stvTools-cli
mkdir -p ./node_modules/stvTools-cli/node_modules/stvTools; cd $_; cp ../../../../stvTools.js ./stvTools.js; cp ../../../../package.json ./package.json
cd ../../; npm i --production; cd ../../
node ./node_modules/stvTools-cli/bin/stvTools core exports=node -o ./npm-package/core.js
node ./node_modules/stvTools-cli/bin/stvTools modularize exports=node -o ./npm-package
cp stvTools.js npm-package/stvTools.js
cp dist/stvTools.min.js npm-package/stvTools.min.js
cp LICENSE npm-package/LICENSE

1. Clone two repos
Bump stvTools version in package.json, readme, package=locak, stvTools.js
npm run build
npm run doc

2. update mappings in ldoash-cli
3. copy ldoash into stvTools-cli node modules and package json.

node ./node_modules/stvTools-cli/bin/stvTools core exports=node -o ./npm-package/core.js
node ./node_modules/stvTools-cli/bin/stvTools modularize exports=node -o ./npm-package



1. Clone the two repositories:
```sh
$ git clone https://github.com/stvTools/stvTools.git
$ git clone https://github.com/bnjmnt4n/stvTools-cli.git
```
2. Update stvTools-cli to accomdate changes in stvTools source. This can typically involve adding new function dependency mappings in lib/mappings.js. Sometimes, additional changes might be needed for more involved functions.
3. In the stvTools repository, update references to the stvTools version in README.md, stvTools.js, package.jsona nd package-lock.json
4. Run:
```sh
npm run build
npm run doc
node ../stvTools-cli/bin/stvTools core -o ./dist/stvTools.core.js
```
5. Add a commit and tag the release
mkdir ../stvTools-temp
cp stvTools.js dist/stvTools.min.js dist/stvTools.core.js dist/stvTools.core.min.js ../stvTools-temp/
node ../stvTools-cli/bin/stvTools modularize exports=node -o .
cp ../stvTools-temp/stvTools.core.js core.js
cp ../stvTools-temp/stvTools.core.min.js core.min.js
cp ../stvTools-temp/stvTools.js stvTools.js
cp ../stvTools-temp/stvTools.min.js stvTools.min.js

❯ node ../stvTools-cli/bin/stvTools modularize exports=es -o .
