#!/bin/bash

[ -z $1 ] && echo Must provide a valid version && exit || ver=$1

set -x

tgt_dir="$(pwd)"

cd /tmp

git clone https://github.com/piraeusdatastore/piraeus-operator.git -b "$ver"

helm package piraeus-operator/charts/*

mv -vf *.tgz "$tgt_dir"

cd "$tgt_dir"

helm repo index .

rm -vfr /tmp/piraeus-operator

ls 
