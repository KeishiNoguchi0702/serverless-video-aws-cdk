import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as iam from 'aws-cdk-lib/aws-iam';

export class IAM extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const roleName = 'lambda-s3-execution-role';
    const lambdaPrinciple = 'lambda.amazonaws.com';
    const lambdaRole = new iam.Role(this, roleName, {
      roleName: roleName,
      assumedBy: new iam.ServicePrincipal(lambdaPrinciple),
    });
    cdk.Tags.of(lambdaRole).add('Name', roleName);

    lambdaRole.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonElasticTranscoder_JobsSubmitter'));
    lambdaRole.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('AWSLambdaExecute'));
  }
}
