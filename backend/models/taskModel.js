module.exports = (sequelize, DataTypes) => {
    
    const Task = sequelize.define("task", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,            
        },
        priority: {
            type: DataTypes.INTEGER,
        },

    })
    return Task
};