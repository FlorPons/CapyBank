import { Model, DataTypes, Sequelize } from "sequelize";
class Card extends Model {
  public card_id!: number;
  public expiration_date!: Date;
  public card_number!: number;
  public cvv!: number;
  public account_id!: number;

  static initModel(sequelize: Sequelize) {
    Card.init(
      {
        card_id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        expiration_date: {
          type: DataTypes.DATE,
          allowNull: false
        },
        card_number: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false
        },
        cvv: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        cardholder_name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        account_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "card",
        hooks: {
          beforeCreate: async (card) => {
            card.card_number = Date.now() + Math.floor(Math.random() * 10000000000000000);
            card.cvv = Math.ceil(Math.random() * 1000);
            card.expiration_date = new Date();
            card.expiration_date.setFullYear(card.expiration_date.getFullYear() + 5)
          },
        },
      }
    );
  }
}
export default Card;
