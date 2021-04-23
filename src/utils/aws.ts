import * as AWS from 'aws-sdk';
import store from '../store';
import { awsCredentialsFormInfo } from '../prompts';
const { Form } = require('enquirer');
import { AWSCredentialsAnswers } from '../constants/cliTypes';

/**
 * Used to ensure aws credentials exist prior to doing some operation
 * that would require them.
 */
export const ensureCredentials = async (): Promise<void> => {
  if (
    !store.AWS.Credentials.accessKeyId ||
    !store.AWS.Credentials.secretAccessKey
  ) {
    console.clear();

    const answers: AWSCredentialsAnswers = await (new Form(awsCredentialsFormInfo)).run();
    store.AWS.Credentials.accessKeyId = answers['Access Key ID'];
    store.AWS.Credentials.secretAccessKey = answers['Secret Key'];
  }
};

export async function setCredentials(): Promise<void> {
  await ensureCredentials();
  AWS.config.update({
    accessKeyId: store.AWS.Credentials.accessKeyId,
    secretAccessKey: store.AWS.Credentials.secretAccessKey,
  });
}
