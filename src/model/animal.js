import sequelize from 'sequelize'
import { connection } from '../database/connection.js'
// import { infos } from '../../public/js/script'

export const dados = connection.define("dados", {
  id: {
    type: sequelize.TEXT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: sequelize.TEXT,
    allowNull: false,
  },
  img: {
    type: sequelize.TEXT,
    allowNull: false,
  },
  tipo: {
    type: sequelize.BOOLEAN,
    allowNull: false,
  },
  genero: {
    type: sequelize.BOOLEAN,
    allowNull: false,
  },
  medic: {
    type: sequelize.BOOLEAN,
    allowNull: false,
  },
  porte: {
    type: sequelize.INTEGER,
    allowNull: false,
  },
  infonome: {
    type: sequelize.TEXT,
    allowNull: false,
  },
  tel: {
    type: sequelize.TEXT,
    allowNull: false,
  },
  infoemail: {
    type: sequelize.TEXT,
    allowNull: false,
  },
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false, 
});


