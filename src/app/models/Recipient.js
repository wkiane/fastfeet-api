import Sequelize, { Model } from 'sequelize';

class Recipient extends Model {
  static init(sequelize) {
    super.init(
      {
        street: Sequelize.STRING,
        number: Sequelize.INTEGER,
        address_complement: Sequelize.TEXT,
        state: Sequelize.STRING,
        city: Sequelize.STRING,
        zip_code: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Recipient;
