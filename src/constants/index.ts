import * as AWS from 'aws-sdk';
import { setCredentials } from '../utils/aws';

export default {
  LAMBDA_POLICY_ARN: 'arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
  FIREHOSE_POLICY_ARN: 'arn:aws:iam::aws:policy/AmazonKinesisFirehoseFullAccess',
  TIMESTREAM_POLICY_ARN: 'arn:aws:iam::aws:policy/AmazonTimestreamFullAccess',
  S3_POLICY_ARN: 'arn:aws:iam::aws:policy/AmazonS3FullAccess',
};

export const AWS_REGION = 'us-east-1';
export const AWS_FIREHOSE_STREAM_NAME = 'DendroFirehoseStream';
export const AWS_S3_BUCKET_PREFIX = 'dendro-s3-bucket-';
export const AWS_S3_BUCKET_SUFFIX = Math.random().toString(36).substring(2);
export const AWS_S3_BUCKET_NAME = AWS_S3_BUCKET_PREFIX + AWS_S3_BUCKET_SUFFIX;
export const AWS_TIMESTREAM_DATABASE_NAME = 'DendroTimestreamDB';
export const AWS_IAM_ROLE_NAME = 'dendro-s3-lambda-role';
export const AWS_LAMBDA_FUNCTION_NAME = '_deployableLambdaFunction';

/**
 * Ensure credentials are set for the AWS SDK before
 * we begin instaniating aws objects.
 */
setCredentials();
export const AWS_IAM = new AWS.IAM();
export const AWS_CLOUDWATCH = new AWS.CloudWatchLogs({ region: AWS_REGION });
export const AWS_FIREHOSE = new AWS.Firehose({ region: AWS_REGION });
export const AWS_LAMBDA = new AWS.Lambda({ region: AWS_REGION });
export const AWS_S3 = new AWS.S3();
export const AWS_TIMESTREAM_WRITE = new AWS.TimestreamWrite({ region: AWS_REGION });
export const AWS_TIMESTREAM_QUERY = new AWS.TimestreamQuery({ region: AWS_REGION });

export const VECTOR_APACHE_LOGS_TYPE = 'apache-logs';
export const VECTOR_APACHE_METRICS_TYPE = 'apache-metrics';
export const VECTOR_CUSTOM_APPLICATION_TYPE = 'custom-application';
export const VECTOR_HOST_METRICS_TYPE = 'host-metrics';
export const VECTOR_MONGO_LOGS_TYPE = 'mongo-logs';
export const VECTOR_MONGO_METRICS_TYPE = 'mongo-metrics';
export const VECTOR_NGINX_LOGS_TYPE = 'nginx-logs';
export const VECTOR_NGINX_METRICS_TYPE = 'nginx-metrics';
export const VECTOR_POSTGRES_LOGS_TYPE = 'postgres-logs';
export const VECTOR_POSTGRES_METRICS_TYPE = 'postgres-metrics';

export const ALL_TIMESTREAM_DATABASE_TABLES = [
  VECTOR_APACHE_LOGS_TYPE,
  VECTOR_APACHE_METRICS_TYPE,
  VECTOR_CUSTOM_APPLICATION_TYPE,
  VECTOR_HOST_METRICS_TYPE,
  VECTOR_MONGO_LOGS_TYPE,
  VECTOR_MONGO_METRICS_TYPE,
  VECTOR_NGINX_LOGS_TYPE,
  VECTOR_NGINX_METRICS_TYPE,
  VECTOR_POSTGRES_LOGS_TYPE,
  VECTOR_POSTGRES_METRICS_TYPE
];
