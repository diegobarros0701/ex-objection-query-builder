const { QueryBuilder } = require('objection');

class ExObjectionQueryBuilder extends QueryBuilder {
  whereLike(columns = [], value) {

    this.where(function () {
      columns.forEach((column, index) => {
        if (index == 0) {
          this.whereRaw('unaccent(' + column + '::text) ilike unaccent(?)', '%' + value + '%');
        } else {
          this.orWhereRaw('unaccent(' + column + '::text) ilike unaccent(?)', '%' + value + '%');
        }
      });
    });

    return this;
  }
}

module.exports = { ExObjectionQueryBuilder };