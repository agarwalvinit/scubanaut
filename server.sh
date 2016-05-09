#!/usr/bin/env bash

webpack --color --watch & webpack-dev-server --inline --content-base ./dist
