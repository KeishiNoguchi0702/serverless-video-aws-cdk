import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class S3 extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket01 = new s3.Bucket(this, 'bucket01', {
      bucketName: 'serverless-video-upload-keishi',
    });

    const bucket02 = new s3.Bucket(this, 'bucket02', {
      bucketName: 'serverless-video-transcoded-keishi',
    });
  }
}
