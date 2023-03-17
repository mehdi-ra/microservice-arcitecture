import {connect} from 'amqplib';

export const rabbitMQConnectionFactory = async function () {
  return await connect({
    username: 'admin',
    password: 'admin',
  });
};
