/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    //pgm.db.query('CREATE TABLE dab');

    pgm.createTable('brands', {
        id: 'id',
        name: { type: 'varchar(50)', notNull: true },
    });

    pgm.createTable('divisions' ,{
        id: 'id',
        name: { type: 'varchar(50)', notNull: true },
    });
};

exports.down = (pgm) => {

};
