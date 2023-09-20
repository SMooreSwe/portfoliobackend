import { DataTypes } from 'sequelize';
import { sequelize } from '../Config/db.js';

export const Project = sequelize.define("project", {
    heading: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    blurb: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    deployed: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    github: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    src: {
        type: DataTypes.STRING,
        allowNull: false,
    },

});

Project.sync().then(() => {
    console.log("User Model synced");
});