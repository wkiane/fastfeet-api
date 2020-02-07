import Sequelize, { Model } from 'sequelize';

class Courier extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    // todo association avatar_id

    return this;
  }

  /*  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
  } */
}

export default Courier;
