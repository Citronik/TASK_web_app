module.exports = (sequelize, DataTypes) => {
    
    const User = sequelize.define("user", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(64),
          },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,            
        },
        firstName: {
            type: DataTypes.STRING(50),
            allowNull: true,          
        },
        lastName: {
            type: DataTypes.STRING(50),
            allowNull: true,          
        }
    })
    return User
};