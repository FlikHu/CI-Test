#!/bin/sh

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit_website_files() {
  git checkout production
  git add .
  git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"
}

upload_files() {
  git remote add origin https://github.com/FlikHu/CI-Test.git > /dev/null 2>&1
  git push --quiet --set-upstream origin production
}

setup_git
commit_website_files
upload_files