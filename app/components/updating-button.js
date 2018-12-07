import Component from '@ember/component';

export default Component.extend( {
  tagName: 'button',
  buttonText: 'Update',

  click(){

      this.set('buttonText', 'Updating...');
      this.onClick().then(() => {
        this.set('buttonText', 'Update');
      })
    }


});
