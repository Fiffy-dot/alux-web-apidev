import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

const Borrows = sequelize.define('member', {
  id: {
    autoIncrement: true,
    type: Sequelize.BIGINT,
    allowNull: false,
    primaryKey: true
  },
  member_name: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  book_borrowed: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  date_borrowed: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  returned_date: {
    type: Sequelize.DATEONLY,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'borrows',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "id" },
      ]
    },
  ]
});

export default Borrows;
