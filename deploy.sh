#!/bin/bash
if [ "$TRAVIS_BRANCH" == "master"  ]; then
  firebase deploy --token $FIREBASE_TOKEN --project wfcchoops-f84d0
fi
