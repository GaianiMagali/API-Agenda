module.exports = (sequelize, type) => {
    const persona = sequelize.define('persona', {
        nombres: {
            type: type.STRING
        },
        apellidos: {
            type: type.STRING
        },
        telefono: {
            type: type.STRING
        }
    }, {
        timestamps: true
    })
    return persona;
}