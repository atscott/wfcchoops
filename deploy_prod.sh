#!/bin/bash

scp $ARTIFACT_ZIP $DEPLOY_USER@$DEPLOY_HOST:"/home/$DEPLOY_USER/"
ssh $DEPLOY_USER@$DEPLOY_HOST 'sh deploy_wfcc.sh'