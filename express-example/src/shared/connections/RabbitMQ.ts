import {connect} from 'amqplib';
export const rabbitmqConnection = connect({
  username: 'admin',
  password: 'admin',
});
