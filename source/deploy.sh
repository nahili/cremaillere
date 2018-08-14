#!/bin/bash

set -e

ng build --base-href /cremaillere/ --prod
pushd ../
git rm *.*
cp -rv source/dist/source/* ./
git add *.* assets
popd
