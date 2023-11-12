#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';

import { S3 } from '../lib/s3';
import { IAM } from '../lib/iam';

const app = new cdk.App();
new S3(app, 'S3', {});
new IAM(app, 'IAM', {});
