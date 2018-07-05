import bcrypt from 'bcrypt'
// var bcrypt = require('bcrypt')

export default function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1, 20]
      }
    },
    phone: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    password_hash: DataTypes.STRING,
    password: {
      type: DataTypes.VIRTUAL,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [8, 128]
      }
    }
  },{
    underscored: true,
    tableName: 'user',
  })

  User.prototype.authenticate = function(value) {
    if (bcrypt.compareSync(value, this.password_hash)){
      return this;
    } else{
      return false;
    }
  }

  function hasSecurePassword(user) {
    if (user.password != user.passwordConfirmation) {
      return sequelize.Promise.reject(
        new Error('Password confirmation doesn\'t match Password')
      );
    }
    return bcrypt.hash(user.password, 10).then(function(hash) {
      user.passwordDigest = hash;
    });
  }

  User.beforeCreate((user) => {
    if (user.password){
      return hasSecurePassword(user);
    }
  })

  User.beforeUpdate((user) => {
    if (user.password){
      return hasSecurePassword(user);
    }
  })
  return User
}