#!/bin/bash

set -e

ng build --base-href /cremaillere/ -prod
pushd ../
git rm *.*
mv -v src/dist/* ./
git add *.*
popd
