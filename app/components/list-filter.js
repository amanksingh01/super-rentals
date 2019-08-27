import Component from '@ember/component';

export default Component.extend({
  classNames: ['list-filter'],
  value: '',

  init() {
    this._super(...arguments);
    this.filter('').then((allResults) => this.set('results', allResults.results));
  },

  actions: {
    handleFilterEntry() {
      this.filter(this.value).then((filterResults) => {
        if (filterResults.query === this.value) {
          this.set('results', filterResults.results);
        }
      });
    }
  }
});
