const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class theme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.quest, { foreignKey: 'themeId' });
    }
  }
  theme.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'theme'
  });
  return theme;
};
