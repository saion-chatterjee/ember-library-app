import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleReadStatus(){
      console.log('clicked22' + this);
      this.toggleProperty('readStatus');
      this.get('item').save(); //gets the passed parameters to action toggleReadStatus as a JSON
    }
  }
});
