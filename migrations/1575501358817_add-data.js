/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.db.query("INSERT INTO brands (name) VALUES ('CompHealth'), ('Weatherby Healthcare')")
    pgm.db.query("INSERT INTO divisions (name) VALUES ('CHG'), ('WBY')")
};

exports.down = (pgm) => {

};
